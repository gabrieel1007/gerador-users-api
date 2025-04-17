# API de Pessoas Fictícias

Este projeto tem como objetivo principal estudar conceitos de Domain-Driven Design (DDD), aplicando boas práticas de arquitetura e organização de código em aplicações back-end com NestJS.

O endpoint disponibilizado retorna uma lista de pessoas fictícias geradas automaticamente. É útil para testes, protótipos e integração de front-end.

## 📍 **Endpoint**

**Método**: `GET`  
**URL**: `/person/:quantity`

- **Parâmetro obrigatório**: `quantity` (quantidade de pessoas a serem geradas)
- **Limite máximo**: 50 pessoas
- **Exemplo de uso**: `/person/10`

---

## 🌐 **Endpoint de Deploy**

A API já está em produção e pode ser acessada no seguinte endereço:

- **URL do endpoint**: `https://gerador-users-api-production.up.railway.app/person/:quantity`

Aqui você pode substituir `:quantity` pela quantidade desejada de pessoas. Lembre-se de que o limite máximo de pessoas é **50**.

---

## 📝 **Estrutura da Resposta**

Cada pessoa gerada terá a seguinte estrutura:

```json
{
  "firstName": "João",
  "surname": "Silva",
  "contacts": {
    "email": "joao@email.com",
    "phone": 11999999999
  }
}
```

---

## ⚠️ **Observações**

O parâmetro quantity é obrigatório e deve ser um número.

O valor máximo de pessoas retornadas é 50. Se o valor de quantity for maior que 50, o número será automaticamente limitado a 50.

A API retorna sempre dados fictícios, e não deve ser usada para ambientes de produção.

---

## 📄 **Licença**

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

---

## 👨‍💻 **Autor**

Nome: [Gabriel Alves]

E-mail: [ga654066@gmail.com]

GitHub: github.com/gabrieel1007

---

## 🔧 **Tecnologias Usadas**

Node.js (v14+)

NestJS

TypeScript

Yarn (para gerenciar dependências)

---

## 📜 **Agradecimentos**

Agradeço aos mantenedores e contribuintes das bibliotecas que tornam este projeto possível!
