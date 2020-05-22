const express = require("express");
const exprsBars = require('express-handlebars');
const path = require('path');

const app = express();


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

let allUsers = [
    {name: 'Ivan', email: 'ivan@gmail.com', password: 123},
    {name: 'Ihor', email: 'ihor@gmail.com', password: 1234},
    {name: 'Ira', email: 'ira@gmail.com', password: 12345}
];

app.get("/", (req, res) => {
    res.render('main')
});
app.get("/main", (req, res) => {
    res.render('main')
});
app.get("/allUsers", (req, res) => {
    res.render('allUsers', {allUsers})
});

app.post("/allUsers", (req, res) => {
    res.render('allUsers', {allUsers})
});
// login

app.get("/login", (req, res) => {
    res.render('login')
});

app.post("/login", (req, res) => {
    const {name, password} = req.body;
    let findUser = allUsers.find((user) => user.name === name);
    console.log(findUser.name);
    findUser.password === password ? res.render('allUsers') : res.render('reg');

});

//registration

app.get("/reg", (req, res) => {
    res.render('reg')
});

app.post('/reg', (req, res) => {

    let {name, email} = req.body;
    let isUserRegistered = allUsers.find((user) => user.name === name || user.email === email);
    if (!isUserRegistered) {
        allUsers.push(req.body);
        res.end(`Welcome ${name} u a registered! Your email: ${email}`)
        return 0;
    }
    res.end('user is already registered')

});


app.listen(5555, (err) =>
    err ? console.log(err) : console.log("server working and listen: 5555")
);
