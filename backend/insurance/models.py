from django.db import models

# Create your models here.
class Insurance(models.Model):
    company_name = models.CharField(max_length=100)
    insurance_name = models.CharField(max_length=100)
    species = models.IntegerField()
    company_score = models.FloatField()
    company_url = models.CharField(max_length=300)
    company_logo = models.CharField(max_length=200)
    renewal = models.BooleanField(default=False)
    payment_period = models.IntegerField()
    content = models.TextField(null=True)
    etc = models.TextField(null=True)
    price_score = models.FloatField()


class Insurance_detail(models.Model):
    insurance = models.ForeignKey(Insurance, on_delete=models.CASCADE, related_name='insurance_detail')
    name = models.CharField(max_length=100)
    fee = models.IntegerField()
    basic = models.JSONField(null=True)
    special = models.JSONField(null=True)
    all_cover = models.JSONField(null=True)
    content = models.TextField(null=True)


class Cover_type(models.Model):
    type = models.CharField(max_length=100)



class Cover(models.Model):
    cover_type = models.ForeignKey(Cover_type, on_delete=models.CASCADE, related_name='cover')
    insurance = models.ForeignKey(Insurance, on_delete=models.CASCADE, related_name='cover')
    price = models.IntegerField()
    wild = models.BooleanField(default=False, null=True)
    detail = models.TextField()


class Disease(models.Model):
    cover_type = models.ForeignKey(Cover_type, on_delete=models.CASCADE, related_name='disease', null=True, default=None)
    name = models.CharField(max_length=100)
    info = models.TextField()
    tip = models.TextField()
    cause = models.TextField()


class Breed(models.Model):
    species = models.IntegerField()
    name = models.CharField(max_length=100)
    wild = models.BooleanField(default=False)
    disease = models.ManyToManyField(Disease, related_name='breed')


class Items(models.Model):
    cover_type = models.ForeignKey(Cover_type, on_delete=models.CASCADE, related_name='items')
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    content = models.TextField()
    item_url = models.CharField(max_length=200)
    image = models.CharField(max_length=200)


class Detail_user(models.Model):
    breed = models.ForeignKey(Breed, on_delete=models.CASCADE, related_name='detail_user')
    species = models.IntegerField()
    animal_name = models.CharField(max_length=100)
    animal_birth = models.IntegerField()
    outpatient = models.IntegerField(null=True)
    hospitalization = models.IntegerField(null=True)
    operation = models.IntegerField(null=True)
    patella = models.IntegerField(null=True)
    skin_disease = models.IntegerField(null=True)
    dental = models.IntegerField(null=True)
    urinary = models.IntegerField(null=True)
    liability = models.IntegerField(null=True)
    insurance_choice = models.IntegerField(null=True)


class Survey(models.Model):
    detail_user = models.ForeignKey(Detail_user, on_delete=models.CASCADE, related_name='survey')
    insurance_detail = models.ForeignKey(Insurance_detail, on_delete=models.CASCADE, related_name='survey')
    review = models.CharField(max_length=300, null=True)
    score = models.IntegerField()
