from django.shortcuts import render
from django.shortcuts import get_list_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Breed
from insurance.serializers.others import BreedSerializer


# Create your views here.
@api_view(['GET'])
def breed(request):
    breeds = get_list_or_404(Breed)
    serializer = BreedSerializer(breeds, many=True)
    return Response(serializer.data)

