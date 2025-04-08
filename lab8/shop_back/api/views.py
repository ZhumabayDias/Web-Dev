from django.http import JsonResponse
from .models import Product,Category
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def product_to_dict(product):
    return{
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.id
    }

def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }

def get_all_products(request):
    products = Product.objects.all()
    data = []
    for p in products:
        item = product_to_dict(p)
        data.append(item)
    return JsonResponse(data, safe=False)

def get_product_by_id(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product_to_dict(product))
   

def get_all_categories(request):
    categories = Category.objects.all()
    data = []
    for c in categories:
        item = product_to_dict(c)
        data.append(item)
    return JsonResponse(data, safe=False)

def get_category_by_id(request, id):
    category = Category.objects.get(id=id)
    return JsonResponse(category_to_dict(category))
  

def get_products_by_category(request, id):
    category = Category.objects.get(id=id)
    products = category.products.all()
    data = []
    for p in products:
        item = product_to_dict(p)
        data.append(item)
    return JsonResponse(data, safe=False)
  