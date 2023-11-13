from flask import Flask, request, jsonify, render_template
from pymongo import MongoClient
import random
from flask_cors import CORS
from urllib.parse import parse_qs

client = MongoClient('mongodb://localhost:27017')
db = client['extensao']
colecao = db['navegadores']

app = Flask(__name__)
CORS(app)

def gerarId():
    while True:
        novo_id = random.randint(1000, 9999)
        if not colecao.find_one({'id': novo_id}):
            return novo_id
        

@app.route('/api/criarUserExt', methods=['POST'])
def criarUser():
    data = request.get_json()
    if bool(data['semId']):
        userId = gerarId()
        colecao.insert_one({'id':userId,'nome': data['nome'], "datas": {}})
        # print(userId)
    else:
        userId = int(data['id'])
        doc = colecao.find_one({'id': userId})
        if not doc:
            return jsonify({'status': False})
        return jsonify({'status':'cad', 'nome': doc['nome'], 'id': doc['id']})
    
    doc = colecao.find_one({'id': userId})
    
    return jsonify({'status':'cad', 'nome': doc['nome'], 'id': doc['id']})
"""
@app.route('/api/somar', methods=['GET'])
def acrescentar():
"""


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")

