import './library/jquery.js';
import './library/jquery.md5.js';
import cookie from './library/cookie.js';
import { baseUrl } from './library/config.js';

$('#submit').on('click', function() {
    // 省略1万字的表单验证环节
    // alert('登录成功');
    let password = $.md5($('[name=password]').val());
    $.ajax({
        type: "post",
        url: `${ baseUrl }/users/login`,
        data: {
            password: password,
            phone: $('[name=phone]').val(),
        },
        dataType: "json",
        success: function(res) {
            // console.log(res);
            if (res.err) {
                alert(`${res.msg},请重新输入`);
                location.reload();
            } else {
                alert(`${res.msg}`);
                location.href = `${ baseUrl }`;
            }
        }

    });
});
