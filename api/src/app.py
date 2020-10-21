from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/VanillaMarketDB'
mongo = PyMongo(app)
CORS(app)
productDb = mongo.db.product

@app.route('/products', methods=['POST'])
def createProduct():
    id = productDb.insert_one({
        'name': request.json['name'],
        'description': request.json['description'],
        'price': request.json['price']
    }).inserted_id
    return jsonify(str(ObjectId(id)))

@app.route('/products', methods=['GET'])
def getProducts():
    products = []
    for product in productDb.find():
        products.append({
            '_id': str(ObjectId(product['_id'])),
            'name': product['name'],
            'description': product['description'],
            'price': product['price']
        })
    return jsonify(products)

@app.route('/product/<id>', methods=['GET'])
def getProduct(id):
    product = productDb.find_one({'_id': ObjectId(id)})
    return jsonify({
            '_id': str(ObjectId(product['_id'])),
            'name': product['name'],
            'description': product['description'],
            'price': product['price']
        })

@app.route('/product/<id>', methods=['DELETE'])
def deleteProduct(id):
    productDb.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Product Deleted'})

@app.route('/product/<id>', methods=['PUT'])
def updateProduct(id):
    productDb.update_one({'_id': ObjectId(id)}, {'$set':{
        'name': request.json['name'],
        'description': request.json['description'],
        'price': request.json['price']
    }})
    return jsonify({'msg': 'Product updated'})

if __name__ == "__main__":
    app.run(debug=True)