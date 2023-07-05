import * as http from "http";
import { chat } from "./chat";

const server = http.createServer((request, response) => {
  const { headers, method, url } = request;

  response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  if (url === "/question" && method === "POST") {
    request.setEncoding("utf-8");

    console.log("api: question");
    let answer;
    request.on("data", async (data) => {
      const body: { question: string } = JSON.parse(data);

      answer = await chat(body.question);
      console.log("q:", answer);
    });
    if (answer) {
      response.statusCode = 200;

      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.end(JSON.stringify(answer));
    } else {
      response.statusCode = 400;
      response.end("error");
    }
  }

  request.on("error", (error) => {
    console.log("error: ", error);
  });
  response.statusCode = 200;
  response.end();
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`The server is listening at ${PORT}.`);
});
