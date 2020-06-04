from flask import Flask, request

class product:
    
    name = ''
    description = ''
    price = 0

    def __init__(self, request):
        self.name = request.json['name']
        self.description = request.json['description']
        self.price = request.json['price']

