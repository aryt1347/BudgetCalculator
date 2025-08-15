from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def output_message(request):
    return Response({"message": "Hello"})

@api_view(['POST'])
def calculate_budget(request):

    income = float(request.data.get("income", 0))
    rent_mortgage = float(request.data.get("rentMortgage", 0))

    remnaing = income - rent_mortgage

    return Response({
        "remaining": remnaing,
        "message": f"Remaining  money after expense ${remnaing:.2f} left."
    })