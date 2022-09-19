from django.db import models

# Create your models here.
class insurance(models.Model):
    company_name = models.CharField(max_length=100)
    insurance_name = models.CharField(max_length=100)
    species = models.IntegerField
    company_score = models.FloatField
    company_url = models.CharField(max_length=100)
    company_logo = models.CharField(max_length=200)
    renewal = models.BooleanField
    payment_period = models.IntegerField
    content = models.TextField(null=True)
    etc = models.TextField(null=True)
    price_score = models.IntegerField


class insurance_detail(models.Model):
    insurance = models.ForeignKey(insurance, on_delete=models.CASCADE, related_name='insurance_detail')
    name = models.CharField(max_length=100)
    fee = models.IntegerField
    basic = models.JSONField(null=True)
    special = models.JSONField(null=True)
    all_cover = models.JSONField(null=True)
    content = models.TextField


class cover_type(models.Model):
    type = models.CharField(max_length=100)



class cover(models.Model):
    cover_type = models.ForeignKey(cover_type, on_delete=models.CASCADE, related_name='cover')
    insurance = models.ForeignKey(insurance, on_delete=models.CASCADE, related_name='cover')
    price = models.IntegerField
    wild = models.BooleanField(null=True)
    detail = models.TextField


class disease(models.Model):
    cover_type = models.ForeignKey(cover_type, on_delete=models.CASCADE, related_name='disease', null=True)
    name = models.CharField(max_length=100)
    info = models.TextField
    tip = models.TextField
    cause = models.TextField


class breed(models.Model):
    species = models.IntegerField
    name = models.CharField(max_length=100)
    wild = models.BooleanField
    disease = models.ManyToManyField(disease, related_name='breed')


class items(models.Model):
    cover_type = models.ForeignKey(cover_type, on_delete=models.CASCADE, related_name='items')
    name = models.CharField(max_length=100)
    price = models.IntegerField
    content = models.TextField
    item_url = models.CharField(max_length=200)
    image = models.CharField(max_length=200)


class detail_user(models.Model):
    breed = models.ForeignKey(breed, on_delete=models.CASCADE, related_name='detail_user')
    species = models.IntegerField
    animal_name = models.CharField(max_length=100)
    animal_birth = models.IntegerField
    outpatient = models.IntegerField(null=True)
    hospitalization = models.IntegerField(null=True)
    operation = models.IntegerField(null=True)
    patella = models.IntegerField(null=True)
    skin_disease = models.IntegerField(null=True)
    dental = models.IntegerField(null=True)
    urinary = models.IntegerField(null=True)
    liability = models.IntegerField(null=True)
    insurance_choice = models.IntegerField(null=True)


class survey(models.Model):
    detail_user = models.ForeignKey(detail_user, on_delete=models.CASCADE, related_name='survey')
    insurance_detail = models.ForeignKey(insurance_detail, on_delete=models.CASCADE, related_name='survey')
    review = models.CharField(max_length=300, null=True)
    score = models.IntegerField
