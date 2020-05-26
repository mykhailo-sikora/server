const path = require('path');
let allUsers = [];

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getOneUser(name, password) {
        return allUsers.find((user) => user.name === name && user.password === password);
    }

    getAllUsers() {

    }

    deleteUserById() {

    }

    createUser() {
        User.
    allUsers.push(this);
    }


    updateUser() {

    }


}
