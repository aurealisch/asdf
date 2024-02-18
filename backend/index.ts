import { Elysia } from "elysia";

const elysia = new Elysia()
  .get("/users/:id", ({ params }) => `User Id: ${params.id}`)
  .get("/videos/:id", ({ params }) => `Video Id: ${params.id}`)
  .listen(8080);

console.log(`http://${elysia.server?.hostname}:${elysia.server?.port}`);
