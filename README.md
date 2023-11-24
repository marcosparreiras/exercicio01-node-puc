# API RESTful Node.js com Express

Esta é uma API simplificada no padrão RESTful desenvolvida em Node.js e Express.
A API utiliza um array simples como estrutura de dados para representar uma lista de produtos.

## Estrutura de Dados

```javascript
{
  products: [
    {
      id: 1,
      description: 'Arroz parboilizado 5Kg',
      price: 25.0,
      brand: 'Tio João',
    },
    { id: 2, description: 'Maionese 250gr', price: 7.2, brand: 'Helmans' },
    {
      id: 3,
      description: 'Iogurte Natural 200ml',
      price: 2.5,
      brand: 'Itambé',
    },
    {
      id: 4,
      description: 'Batata Maior Palha 300gr',
      price: 15.2,
      brand: 'Chipps',
    },
    { id: 5, description: 'Nescau 400gr', price: 8.0, brand: 'Nestlé' },
  ];
}
```

## Endpoints

| Ação                        | Mapeamento da URL      |
| --------------------------- | ---------------------- |
| Incluir um produto          | `POST /products`       |
| Obter a lista de produtos   | `GET /products`        |
| Obter um produto específico | `GET /products/:id`    |
| Alterar um produto          | `PUT /products/:id`    |
| Excluir um produto          | `DELETE /products/:id` |

## Deploy

[http://www.exemplo.com](http://www.exemplo.com)
