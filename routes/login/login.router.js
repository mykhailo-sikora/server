const {Router} = require('express');
const loginRouter = Router();


let allUsers = [];

loginRouter.post('/', (req, res) => {
// реєстрація юзера і перевірка юзера у масиві
    const {name, email} = req.body;
    const isUserRegistered = allUsers.find((user) => user.name === name || user.email === email);
    if (!isUserRegistered) {
        allUsers.push(req.body);
        res.end(`Welcome ${name} u a registered! Your email: ${email}`);
        return 0;
    }
    res.end('login is already registered')

});
// логінація і перевірка юзера на коректність внесених даних.

loginRouter.post("/login", (req, res) => {
    const {name, password} = req.body;
    const findUser = allUsers.find((user) => user.name === name);
    if (findUser) {
        findUser.password === password ? res.render('allusers', {allUsers}) : res.render('allusers', {message: 'login or password is wrong'});
    } else {
        res.render('reg', {message: 'u a not registered'})
    }
});

loginRouter.get('/', (req, res) => {

    res.render('login')
});

module.exports = loginRouter;
