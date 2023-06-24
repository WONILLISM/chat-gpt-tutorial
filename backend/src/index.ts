import * as http from "http";

const server = http.createServer((request, response) => {
  const { headers, method, url } = request;

  if (url === "/question" && method === "GET") {
    response.end("answer is xxxx");
  }

  request.on("error", (error) => {
    console.log(error);
  });
  response.statusCode = 200;
  response.end();
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`The server is listening at ${PORT}.`);
});
