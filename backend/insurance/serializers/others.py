
from rest_framework import serializers
from ..models import Breed, Cover_type, Detail_user, Disease, Survey
from .insurance import InsuranceDetailSerializer



class BreedSerializer(serializers.ModelSerializer):

    class DiseaseSerializer(serializers.ModelSerializer):
        class Meta :
            model = Disease
            fields = ('name', 'cover_type_id',)

    disease = DiseaseSerializer(many=True, read_only=True)

    class Meta :
        model = Breed
        fields = '__all__'

class DiseaseListSerializer(serializers.ModelSerializer):

    class Meta :
        model = Disease
        fields = ('id', 'name',)

class DiseaseSerializer(serializers.ModelSerializer):
    
    class CoverTypeSerializer(serializers.ModelSerializer):
        class Meta :
            model = Cover_type
            fields = '__all__'


    class Meta :
        model = Disease
        fields = '__all__'


class DetailUserSerializer(serializers.ModelSerializer):
    class Meta :
        model = Detail_user
        fields = '__all__'
    

class SurveySerializer(serializers.ModelSerializer):
    detail_user = DetailUserSerializer(read_only=True)
    insurance_detail = InsuranceDetailSerializer(read_only=True)

    class Meta :
        model = Survey
        field = '__all__'


