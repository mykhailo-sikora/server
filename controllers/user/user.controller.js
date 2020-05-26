const {userService} = require('../../service');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userService.getAllUsers();
        console.log(users);
        res.end('get users')
    },

    updateUser: (req, res) => {
        res.end('update user')
    },
    deleteUser: (req, res) => {
        res.end('delete user')
    },
    createUser: (req, res) => {
        const {name, email, password} = req.body;
        const User = new userService(name, email, password);
        User.createUser();
        res.end('user crefted')
    }
};
