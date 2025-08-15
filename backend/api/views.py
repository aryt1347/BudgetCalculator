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
    water = float(request.data.get("water", 0))
    electricity = float(request.data.get("electricity", 0))
    internet = float(request.data.get("internet", 0))
    phone = float(request.data.get("phone", 0))
    health_insurance = float(request.data.get("healthInsurance", 0))
    auto_insurance = float(request.data.get("autoInsurance", 0))
    home_insurance = float(request.data.get("homeInsurance", 0))
    car_payment = float(request.data.get("carPayment", 0))
    gas = float(request.data.get("gas", 0))
    childcare = float(request.data.get("childcare", 0))
    student_loans = float(request.data.get("studentLoans", 0))
    subscriptions = float(request.data.get("subscriptions", 0))
    memberships = float(request.data.get("memberships", 0))


    housing = rent_mortgage
    utilities = water + electricity + internet + phone
    insurance = health_insurance + auto_insurance + home_insurance
    car = car_payment + gas
    childcare_education = childcare + student_loans
    miscellaneous = subscriptions + memberships
    remaining  = income - (housing+utilities+insurance+car+childcare_education+miscellaneous)

    return Response({
        "remaining": remaining,
        "message": f"Remaining  money after expense ${remaining:.2f} left."
    })