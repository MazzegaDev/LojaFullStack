# 🛍️ Loja FullStack - API REST

A **Loja FullStack** é uma **API REST** desenvolvida em **Node.js** e **Express**, que simula o funcionamento de uma loja fictícia.  
O sistema permite o **gerenciamento completo de produtos, vendas e vendedores**, com **segurança via JWT** e documentação com **Swagger**.  

---

## 🚀 Funcionalidades

### 📦 Produtos
- Cadastro de produtos  
- Baixa de estoque  
- Listagem de todos os produtos  
- Listagem apenas dos produtos vendidos  

### 🧾 Vendas
- Realização de vendas  
- Listagem de todas as vendas  

### 👨‍💼 Vendedores
- Cadastro de vendedores  
- Listagem de vendedores  
- Desativação de vendedores  

### 🔐 Segurança
- Autenticação via **JWT Token**  
- Middleware para validação de permissões  
- Apenas vendedores autenticados acessam rotas protegidas  

### 🗄️ Banco de Dados
- Persistência em **MySQL**  
- Uso de **transações** para garantir atomicidade e consistência  

### 📘 Documentação
- API documentada com **Swagger (OpenAPI 3.0)**  
- Schemas organizados em **components** para facilitar testes e validação  

### ⚠️ Tratamento de Erros
- Respostas padronizadas em JSON  
- Códigos de status coerentes (`200, 400, 401, 403, 404, 500`)  

---

## 🛠️ Tecnologias Utilizadas
- **JavaScript (ES6+)**  
- **Node.js**  
- **Express.js**  
- **MySQL**  
- **JWT (JSON Web Token)**  
- **Swagger (OpenAPI 3.0)**  

---

## 🔐 Autenticação & Permissões

O sistema conta com **camadas de permissão** para proteger funcionalidades críticas:

- **Administrador (ADM)**  
  - Gerencia perfis e vendedores  
  - Acesso total ao sistema  

- **Vendedor**  
  - Pode cadastrar produtos  
  - Realizar vendas  
  - Consultar estoque  

---

# ▶️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

-- git clone https://github.com/seu-repositorio/loja-fullstack-api.git

## 2️⃣ Acessar a pasta
-- cd loja-fullstack-api

## 3️⃣ Instalar dependências
-- npm install

4️⃣ Iniciar o servidor
npm start


Servidor disponível em:
👉 http://localhost:3000/docs
