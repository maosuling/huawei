import './library/jquery.js';
import './library/banner3.js';
import cookie from './library/cookie.js';
import { baseUrl } from './library/config.js';

(function() {
    let shop = cookie.get('shop');
    console.log(shop);

    if (shop) { // 有cookie数据才发请求
        shop = JSON.parse(shop);

        let idList = shop.map(elm => elm.id).join();

        $.ajax({
            type: "get",
            url: `${baseUrl}/product/getItems`,
            data: {
                idList: idList
            },
            dataType: "json",
            success: function(res) {
                let template = '';
                console.log(res);



                res.forEach((elm, i) => {
                    // 现在遍历数据时是按照数据库查询得到的结果遍历
                    // cookie中存放的数据 的顺序  和 查询结果的顺序不同
                    // 需要让cookie中的id和查询结果的id 一一对应
                    // 索引不同
                    let arr = shop.filter(val => val.id === elm.id);
                    // console.log(arr);

                    let picture = JSON.parse(elm.picture);

                    template += `<div class="list-body clearfix">
                        <div class="p-check">
                        <input type="checkbox" class="cek" data-pass="flase">
                    </div>
                    <div class="p-img">
                        <a href="javascript:;">
                            <img src="../img/${picture[0].src}" alt="" width="70px" height="70px">
                        </a>
                    </div>
                    <div class="p-title">
                        <a href="javascript:;">${elm.title}</a>
                    </div>
                    <div class="p-price">${(elm.price).toFixed(2)}</div>
                    <div class="p-num">
                        <input type="number" value="${arr[0].num}" min="1" max="${elm.num}">
                    </div>
                    <div class="p-sum">${(elm.price*arr[0].num).toFixed(2)}元</div>
                    <div class="p-del">
                        <a href="javascript:;" data-num="${elm.id}">删除</a>
                    </div>
                    </div>
                        `;
                    });

                // 渲染页面
                $('.list-body2').append(template);

                $('.list-body .p-del a').on('click',function () {
                    let a = $(this).attr('data-num');
                    for (let i = 0; i < shop.length; i++) {
                        if (shop[i].id == a) {
                            shop.splice(i,1);
                            cookie.set('shop',JSON.stringify(shop),1);
                            location.reload();
                        }
                    }
                    
                });

                    $('.p-num>input').on('change',function () {
                        let price = ($(this).parent().prev().text()*$(this).val()).toFixed(2);
                        $(this).parent().next().text(`${price}元`);
                    });

                    $('.cek').on('click',function () {
                        // 获取所有商品的复选框
                        let shopbtn = $(this).closest('.shopcar').find('.cek');

                        // 获取被勾选的复选框
                        let shopbtnC = $(this).closest('.shopcar').find('.cek:checked');

                        // 获取全选复选框
                        let shopS = $(this).closest('.shopcar').find('.allck');
                    
                        if (shopbtn.length == shopbtnC.length) {
                            shopS.prop('checked',true);
                            Totalprice();
                        } else {
                            shopS.prop('checked',false);
                            Totalprice();
                        }
                    });

                    $('.allck').on('click',function () {
                        if ($(this).prop('checked')) {
                            $(this).closest('.shopcar').find('.cek').prop('checked',true);
                            Totalprice();
                        } else {
                            $(this).closest('.shopcar').find('.cek').prop('checked',false);
                            Totalprice();
                        }
                    });

                    function Totalprice () {
                        $('.list-body').each(function () {
                            let oprice = 0;
                            
                            $('.cek').each(function () {

                                if ($(this).is(':checked')) {
                                    let price = parseInt($(this).closest('.list-body').find('.p-sum').text());
                                    
                                    oprice += price;
                                    
                                }
                                
                                $('.settle p').html(`<span>合计：</span>${oprice.toFixed(2)}<span>元</span>
                                <a href="javascript:;">去结算</a>`);
                        });
                     });
                 }                            
            }
        });
    }
})();