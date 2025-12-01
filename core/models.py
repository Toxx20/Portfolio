from django.db import models

# Create your models here.
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    stack = models.CharField(max_length=200, blank=True)  # ex: "Django, React, PostgreSQL"
    repo_url = models.URLField(blank=True)
    demo_url = models.URLField(blank=True)
    image_url = models.URLField(blank=True)
    created_at = models.DateField(null=True, blank=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.title
