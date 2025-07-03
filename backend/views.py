from django.shortcuts import render
from rest_framework import viewsets
from .models import HeroSlide, Service, Stat, BestService, BlogPost, ContactInfo, AboutUs, Testimonial, Job, JobApplication, Project, ContactMessage, TeamMember
from .serializers import (
    HeroSlideSerializer,
    ServiceSerializer,
    StatSerializer,
    BestServiceSerializer,
    BlogPostSerializer,
    ContactInfoSerializer,
    AboutUsSerializer,
    TestimonialSerializer,
    JobSerializer,
    JobApplicationSerializer,
    ProjectSerializer,
    ContactMessageSerializer,
    TeamMemberSerializer
)
from django.core.mail import send_mail

class HeroSlideViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroSlide.objects.all()
    serializer_class = HeroSlideSerializer

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class StatViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Stat.objects.all()
    serializer_class = StatSerializer

class BestServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BestService.objects.all()
    serializer_class = BestServiceSerializer

class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

class ContactInfoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer

class AboutUsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class JobViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        message = serializer.save()
        
        # Send an email
        send_mail(
            subject=f"New Contact Form Message: {message.subject}",
            message=f"""
            Name: {message.name}
            Email: {message.email}
            Subject: {message.subject}
            Message: {message.message}
            """,
            from_email=None,
            recipient_list=['abkh3579@email.com'],  # Change to your target email
            fail_silently=False,
        )


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer