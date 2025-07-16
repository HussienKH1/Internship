from django.urls import path, include
from rest_framework import routers
from backend.views import (
    HeroSlideViewSet,
    ServiceViewSet,
    StatViewSet,
    BestServiceViewSet,
    BlogPostViewSet,
    ContactInfoViewSet,
    AboutUsViewSet,
    TestimonialViewSet,
    JobViewSet,
    JobApplicationViewSet,
    ProjectViewSet, 
    ContactMessageViewSet,
    TeamMemberViewSet,
)


router = routers.DefaultRouter()
router.register(r'heroslides', HeroSlideViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'stats', StatViewSet)
router.register(r'bestservices', BestServiceViewSet)
router.register(r'blogposts', BlogPostViewSet)
router.register(r'contactinfos', ContactInfoViewSet)
router.register(r'aboutus', AboutUsViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'jobs', JobViewSet)
router.register(r'applications', JobApplicationViewSet)
router.register(r'projects', ProjectViewSet) 
router.register(r'contactmessages', ContactMessageViewSet)
router.register(r'teammembers', TeamMemberViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]