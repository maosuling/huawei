import './library/jquery.js';
import './library/jquery.md5.js';
import cookie from './library/cookie.js';
import { baseUrl } from './library/config.js';

$('#submit').on('click', function() {
    // 省略1万字的表单验证环节
    // alert('注册成功');
    let password = $.md5($('[name=password]').val());
    $.ajax({
        type: "post",
        url:`${ baseUrl }/users/reg`,
        data: {
            // username: $('[name=username]').val(),
            password: password,
            // email: $('[name=email]').val(),
            phone: $('[name=phone]').val(),
            // address: $('[name=address]').val(),
        },
        dataType: "json",
        success: function(res) {
            // console.log(res);
            if (res.error) {
                alert(`${res.msg},请重新注册`);
                location.reload();
            } else {
                alert(`${res.msg}`);
                location.href = `${ baseUrl }/html/login.html`;
            }
        }

    });
});
