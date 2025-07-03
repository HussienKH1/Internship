from django.contrib import admin
from .models import HeroSlide, Service, Stat, BestService, BlogPost, ContactInfo, AboutUs, Testimonial, Job, JobApplication, Project, ContactMessage, TeamMember

@admin.register(HeroSlide)
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ('title', 'highlight', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'highlight')
    ordering = ('order',)

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon')
    search_fields = ('title',)

@admin.register(Stat)
class StatAdmin(admin.ModelAdmin):
    list_display = ('label', 'value')
    search_fields = ('label',)

@admin.register(BestService)
class BestServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon')
    search_fields = ('title',)

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date')
    search_fields = ('title', 'author')
    list_filter = ('date',)

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ('name','address', 'phone', 'email', 'facebook', 'twitter', 'instagram', 'linkedin')
    search_fields = ('address', 'phone', 'email')

@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ('headline','paragraph1', 'paragraph2', 'paragraph3', 'image_url', 'card_title', 'card_text', 'button_label', 'button_link')
    search_fields = ('headline',)

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'text_preview')
    search_fields = ('name', 'role')

    def text_preview(self, obj):
        return (obj.text[:50] + '...') if len(obj.text) > 50 else obj.text
    text_preview.short_description = 'Preview'

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'job', 'submitted_at')
    search_fields = ('name', 'email', 'job__title')
    list_filter = ('job', 'submitted_at')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'client', 'year')
    search_fields = ('title', 'client')
    list_filter = ('year',)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'submitted_at')
    search_fields = ('name', 'email', 'subject', 'message')

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)