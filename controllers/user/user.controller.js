const {userService} = require('../../service');

module.exports = {
    getAllUsers: async (req, res) => {
        await userService.
        res.end('get users')
    },

    updateUser: (req, res) => {
        res.end('update user')
    },
    deleteUser: (req, res) => {
        res.end('delete user')
    },
    createUser: async (req, res) => {
       await userService.createUsers(req.body);

    }
};
