"use strict";

class UserStorage {
    static #users = { // 은닉화
        id: ["test", "gelheart", "naver"],
        psword: ["1111","11111","111111"],
        name:["우리미", "이름", "내이름"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=> {
           // console.log(newUsers, field);
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        //console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info)=> {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        //console.log(newUsers);
        return userInfo;
    }
}

module.exports = UserStorage;