from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse

def api_get_all(request):
	return JsonResponse({'data': 'got all my data'})