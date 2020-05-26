let allUsers = [];

module.exports = class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getOneUser(name, password) {
        return allUsers.find((user) => user.name === name && user.password === password);
    }

    static getAllUsers() {
        return allUsers;
    }

    deleteUserById() {

    }

    createUser() {
        console.log(this);
        allUsers.push(this);
        console.log(allUsers);
    }


    updateUser() {

    }


}
