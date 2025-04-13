from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Welcome to the Online Shop API"})

urlpatterns = [
    path('', home),
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
]