from flask import Flask, request, jsonify, render_template
from pymongo import MongoClient
from bson import ObjectId
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
        print(str(doc['_id']))
        return jsonify({'status':'cad', 'nome': doc['nome'], 'id': doc['id'], 'secret': str(doc['_id'])})
    
    doc = colecao.find_one({'id': userId})
    
    return jsonify({'status':'cad', 'nome': doc['nome'], 'id': doc['id'], 'secret': str(doc['_id'])})

@app.route('/api/somar', methods=['POST'])
def acrescentar():
    dados = request.get_json()

    primId = ObjectId(dados['userId'])

    doc = colecao.find_one({'_id': primId})

    if not doc:
        return jsonify({'status': 'Falha'})
    
    if dados['data'] in doc['datas']:
        if dados['tipo'] == 'mensagem' and 'mensagem' in doc['datas'][dados['data']]:
            qtd = doc['datas'][dados['data']]['mensagem']
        elif dados['tipo'] == 'comentario' and 'comentario' in doc['datas'][dados['data']]:
            qtd = doc['datas'][dados['data']]['comentario']
        else:
            qtd = 0
    else:
        qtd = 0

    qtd += 1

    colecao.update_one({'_id': primId}, {'$set': {f'datas.{dados["data"]}.{dados["tipo"]}': qtd}})

    return jsonify({'status': 'ok'})




if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")

