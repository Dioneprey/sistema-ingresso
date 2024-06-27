# Sistema de Venda de Ingressos
## Rodar a aplicação

Dentro da pasta raiz rode o comando:

`docker compose up`

Então siga os passos em cada `README.md` a seguir:

- [Kong API Gateway](./kong-api-gateway/README.md)
- [Nest.JS](./nestjs-partners-api/README.md)
- [Golang](./golang/README.md)
- [Next.JS](./nextjs-frontend/README.md)

---

Estamos utilizando uma opção nova do `Docker: include`, com ela ao rodarmos: `docker compose up` na raiz do repositório todos os `docker-compose.yaml` das pastas subsequentes serão rodados, ficando apenas para que você entre em cada container para instalar as depêndencias rodar os comandos de inicialização da aplicação. 

---