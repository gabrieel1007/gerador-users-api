import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  handle() {
    return `<div style="font-family: sans-serif; line-height: 1.6;">
  <h2>📄 Endpoint: <code>/person/:quantity</code></h2>
  <p>
    Retorna uma lista de pessoas fictícias geradas automaticamente.
  </p>
  <ul>
    <li><strong>Parâmetro obrigatório:</strong> <code>:quantity</code> (número de pessoas)</li>
    <li><strong>Limite máximo:</strong> 50 pessoas</li>
    <li><strong>Exemplo de uso:</strong> <code>/person/10</code></li>
  </ul>
  <p><strong>Estrutura de cada item retornado:</strong></p>
  <pre style="background: #f4f4f4; padding: 10px; border-radius: 4px;">
{
  "firstName": "João",
  "surname": "Silva",
  "contacts": {
    "email": "joao@email.com",
    "phone": 11999999999
  }
}
  </pre>
</div>
`;
  }
}
