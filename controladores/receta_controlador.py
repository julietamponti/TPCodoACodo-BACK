#controlador es el intermediario entre la vista y el modelo
# aqui ocurre la logica del programa
from app import *
from modelos.receta_modelo import *

@app.route('/recetas',methods=['GET'])
def get_recetas():
    all_recetas=Receta.query.all()   # es una lista
    result=receta_schema.dump(all_recetas)
    return jsonify(result)
 
@app.route('/recetas/<id>',methods=['GET'])
def get_receta(id):
    receta= Receta.query.get(id)
    return receta_schema.jsonify(receta)
    

@app.route('/recetas', methods=['POST']) # crea ruta o endpoint
def create_receta():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    ingredientes=request.json['ingredientes']
    pasos=request.json['pasos']
    foto=request.json['foto']

    new_receta=Receta(nombre,ingredientes,pasos,foto)
    db.session.add(new_receta)
    db.session.commit()
    return receta_schema.jsonify(new_receta)


@app.route('/receta/<id>' ,methods=['PUT'])
def update_receta(id):
    receta=Receta.query.get(id)   
   
    nombre=request.json['nombre']
    ingredientes=request.json['ingredientes']
    pasos=request.json['pasos']
    foto=request.json['foto']
 
    receta.nombre=nombre
    receta.ingredientes=ingredientes
    receta.pasos = pasos
    receta.foto=foto
       
    
    db.session.commit()
    return receta_schema.jsonify(receta)
 

# @app.route('/receta/<id>',methods=['DELETE'])
# def delete_receta(id):
#     receta=Receta.query.get(id)
#     db.session.delete(receta)
#     db.session.commit()
#     return receta_schema.jsonify(receta)
