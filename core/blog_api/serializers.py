from rest_framework import serializers
from blog.models import Post




class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title', 'author', 'content', 'status')
        model = Post