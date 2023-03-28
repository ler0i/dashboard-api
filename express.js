import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

// app.all('/hello', (req, res, next) => {
// 	console.log('ALL');
// 	next();
// })

// const cb = (req, res, next) => {
// 	console.log('CB');
// 	next();
// }
// промежуточный обработчик
app.use((req, res, next) => {
	console.log('Time', Date.now());
	next();
});

app.get('/hello', (req, res) => {
	throw new Error('Error!!!');
	// res.end();
	// res.status(201).send({success:true});
	// res.download('/test.pdf', 'name.pdf');
	// res.redirect(301, 'https://stackoverflow.com');

	// Задать заголовок
	// res.set('Content-Type', 'text/plain');
	// res.append('Warning', 'code'); //добавить новый заголовок 
	// res.type('application/json');//тип ответа 
	// res.location(); // (путь) используется для установки HTTP-заголовка ответа Location на указанный параметр пути. 
	// res.links(); // (ссылка) спользуется для соединения ссылок, предоставленных в качестве свойств параметра, для заполнения поля HTTP-заголовка Link ответа.
	// res.cookie('token', 'namekkf',{
	// 	domain: '',
	// 	path: '/',
	// 	secure: true, // безопасность , с шифрованием или без
	// 	expires: 10000 // перестанет быть валидной и удалится 

	// });
	// res.clearCookie('token', {path}) // когда пользователь разлогинивается, и очищаем куку токена
	// res.send('Hi!');
	
});

app.use((err, req, res, next) => {
	console.log(err.message);
	res.status(500).send(err.message);
});

app.use('/users', userRouter)

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});


