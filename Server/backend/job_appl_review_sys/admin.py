from django.contrib import admin
from .models import Candidate
# Register your models here.

class CandidateAdmin(admin.ModelAdmin):
    list = (
        'name',
        'email',
        'contact',
        'edu_level',
        'result',
        'workexp',
        'resume',
        'filename',
        'status'
    )
    admin.site.register(Candidate)
