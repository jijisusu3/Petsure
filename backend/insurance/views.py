# from django.shortcuts import render
from django.shortcuts import get_list_or_404, get_object_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

import pandas as pd
import numpy as np
# import json

from .models import Breed, Disease, Insurance_detail, Insurance, Cover, Cover_type
from insurance.serializers.others import BreedSerializer, DiseaseListSerializer, DiseaseSerializer


# Create your views here.
@api_view(['GET'])
def breed(request):
    breeds = get_list_or_404(Breed)
    serializer = BreedSerializer(breeds, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def breed_detail(request, breed_id):
    breed = get_object_or_404(Breed, pk=breed_id)
    serializer = BreedSerializer(breed)
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
    data = request.data
    condition = [0]*5

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

    basics = []
    for result in results:
        basic_detail = {}
        res = Insurance_detail.objects.filter(id=result+1).values()
        print(res[0])
        basic_detail['id'] = res[0]['id']
        basic_detail['fee'] = res[0]['fee']

        res_mother = Insurance.objects.filter(id=res[0]['insurance_id']).values()
        basic_detail['insurance_name'] = res_mother[0]['insurance_name']
        basic_detail['company_logo'] = res_mother[0]['company_logo']
        basic_detail['company_url'] = res_mother[0]['company_url']

        res_cover = []
        for i in res[0]['basic']:
            rc_detail = {}
            rc = Cover.objects.filter(id=i).values()
            rc_ct = Cover_type.objects.filter(id=rc[0]['cover_type_id']).values('type')
            rc_detail['type'] = rc_ct[0]['type']
            rc_detail['price'] = rc[0]['price']
            rc_detail['detail'] = rc[0]['detail']
            res_cover.append(rc_detail)

        basic_detail['cover'] = res_cover
        basics.append(basic_detail)

    return Response(basics)