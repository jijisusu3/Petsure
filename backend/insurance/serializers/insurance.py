from rest_framework import serializers
from insurance.serializers.others import SurveySerializer
from ..models import Cover, Cover_type, Insurance, Insurance_detail, Items


class CoverSerializer(serializers.ModelSerializer):
    class CoverTypeSerializer(serializers.ModelSerializer):
        class Meta :
            model = Cover_type
            fields = '__all__'

    cover_type = CoverTypeSerializer(read_only=True)

    class Meta:
        model = Cover
        fields = '__all__'


class ItemsSerialzier(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ('name', 'price', 'item_url', 'image')



class InsuranceSerializer(serializers.ModelSerializer):
    cover = CoverSerializer(many=True, read_only=True)

    class Meta :
        model = Insurance
        fields = '__all__'


class InsuranceDetailSerializer(serializers.ModelSerializer):

    survey = SurveySerializer(read_only=True, many=True)
    
    insurance = InsuranceSerializer(read_only=True)

    class Meta :
        model = Insurance_detail
        fields = '__all__'

        
class CoverTypeSerializer(serializers.ModelSerializer):

    items = ItemsSerialzier(read_only=True, many=True)

    class Meta:
        model = Cover_type
        fields = '__all__'
