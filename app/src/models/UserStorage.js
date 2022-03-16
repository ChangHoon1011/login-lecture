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
}

module.exports = UserStorage;