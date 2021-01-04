const test = require("tape");
const supertest = require("supertest");
const router = require("./router");

test("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "should return 2");
  t.end();
});

test("Home route returns a status code of 200", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", "text/plain")
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, "hello");
      t.end();
    });
});
