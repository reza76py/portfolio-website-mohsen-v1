from django.urls import path
from .views import AudioFileView

urlpatterns = [
    path('', AudioFileView, name='audio_files'),  # Adjust the view as per your app
]
