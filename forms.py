from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, SelectField

class AddCupcakeForm(FlaskForm):
    """Form for adding cupcakes."""

    flavor = StringField("Flavor", render_kw={"placeholder": "Flavor of Cupcake"})
    size = SelectField("Size", choices=[('small', 'Small'), ('medium', 'Medium'), ('large', 'Large')])
    rating = FloatField("Rating", render_kw={"placeholder": "Rating of Cupcake"})
    image = StringField("Image URL", render_kw={"placeholder": "URL of Cupcake Image"})

    
