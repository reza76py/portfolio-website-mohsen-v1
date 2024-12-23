from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def AudioFileView(request):
    if request.method == 'GET':
        return JsonResponse({'message': 'GET request received'})
    elif request.method == 'POST':
        return JsonResponse({'message': 'POST request received'})
    else:
        return JsonResponse({'message': 'Request method not allowed'}, status=405)