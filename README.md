# 🌐 API Rest

Bem-vindo ao repositório da API Rest! Este projeto tem como objetivo fornecer uma API para gerenciar listas, personagens e usuários.

## 📂 Estrutura do Projeto

### 🗄️ DAO (Data Access Object)
- `listaDAO.js`
- `PersonagemDAO.js`
- `userDAO.js`

### 🗃️ Banco de Dados
- `db.js`

### 🧩 Models
- `Lista.js`
- `Personagem.js`
- `Usuario.js`

### 🚏 Rotas
- `listaRoutes.js`
- `persongemRoutes.js`
- `usuarioRoutes.js`

### 🛡️ Autenticação
- `authController.js`

### 📜 Controladores
- `index.js`
- `listaController.js`
- `personagemController.js`
- `userController.js`

## 📦 Dependências

As seguintes dependências são usadas neste projeto:

```json
{
  "name": "api-rest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./index.js localhost 3000"
  },
  "keywords": [],
  "author": "Sensy",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.2",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.1",
    "mongoose": "^7.4.0",
    "moongose": "^1.0.0",
    "nodemon": "^3.0.1"
  }
}

```
🚀 Como Iniciar

1. Clone este repositório:
git clone https://github.com/seu-usuario/api-rest.git

2. Instale as dependências:
npm install

3. Inicie o servidor:
npm start

## 🛠️ Funcionalidades
Gerenciamento de Listas: Adicionar, editar e excluir listas.
Gerenciamento de Personagens: Adicionar, editar e excluir personagens.
Gerenciamento de Usuários: Registro, autenticação e gerenciamento de usuários.

📝 Licença
Este projeto está licenciado sob a licença ISC.
