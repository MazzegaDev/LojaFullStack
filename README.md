# 🛍️ Loja FullStack - API REST

A **Loja FullStack** é uma **API REST** de uma loja fictícia que oferece 
funcionalidades completas para gerenciamento de **produtos, vendas e vendedores**, com autenticação baseada em **JWT Token**.  

---

## 🚀 Funcionalidades

- ✅ **Produtos**
  - Cadastro de produtos
  - Baixa de produtos
  - Listagem de todos os produtos
  - Listagem apenas dos produtos vendidos  

- ✅ **Vendas**
  - Realizar uma venda
  - Listar todas as vendas  

- ✅ **Vendedores**
  - Cadastro de vendedor
  - Listagem de vendedores
  - Desativação de vendedores  

- ✅ **Segurança**
  - Autenticação via **JWT Token**
  - Apenas vendedores autenticados podem acessar as rotas protegidas  

- ✅ **Banco de Dados**
  - Transações para garantir **atomicidade** e consistência  

- ✅ **Documentação**
  - API documentada com **Swagger**
  - Schemas organizados em **components** para facilitar envio e validação de dados  

- ✅ **Tratamento de Erros**
  - Respostas padronizadas
  - Códigos de status apropriados (`200, 400, 401, 404, 500`)  

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**  
- **Node.js**  
- **Express.js**  
- **MySQL**  
- **Swagger (OpenAPI 3.0)**  

---

## 🔐 Autenticação

A API utiliza **Bearer Token (JWT)**.  

▶️ Como Executar o Projeto
# Clonar o repositório
git clone https://github.com/seu-repositorio/loja-fullstack-api.git

# Acessar a pasta
cd loja-fullstack-api

# Instalar dependências
npm install

# Iniciar o servidor
npm start
Servidor rodará em: http://localhost:3000/
