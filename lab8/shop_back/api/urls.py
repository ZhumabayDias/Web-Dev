from . import views
from django.urls import path,include

urlpatterns = [
    path('products/', views.get_all_products),
    path('products/<int:id>/', views.get_product_by_id),
    path('categories/', views.get_all_categories),
    path('categories/<int:id>/', views.get_category_by_id),
    path('categories/<int:id>/products/', views.get_products_by_category),
]