// Простой сервер http
import http from 'http';

const host = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
// обработка запроса на сервер 
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hi!')
});

server.listen(port, host, () => {
	console.log(`Сервер запущен на ${host}:${port}`);
})

// в Postman отправить запрос http://localhost:8000 -> ответ 'Hi!'