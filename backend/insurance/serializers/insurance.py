from rest_framework import serializers
from ..models import Cover, Cover_type, Insurance, Insurance_detail, Items


class CoverSerializer(serializers.ModelSerializer):
    class CoverTypeSerializer(serializers.ModelSerializer):
        model = Cover_type
        fields = '__all__'

    cover_type = CoverTypeSerializer(read_only=True)

    class Meta:
        model = Cover
        fields = '__all__'


class ItemsSerialzier(serializers.ModelSerializer):
    class CoverTypeSerializer(serializers.ModelSerializer):
        model = Cover_type
        fields = '__all__'
    
    cover_type = CoverTypeSerializer(read_only=True)

    class Meta:
        model = Items
        fields = '__all__'


class InsuranceSerializer(serializers.ModelSerializer):
    cover = CoverSerializer(many=True, read_only=True)

    class Meta :
        model = Insurance
        fields = '__all__'


class InsuranceDetailSerializer(serializers.ModelSerializer):
    insurance = InsuranceSerializer(read_only=True)

    class Meta :
        model = Insurance_detail
        fields = '__all__'