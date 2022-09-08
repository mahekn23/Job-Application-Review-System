from django.shortcuts import render
from .models import Candidate
from .serializers import CandidateSerializer
from rest_framework import viewsets

# # Create your views here.
class ListCandidate(viewsets.ReadOnlyModelViewSet):
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()

# retrieve, create, update
class CandidateApi(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
