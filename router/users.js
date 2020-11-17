const express = require('express');
const conn = require('../dao/conn');
const crypto = require('crypto');

const router = express.Router(); // 获得路由对象

// express支持restful api规范
// 定义了很多http动词
// get post put delete

router.route('/reg')
    .post((req, res, next) => {
        // 判断用户名是否存在

        let searchUser = `select * from users where user_phone='${req.body.phone}'`;

        conn.query(searchUser, (err, results) => {
            if (err) console.log(err);
            if (results.length) {
                res.json({ msg: '用户名已存在', user_phone: req.body.phone, error: 1 });
            } else {
                let md5 = crypto.createHash('md5'); // 创建一个哈希加密
                let passResult = md5.update(req.body.password).digest('hex'); // 加密内容获得16进制结果

                let sql = `insert into users(user_name, user_password,user_email, user_phone, user_address) 
        values('${req.body.username}','${passResult}','${req.body.email}','${req.body.phone}','${req.body.address}')`;


                conn.query(sql, (err, result) => {
                    if (err) console.log(err);
                    if (result.insertId) {
                        res.cookie('phone', req.body.phone);
                        res.cookie('password', req.body.password);
                        res.cookie('isLogined', true);
                        res.json({
                            msg: "注册成功",
                            phone: req.body.phone,
                            error: 0
                        });
                    }
                });
            }
        });

    });

    router.route('/login')
    .post((req,res,next) => {
        let md5 = crypto.createHash('md5');
        let passResult = md5.update(req.body.password).digest('hex');

        let searchUser = `select * from users where user_phone='${req.body.phone}' and user_password='${passResult}'`;
        
        conn.query(searchUser,(err,results) => {
            if (err) console.log(err);           
            if (results.length) {
                res.json({
                    msg: "登录成功",
                    phone: req.body.phone,
                    error: 0
                });
            } else {
                res.json({
                    msg: "账号或密码错误",
                    phone: req.body.phone,
                    error: 1
                });
            }
        });
    });

module.exports = router; // 路由导出