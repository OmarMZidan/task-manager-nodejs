const request = require("supertest");
const app = require("../src/app");

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Omar",
      email: "or@1.com",
      password: "omar123!",
    })
    .expect(201);
});
