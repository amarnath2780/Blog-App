from django.urls import path, include
from blog_api.views import PostDetails, PostList



app_name = 'blog_api'

urlpatterns = [
    path('<int:pk>/' , PostDetails.as_view(), name="detailcreate"),
    path('', PostList.as_view(), name='listcreate'),

]
