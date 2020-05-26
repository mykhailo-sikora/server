const express = require("express");
const exprsBars = require('express-handlebars');
const path = require('path');

const app = express();

const {loginRoutes, productRouter, useRouter} = require('./routes'); // шукає індекс файл з усіма роутами (економія коду, чистота)


app.use(express.static(path.join(__dirname, 'views'))); // папка у відкритому доступі для ноди
app.use(express.json()); // вчимо ноду читати, обробляти json
app.use(express.urlencoded()); // вчимо читати url

// встановлюємо темплейт двіжок, .hbs - назва мого двіжка, вказуємо конфігурації.
// це пишеться якщо немає взагалі фронта. Це можна юзати, ящщо необхідні шаблони для відправки листів
app.engine('.hbs', exprsBars({
    extname: '.hbs',
    defaultLayout: false
}));

app.set('view engine', '.hbs'); // встановлюємо вю енждін - настройка яка відповідає за вюшки (відмалювання html)
app.set('views', path.join(__dirname, 'views')); // встанов. шлях до стат. папки (там де мої сторінки, вюшки)


//req - те, що нам присилають на сервер
//res - те, що ми віддаємо назад


// routers

app.use('/login', loginRoutes); // все, що буде починатись із /login попадатиме на цю урлу
app.use('/products', productRouter); // все, що буде починатись із /products попадатиме на цю урлу
app.use('/users', useRouter); // все, що буде починатись із /user попадатиме на цю урлу


// app.get("/", (req, res) => {
//     res.render('main')
// });
// app.get("/main", (req, res) => {
//     res.render('main')
// });

// app.get("/allusers", (req, res) => {
//     res.render('allusers')
// });
//
// app.post("/allusers", (req, res) => {
//     res.render('allusers')
// });


// app.post("/login", (req, res) => {
//     const {name, password} = req.body;
//     const findUser = allUsers.find((user) => user.name === name);
//     if (findUser) {
//         findUser.password === password ? res.render('allusers', {allUsers}) : res.render('allusers', {message: 'login or password is wrong'});
//     } else {
//         res.render('reg', {message: 'u a not registered'})
//     }
//
//
// });

//registration

// app.get("/reg", (req, res) => {
//     res.render('reg')
// });


app.listen(5555, err => err ? console.log(err) : console.log("server working and listen: 5555"));
