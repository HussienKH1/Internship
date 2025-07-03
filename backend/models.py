from django.db import models

class HeroSlide(models.Model):
    title = models.CharField(max_length=255)
    highlight = models.CharField(max_length=255)
    description = models.TextField()
    button_text = models.CharField(max_length=50)
    button_link = models.URLField()
    image = models.ImageField(upload_to='hero_slides/')
    order = models.PositiveIntegerField(default=0)

class Service(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    icon = models.CharField(max_length=50)

class Stat(models.Model):
    label = models.CharField(max_length=255)
    value = models.PositiveIntegerField()

class BestService(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    icon = models.CharField(max_length=50)

class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='blog_posts/')
    date = models.DateField()
    author = models.CharField(max_length=255)
    comment_count = models.PositiveIntegerField(default=0)
    def month(self):
        return self.date.strftime("%B")  # e.g., June

    def year(self):
        return self.date.strftime("%Y")  # e.g., 2025

    def __str__(self):
        return self.title


class ContactInfo(models.Model):
    name = models.CharField(max_length=255, default='Unnamed')
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    facebook = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    def __str__(self):
        return f"Contact Info: {self.address}, {self.phone}, {self.email}"
   
class AboutUs(models.Model):
    headline = models.CharField(max_length=255)
    paragraph1 = models.TextField()
    paragraph2 = models.TextField()
    paragraph3 = models.TextField()
    image_url = models.URLField()
    card_title = models.CharField(max_length=255)
    card_text = models.TextField()
    button_label = models.CharField(max_length=100)
    button_link = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return self.headline
    

class Testimonial(models.Model):
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    text = models.TextField()
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.role}"

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title

class JobApplication(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    name = models.CharField(max_length=255)
    email = models.EmailField()
    resume = models.FileField(upload_to='resumes/')
    cover_letter = models.TextField(blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} - {self.job.title}'
    
class Service(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    icon = models.CharField(max_length=50)

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    client = models.CharField(max_length=255, blank=True)
    year = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='team/')
    description = models.TextField()
    linkedin = models.URLField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return self.name