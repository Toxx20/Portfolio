from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactAPIView(APIView):
    """
    Reçoit: { name, email, message }
    En dev, on renvoie juste 200 et on loggue.
    Configure EMAIL_* en prod pour envoyer de vrais mails.
    """
    def post(self, request):
        name = (request.data.get("name") or "").strip()
        email = (request.data.get("email") or "").strip()
        message = (request.data.get("message") or "").strip()

        if not (name and email and message):
            return Response({"detail": "Champs requis manquants."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Exemple: en prod, décommente ceci avec tes settings e-mail
        # send_mail(
        #     subject=f"[Portfolio] Message de {name}",
        #     message=message,
        #     from_email=settings.DEFAULT_FROM_EMAIL,
        #     recipient_list=[settings.DEFAULT_FROM_EMAIL],
        # )

        print(f"[CONTACT] {name} <{email}>: {message}")
        return Response({"ok": True})
