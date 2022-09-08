from django.urls import path


from . import views

urlpatterns = [
    path('candidates/', views.ListCandidate.as_view({'get': 'list'})),
    path('candidates/<pk>', views.CandidateApi.as_view({'get': 'retrieve', 'post': 'create', 'patch': 'partial_update'}))
]