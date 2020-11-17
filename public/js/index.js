import './library/jquery.js';
import './library/jquery.lazyload.min.js';
import banner1 from './library/banner1.js';
import banner2 from './library/banner2.js';
import { baseUrl } from './library/config.js';

(function() {
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,
        dataType: "json",
        success: function(res) {
            // 获得数据后进行字符串拼接
            let tempLi = '';
            res.forEach((elm, i) => {

                let picture = JSON.parse(elm.picture);
                // console.log(picture);
                // console.log(elm);

                tempLi += `<li class="margin0 item" style="margin-right:10px;">
                <a href="../html/product.html?id=${elm.id}">
                    <div class="six-list-top">
                        <p class="six-first-p1">
                            <span>高清双摄</span>
                        </p>
                        <p class="six-second-p p-picture">
                            <img class="lazy" data-original="img/${picture[0].src}" alt="">
                        </p>
                        <p class="third-p1 p-title"> ${elm.title}</p>
                        <p class="third-p2 p-subtitle">${elm.subtitle}</p>
                        <p class="third-p3 p-price">￥${elm.price}</p>
                    </div> 
                </a>
            </li>`;
            });

            $('.list').append(tempLi);

            //懒加载
            $(".lazy").lazyload({effect: "fadeIn"});

            //轮播图1
            const banner = $('.slider');
            const picLi = $('.idx-banner .banner-box img');
            const btnLi = $('.idx-banner .page span');
            const leftArrow = $('.prev');
            const rightArrow = $('.next');
            banner1(banner, picLi, btnLi,rightArrow,leftArrow);

            //轮播图2
            const banner3 = $('.slider3');
            const picLi3 = $('.idx-banner .banner-box2 img');
            const btnLi3 = $('.idx-banner .page2 span');
            banner2(banner3, picLi3, btnLi3);

            //轮播图3
            $('.prev2').on('click',function(){
                $('.slider4').animate({left:'-=1200px'},2000);
            });
            $('.next2').on('click',function(){
                $('.slider4').animate({left:'+=1200px'},2000);
            });

            //滚轮事件
            $('#list-list>li>a').on('click', function() {
                let top = $(`#${$(this).attr('title')}`).offset().top;
                $('html').animate({
                    scrollTop: top
                }, 600);
            });

            $(window).on('scroll', function() {
                let num = '2133';
                let top = $(document).scrollTop();
                console.log(top);

                let index = Math.round((top-num)/1000);
                $('#list-list>li>a').removeClass('active').eq(index).addClass('active');
            });
        }
    });
})();