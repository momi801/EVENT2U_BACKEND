import os
from flask import Flask, session
from flask_sqlalchemy import SQLAlchemy


# Inicializa o SQLAlchemy

db = SQLAlchemy()

def create_app(){
    app = Flask(__name__)
    # senha para as sessões
    app.secret_key = 'dev123'

    #Configurações do banco de dados SQLite
    

    #Inicializa o SQLAlchemy com o app
    db.init_app(app)

    #Importa rotas e registra blueprint

    #Cria tabelas no banco, dentro do contexto da aplicação
    with app.app_context():
        db.create_all()

    #Context processor: injeta o total no template sem precisar passar manualmente


    return app
}