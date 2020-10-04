from django.contrib.auth import get_user_model
from rest_framework import viewsets, permissions

from .models import Artikel
from .serializers import ArtikelSerializer, UserSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Artikel.objects.all()
    serializer_class = ArtikelSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

