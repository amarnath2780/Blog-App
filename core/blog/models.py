from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from accounts.models import NewUser

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)


    def __str__(self):
        return self.name

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status = 'published')

    option = (
        ('draft' , 'Draft'),
        ('published' , 'Published'),
    )
     
    category = models.ForeignKey(Category  , on_delete = models.PROTECT, default=1)
    title = models.CharField(max_length= 500)
    content = models.TextField()
    slug = models.SlugField(max_length=300 , unique_for_date = 'published')
    published = models.DateTimeField(default = timezone.now)
    author = models.ForeignKey(NewUser , on_delete = models.CASCADE , related_name = 'blog_posts')
    status = models.CharField(max_length = 50 , choices = option , default = 'published' )
    objects = models.Manager()
    postobjects = PostObjects()

    class Meta:
        ordering = ('-published',)
    
    def __str__(self):
        return self.title