from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

import models as mods

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/VanillaMarketDB'
mongo = PyMongo(app)

productDb = mongo.db.product

@app.route('/products', methods=['POST'])
def createProduct():
    product = mods.product(request)
    id = productDb.insert({
        'name': product.name,
        'description': product.description,
        'price': product.price
    })
    return jsonify(str(ObjectId(id)))

@app.route('/products', methods=['GET'])
def getProducts():
    return 'R'

@app.route('/product/<id>', methods=['GET'])
def getProduct():
    return 'R'

@app.route('/product/<id>', methods=['GET'])
def deleteUser():
    return 'R'

@app.route('/product/<id>', methods=['PUT'])
def updateUser():
    return 'R'

if __name__ == "__main__":
    app.run(debug=True)