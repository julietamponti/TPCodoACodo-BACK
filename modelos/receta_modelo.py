from app import db,ma

class Receta(db.Model):  # defino la tabla
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(100))
    ingredientes=db.Column(db.String(1000))
    pasos = db.Column(db.String(2500))
    foto=db.Column(db.String(255))


    def __init__(self,nombre,ingredientes,foto, pasos):
        self.nombre=nombre
        self.ingredientes=ingredientes
        self.pasos=pasos
        self.foto=foto

db.create_all()  # crea las tablas 

class RecetaSchema(ma.Schema):
    class Meta:
        fields=('id','nombre', 'ingredientes','pasos','foto')
 
receta_schema=RecetaSchema()            # para crear un producto
receta_schema=RecetaSchema(many=True)  # multiples registros
