
from django.http import JsonResponse

def home(request):
	return JsonResponse({'home':'where the heart is'})

def other_route(request):
	return JsonResponse({'other':'aliens'})