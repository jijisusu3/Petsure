# from django.shortcuts import render
from django.shortcuts import get_list_or_404, get_object_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

import pandas as pd
import numpy as np
# import json

from .models import Breed, Disease, Insurance_detail, Insurance
from insurance.serializers.others import BreedSerializer, DiseaseListSerializer, DiseaseSerializer


# Create your views here.
@api_view(['GET'])
def breed(request):
    breeds = get_list_or_404(Breed)
    serializer = BreedSerializer(breeds, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def disease(request):
    diseases = get_list_or_404(Disease)
    serializer = DiseaseListSerializer(diseases, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def disease_detail(request, disease_id):
    disease = get_object_or_404(Disease, id=disease_id)
    serializer = DiseaseSerializer(disease)
    return Response(serializer.data)

@api_view(['POST'])
def basic(request):
    # 1. **프론트** ⇒ 개/냥, 나이, 종 **POST**  *(저장은 안함)* 
    # 2. USER 정보 리스트 생성 [x, x, x, x, x] (슬개골, 피부, 구강, 비뇨기, 배상책임)
    data = request.data
    condition = [0]*5

# 3. 받은 나이 별 ⇒ 질병 체크 / 종 별 ⇒ 맹견 분류 (맹견 - 배상책임) + 취약 질병 체크
# 4. 개/냥 ⇒ 보험 필터링
# - 나이
#     - 개
#         - 0, 1 : 슬개골, 피부
#         - 2 ~ 5 : 구강
#         - 6 ~ :  구강, 피부, 비뇨
#     - 고양이
#         - 0 : 피부
#         - 1 , 2 :
#         - 3 ~ 5 : 구강
#         - 6 ~ : 구강, 비뇨

    if data['species'] == 1: # 개
        # 나이
        if data['animal_birth'] <= 1:
            condition[0] += 1
            condition[1] += 1
        elif 2 <= data['animal_birth'] <= 5:
            condition[2] += 1
        else:
            condition[1] += 1
            condition[2] += 1
            condition[3] += 1
        # 종 별 질병 및 배상 책임
        breeds = Breed.objects.values()

        for breed in breeds:
            if data['breed'] == breed['id']:
                if breed['wild']: 
                    condition[4] += 1
                
                disease_data = Disease.objects.filter(breed=data['breed']).values()
                for disease_detail in disease_data:
                    if disease_detail['cover_type_id']:
                        condition[disease_detail['cover_type_id']- 4] += 1                
        
        insurances = Insurance_detail.objects.values()
        distance = []
        for insure in insurances:
            if Insurance.objects.filter(id=insure['insurance_id']).values('species') != 2:
                tmp = insure['all_cover'][4:]
                compare = np.array(tmp)
                dist = np.linalg.norm(compare - condition)
                distance.append(dist)



    if data['species'] == 2: # 고양이
        if data['animal_birth'] == 0:
            condition[1] += 1
        elif 3 <= data['animal_birth'] <= 5:
            condition[2] += 1
        elif data['animal_birth'] >= 6:
            condition[2] += 1
            condition[3] += 1

        breeds = Breed.objects.values()
        for breed in breeds:
            if data['breed'] == breed['id']:
                disease_data = Disease.objects.filter(breed=data['breed']).values()
                for disease_detail in disease_data:
                    if disease_detail['cover_type_id']:
                        condition[disease_detail['cover_type_id']- 4] += 1

        insurances = Insurance_detail.objects.values()
        distance = []
        for insure in insurances:
            if Insurance.objects.filter(id=insure['insurance_id']).values('species') != 1: 
                tmp = insure['all_cover'][4:]
                compare = np.array(tmp)
                dist = np.linalg.norm(compare - condition)
                distance.append(dist)           

        
    df = pd.DataFrame({
        "distance" : distance
    })

    sorted_df = df.sort_values(by=["distance"], ignore_index=False)[:15]
    results = sorted_df.index.to_list()
    
    basic = []
    for result in results:
        basic.append(Insurance_detail.objects.filter(id=result).values())
        print(Insurance_detail.objects.filter(id=result).values())
        pass


# 5. 필터링된 보험들[3:]과 USER 정보 리스트 유클리드 거리 유사도 측정
# 6. 결과 sort ⇒ 15개 잘라서 response body 담아서 보냄.
    return 