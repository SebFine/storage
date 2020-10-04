from django.db import models
from django.contrib.auth.models import User


class Artikel(models.Model):
    STATUS_CHOICE = (("RETURN", ("RETURN")), ("TAKE", ("TAKE")))

    added_by = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    barcode = models.IntegerField()
    status = models.CharField(max_length=25, choices=STATUS_CHOICE, default="RETURN")
    location = models.CharField(max_length=100, default="In Storage")

    added_at = models.DateField(
        auto_now_add=True, blank=True, null=True, editable=False
    )
    editedAt = models.DateField(auto_now=True, blank=True, null=True, editable=False)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.status == "RETURN":
            self.location = "In Storage"
        super(Artikel, self).save(*args, **kwargs)

