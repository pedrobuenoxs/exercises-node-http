const supertest = require("supertest");
const request = supertest.agent("http://localhost:8000");

describe("Server", () => {
  it("should return the contents of the index page", async () => {
    const response = await request.get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("<h1>Estartando Devs</h1>");
    expect(response.text).toContain(
      "Transformando o mundo através da tecnologia"
    );
  });

  it("should return the contents of the about page", async () => {
    const response = await request.get("/about");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("<h1>Quem Somos</h1>");
    expect(response.text).toContain(
      "Nossa proposta de ensino coloca o aluno como protagonista."
    );
    expect(response.text).toContain("colaboração, comunicação, criatividade");
  });

  it("should return a 404 error page", async () => {
    const response = await request.get("/not-exist-" + Date.now());

    expect(response.statusCode).toBe(404);
    expect(response.text).toContain("Página não existe!");
  });
});
