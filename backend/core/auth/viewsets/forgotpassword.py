from rest_framework.views import APIView
from rest_framework.response import Response
from core.auth.serializers import ForgotPasswordSerializer, ResetPasswordSerializer

class ForgotPasswordViewSet(APIView):
    def post(self, request):
        serializer = ForgotPasswordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Password reset email sent."})
        return Response(serializer.errors, status=400)
    
class ResetPasswordViewSet(APIView):
    def post(self, request, token):
        serializer = ResetPasswordSerializer(data=request.data, context={'token': token})
        if serializer.is_valid():
            serializer.save(token)
            return Response({"message" : "Password reset successfully."})
        return Response(serializer.errors, status=400)
    
    