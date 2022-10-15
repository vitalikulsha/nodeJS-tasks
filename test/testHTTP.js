const http = require('http');
const PORT = 3000;

const requesHandler = (req, resp) => {
  const { method, url } = req;
  const heading = `<h1 style="color: red">${url} page</h1>`;
  const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
  console.log(`Получен ${method} - запрос ${url}`);
  resp.write(heading);
  resp.end(content);
}

const server = http.createServer(requesHandler);

server.listen(PORT, 'localhost', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});