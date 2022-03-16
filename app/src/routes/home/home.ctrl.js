"use strict";

//const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");


const output = {
    home: (req,res) =>{
        res.render('home/index');
    },
    login: (req, res) =>{
        res.render('home/login');
    },
    register: (req,res) =>{
        res.render('home/register');
    },
};

const process = {
    login: (req, res) =>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
       // console.log(req.body);
    //    const id = req.body.id;
    //    const psword = req.body.psword;
    
       //const userStorage = new UserStorage();
    //    console.log(UserStorage.getUsers());
    //console.log(UserStorage.getUsers("id","psword","name"));
    //     const users = UserStorage.getUsers("id","psword");

    //    const response = {};
    //    if( users.id.includes(id) ){
    //        const idx = users.id.indexOf(id);
    //        if( users.psword[idx] === psword){
    //            response.success = true;
    //            return res.json(response);
    //        }
    //    }
    //    response.success = false;
    //    response.msg = "로그인애 실패하셨습니다.";
    //    return res.json(response);
    },
};

module.exports = {
    output, 
    process
};

 