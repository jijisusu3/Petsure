# from django.shortcuts import render
from django.shortcuts import get_list_or_404, get_object_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework import status
# import json

from .models import Breed, Disease
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