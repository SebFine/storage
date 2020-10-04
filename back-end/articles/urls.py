from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import UserViewSet, ArticleViewSet

router = SimpleRouter()
router.register("users", UserViewSet, basename="users")
router.register("", ArticleViewSet, basename="article")

urlpatterns = router.urls
