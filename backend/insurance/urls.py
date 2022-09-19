from django.urls import path
from . import views

app_name = 'insurance'

urlpatterns = [
    path('breed/', views.breed),
    path('breed/<species>/<name>/', views.breed_search),
    path('insurance/basic/', views.basic),
    path('insurance/detail/', views.detail),
    path('insurance/choice/', views.choice),
    path('insurance/servey/', views.servey),
    path('disease/', views.disease),
    path('disease/<int:desease_id>/', views.disease_detail),
]