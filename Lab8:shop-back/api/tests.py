from django.test import TestCase
from .models import Product, Category

class CategoryModelTest(TestCase):
    def test_category_creation(self):
        category = Category.objects.create(name="Electronics")
        self.assertEqual(category.name, "Electronics")  

class ProductModelTest(TestCase):
    def test_product_creation(self):
        category = Category.objects.create(name="Electronics")
        product = Product.objects.create(
            name="Smartphone",
            price=999.99,
            description="Latest model",
            count=10,
            is_active=True,
            category=category
        )
        
        self.assertEqual(product.name, "Smartphone")
        self.assertEqual(product.price, 999.99)
        self.assertEqual(product.description, "Latest model")
        self.assertEqual(product.count, 10)
        self.assertTrue(product.is_active)
        self.assertEqual(product.category.name, "Electronics")
