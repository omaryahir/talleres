from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework import status

from django.contrib.auth.models import User


@api_view(['POST'])
def login(request):
	return Response({})

@api_view(['POST'])
def register(request):

	print(request.data)
	serializer = UserSerializer(request.data)
	if serializer.is_valid():
		serializer.save()

		User.objects.get(username = serializer.data['username'])
		User.set_password(serializer.data['password'])
		User.save()

		token = Token.objects.create(user=user)
		return Response({'token': token.key, "user": serializers.data}, status=status.HTTP_201_CREATED)
	
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	

@api_view(['POST'])
def profile(request):
	return Response({})
