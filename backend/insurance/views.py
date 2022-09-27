# from django.shortcuts import render
from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from math import sqrt
from django.http import JsonResponse

import pandas as pd
import numpy as np
# import json

from .models import *
from .serializers.insurance import *
from .serializers.others import *


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

@api_view(['PUT'])
def choice(request):
    user = request.data.get('user')
    insurance_detail = request.data.get('insurance_detail')
    serializer = get_object_or_404(Detail_user, id=user)
    serializer.insurance_choice = insurance_detail
    serializer.save()
    return Response("user_choice 저장")

@api_view(['POST'])
def survey(request):
    user = get_object_or_404(Detail_user, id=request.data.get('user'))
    choice = request.data.get('insurance_detail')
    insurance = get_object_or_404(Insurance_detail, id=choice)
    serializer = SurveySerializer(data=request.data)
    try: # 이 유저가 이미 해당 보험에 대한 의견을 남겼을 때,
        survey_list = get_object_or_404(Survey, detail_user=user, insurance_detail=choice)
    except: # 이 유저가 해당 보험에 대해 의견을 처음 남길 때,
        if serializer.is_valid(raise_exception=True):
            serializer.save(detail_user=user, insurance_detail=insurance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response("This survey already exists", status=400)
    
@swagger_auto_schema(
        method='post',
        request_body=openapi.Schema(
            'basic',
            type=openapi.TYPE_OBJECT,
            properties={
                "breed": openapi.Schema('종 번호', type=openapi.TYPE_INTEGER),
                "animal_name": openapi.Schema('펫 이름', type=openapi.TYPE_STRING),
                "species": openapi.Schema('개/냥', type=openapi.TYPE_INTEGER),
                "animal_birth": openapi.Schema('나이', type=openapi.TYPE_INTEGER),
            }
        ),
        responses={
            200: openapi.Schema(
                type=openapi.TYPE_ARRAY,
                items=openapi.Items(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        "id": openapi.Schema('id', type=openapi.TYPE_NUMBER),
                        "fee": openapi.Schema('요금', type=openapi.TYPE_INTEGER),
                        "insurance_name": openapi.Schema('보험 이름', type=openapi.TYPE_STRING),
                        "company_logo": openapi.Schema('보험사 로고', type=openapi.TYPE_STRING),
                        "company_url": openapi.Schema('보험사 링크', type=openapi.TYPE_STRING),
                        "cover": openapi.Schema('약관', type=openapi.TYPE_OBJECT,
                        properties={
                            "type": openapi.Schema('타입', type=openapi.TYPE_STRING),
                            "price": openapi.Schema('최대보장금액', type=openapi.TYPE_INTEGER),
                            "detail": openapi.Schema('요금', type=openapi.TYPE_STRING)
                        }
                        )
                    }
                    )

                
            )

        }
)
@api_view(['POST'])
def basic(request):
    data = request.data
    condition = [0]*5
    dog_fee = [1, 1.1, 1.3, 1.57, 1.8, 1.95, 2.1, 2.2, 2.27, 1.9, 1.97]
    cat_fee = [1, 0.95, 1.01, 1.03, 1.06, 1.15, 1.19, 1.25, 1.33]

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
            break               
        
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
                break
            

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
        basic_detail['id'] = res[0]['id']
        if data['species'] == 1:
            basic_detail['fee'] = int(res[0]['fee']*dog_fee[data['animal_birth']])
        if data['species'] == 2:
            basic_detail['fee'] = int(res[0]['fee']*cat_fee[data['animal_birth']])            

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


@api_view(["POST"])
def detail(request):
    dog_fee = [1, 1.1, 1.3, 1.57, 1.8, 1.95, 2.1, 2.2, 2.27, 1.9, 1.97]
    cat_fee = [1, 0.95, 1.01, 1.03, 1.06, 1.15, 1.19, 1.25, 1.33]
    data = request.data
    user = []
    into_user = [
        'outpatient', 'hospitalization', 'operation', 'patella', 
        'skin_disease', 'dental', 'urinary', 'liability'
    ]
    for i in into_user:
        user.append(data.get(i))
    user.append(0)


    if data['species'] == 1:
        df_user = pd.read_csv("./knn_data/doguser.csv", encoding="cp949")
    else:
        df_user = pd.read_csv("./knn_data/catuser.csv", encoding="cp949")
    
    df_user.drop(['animal_name', 'species', 'animal_birth', 'breed'], axis=1, inplace=True)
    neighbor_list = df_user.values.tolist()

    k = 51

    lst = [0] * 8
    pk_lst = [0] * 8
    dist_lst = get_pred(user, neighbor_list, k)

    for i in range(8):
        lst[i] = max(dist_lst)
        pk_lst[i] = dist_lst.index(max(dist_lst))
        dist_lst[dist_lst.index(max(dist_lst))] = 0
    print(lst, pk_lst)


    recommends = list()
    for j in range(8):
        recommends.append((pk_lst[j], 100 - 1.96*(j+1)))

    # recommend의 결과값은
    # (insurance_pk, score) 형태로 나옵니다.
    # 이거 가져다 쓰시면 됩니다!!!!!!!!
    result = {}

    before_ranking = []
    sure_ranking = []
    price_ranking = []
    cover_ranking = []

    def make_user():
        serializer = DetailUserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            if serializer.data.get('animal_name') != request.data.get('animal_name'):
                temp_user = get_object_or_404(Detail_user, pk=serializer.data.get('id'))
                temp_user.delete()
                make_user()
            else:
                result["user"] = serializer.data.get('id')
                return

    def make_sure_score(c, p, m):
        s_score = (c * 0.3) + (p * 0.4) + (m * 0.4)
        return s_score

    for i in range(1, len(recommends) + 1):
        temp_detail = {}
        d, matching_score = recommends[i - 1]
        
        recommend = get_object_or_404(Insurance_detail, id=d)
        serializer = InsuranceDetailSerializer(recommend)


        temp_detail["name"] = serializer.data.get("name")

        if data["species"] == 1:
            temp_detail["fee"] = int(serializer.data.get("fee")*dog_fee[data["animal_birth"]])
        if data["species"] == 2:
            temp_detail["fee"] = int(serializer.data.get("fee")*cat_fee[data["animal_birth"]])

        temp_detail["all_cover"] = serializer.data.get("all_cover")
        temp_detail["insurance"] = serializer.data.get("insurance")
        
        # 해당 보험의 basic_cover, special_cover 보내주기
        basic_cover = []
        special_cover = []
        basic = serializer.data.get("basic")
        special = serializer.data.get("special")
        cover_list = serializer.data.get("insurance").get("cover")

        company_score = serializer.data.get("insurance").get("company_score")
        price_score = serializer.data.get("insurance").get("price_score")
        temp_detail["sure_score"] = make_sure_score(company_score, price_score, matching_score)
        print(company_score)
        print(price_score)
        print(temp_detail["sure_score"])

        cover_count = 0
        if bool(basic):
            for c in basic:
                cover_count += 1
                cover = {}
                for i in cover_list:
                    if i["id"] == c:
                        cover["cover_type"] = i["cover_type"]["id"]
                        cover["price"] = i["price"]
                        cover["detail"] = i["detail"]
                        basic_cover.append(cover)
            temp_detail["basic"] = basic_cover
                
        if bool(special):
            for c in special:
                cover_count += 1
                cover = {}
                for i in cover_list:
                    if i["id"] == c:
                        cover["cover_type"] = i["cover_type"]["id"]
                        cover["price"] = i["price"]
                        cover["detail"] = i["detail"]
                        special_cover.append(cover)
            temp_detail["special"] = basic_cover

        temp_detail["cover_count"] = cover_count


        # survey 비율 넣기
        temp_survey = []
        more_temp_survey = []
        survey_list = serializer.data.get("survey")
        count_survey = 0
        for survey in survey_list:
            more_temp_survey.append(survey["score"])
            count_survey += 1
        for i in range(5, 0, -1):
            count_score = 0
            for j in more_temp_survey:
                if i == j:
                    count_score += 1
            temp_survey.append(count_score/count_survey)
        temp_detail["survey"] = temp_survey



        # 상품 넣기
        user_survey = []
        this_cover = temp_detail["all_cover"][4:8]
        key_list = [
            'patella', 'skin_disease', 'dental', 'urinary'
        ]

        for k in key_list:
            user_survey.append(request.data.get(k))

        item_cover = 0
        max_missing = 0
        for i in range(0, 4):
            missing = user_survey[i]
            if (not bool(this_cover[i])) and (max_missing < missing):
                max_missing = missing
                item_cover = i + 4

        if bool(item_cover):
            temp_detail["item_cover"] = item_cover
            missing_type =  get_object_or_404(Cover_type, id=item_cover)
            serializer = CoverTypeSerializer(missing_type)
            print(serializer.data.get("items")[6:10])
            # temp_detail["items"] = serializer.data.get("items")

        before_ranking.append(temp_detail)

    result["before_ranking"] = before_ranking

    return JsonResponse(result)

# -------------------------------------------------------------------------------
# K-nearest neighbor 구현에 필요한 함수입니다.-------------------------------------

def euclidean_distance(user, neighbor):
	distance = 0.0
	for i in range(len(user)-1):
		distance += (user[i] - neighbor[i])**2
	return sqrt(distance)

def inverse_weight(user, neighbor):
  weight = 0.0
  num = 1.0
  const = 0.1
  distance = euclidean_distance(user, neighbor)
  weight = num / (distance + const)
  return weight

def get_neighbors(user, neighbor_list, k):
	distances = list()
	for neighbor in neighbor_list:
		dist = inverse_weight(user, neighbor)
		distances.append((neighbor, dist))
	distances.sort(reverse=True, key=lambda tup: tup[1])
	print('neighbors distances : ', distances)

	near_neighbors = list()
	for i in range(k):
		near_neighbors.append(distances[i][0])
	print('near neighbors : ', near_neighbors)
	return near_neighbors

def predict_classification(user, neighbor_list, k):
	neighbors = get_neighbors(user, neighbor_list, k)
	predict_candidate = [row[-1] for row in neighbors]
	print('predict_candidate : ', predict_candidate)
	prediction = predict_candidate
	# prediction = max(set(predict_candidate), key=predict_candidate.count)
	return prediction

def get_pred(user, neighbor_list, k):
	predict_candidate = predict_classification(user, neighbor_list, k)
	for neighbor in neighbor_list:
		weight_dist = inverse_weight(user, neighbor)
	lst = [0] * 62 # 보험이 61개이므로 62로 지정, 추후 보험상품 추가되면 수정 필요
	for i in range(k):
		x = predict_candidate[i]
		lst[x] += weight_dist
	return lst