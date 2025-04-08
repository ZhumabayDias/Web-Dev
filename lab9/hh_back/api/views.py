import json
from django.http import JsonResponse
from .models import Company,Vacancy
from api.serializer import CompanySerializer,VacancySerializer
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def get_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies,many = True)

        return JsonResponse(serializer.data, safe=False)
    

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save() # insert into request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    

@csrf_exempt
def get_company(request,company_id=None):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, status=200)
    
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        serializer = CompanySerializer(instance=company,
                                        data=new_data)
        if serializer.is_valid():
            serializer.save() # update request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        # SQL: delete request
        company.delete()
        return JsonResponse({'message': 'Company deleted'})


def get_company_vacancies(request,company_id=None):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    
    vacancies = Vacancy.objects.all()
    companyVacancies = vacancies.filter(company=company)
    serializer = VacancySerializer(companyVacancies,many=True)

    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def get_vacancies(request):
     if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies,many = True)

        return JsonResponse(serializer.data, safe=False)
    

     elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save() # insert into request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def get_vacancy(request,vacancy_id=None):
    try:
        vacancy = Vacancy.objects.get(pk=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, status=200)
    
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        serializer = VacancySerializer(instance=vacancy,
                                        data=new_data)
        if serializer.is_valid():
            serializer.save() # update request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        # SQL: delete request
        vacancy.delete()
        return JsonResponse({'message': 'Vacancy deleted'})


def get_vacancies_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]

    serializer = VacancySerializer(vacancies,many = True)

    return JsonResponse(serializer.data, safe=False)