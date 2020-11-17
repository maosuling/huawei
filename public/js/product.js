import './library/jquery.js';
import { baseUrl } from './library/config.js';
import cookie from './library/cookie.js';
import glass from './library/glass.js';

(function() {
    let id = location.search.split('=')[1]; // 获得商品id
    // console.log(id);
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getItem`,
        data: { id: id },
        dataType: "json",
        success: function(res) {
            res = res[0];
            let picture = JSON.parse(res.picture);

            let template = `
            <div id="head">
            <div class="content nav-top">
                <div class="left">
                    <ul class="nav">
                        <li class="nobefore"><a href="">网页</a></li>
                        <li><a href="">华为官网</a></li>
                        <li><a href="">荣耀官网</a></li>
                        <li><a href="">花粉俱乐部</a></li>
                        <li><a href="">V码(优购码)</a></li>
                        <li><a href="">企业购</a></li>
                        <li><a href="">Select Region</a></li>
                        <li class="nav-list">
                            <p><span>更多精彩</span></p>
                            <div class="subnav-more">
                                <ul>
                                    <li>
                                        <a href="#">EMUI </a>
                                    </li>
                                    <li>
                                        <a href="#">应用市场</a>
                                    </li>
                                    <li>
                                        <a href="#">华为终端云空间</a>
                                    </li>
                                    <li>
                                        <a href="#">开发者联盟</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
    
    
                <div class="right">
                    <ul class="nav">
                        <li class="nobefore"><a href="">请登录</a></li>
                        <li class="nobefore"><a href="">注册</a></li>
                        <li><a href="">我的订单</a></li>
                        <li class="nav-list">
                            <p><span>客服服务</span></p>
                            <div class="subnav-server">
                                <ul>
                                    <li>
                                        <a href="#">服务中心</a>
                                    </li>
                                    <li>
                                        <a href="#">联系客服</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-list">
                            <p><span>网络导航</span></p>
                            <div class="subnav-bar">
                            </div>
                        </li>
                        <li class="nav-list">
                            <p><span>手机版</span></p>
                            <div class="subnav-app">
                                <ul>
                                    <li class="app clearfix">
                                        <a href="" class="left">
                                            <img src="../img/1.png" alt="" class="img-app">
                                        </a> 
                                        <div class="left app1">
                                            <h3>华为商城APP</h3>
                                            <p>新人专享好礼<br>最高5000积分</p>
                                            <div class="iconfont1">
                                                <span class="iconfont">&#xe610;</span>
                                                <p>Andraid</p>
                                            </div>
                                        </div>                                                                                                    
                                    </li>
                                    <li class="app clearfix">
                                        <a href="" class="left">
                                            <img src="../img/1.png" alt="" class="img-app">
                                        </a> 
                                        <div class="left app1">
                                            <h3>华为商城APP</h3>
                                            <p>新人专享好礼<br>最高5000积分</p>
                                            <div class="iconfont1">
                                                <span class="iconfont">&#xe609;</span>
                                                <p>Andraid</p>
                                            </div>
                                        </div>                                                                                                    
                                    </li> 
                                    <li class="app clearfix">
                                        <a href="" class="left">
                                            <img src="../img/1.png" alt="" class="img-app">
                                        </a> 
                                        <div class="left app1">
                                            <h3>华为商城APP</h3>
                                            <p>新人专享好礼<br>最高5000积分</p>
                                            <div class="iconfont1">
                                                <span class="iconfont">&#xf0039;</span>
                                                <p>Andraid</p>
                                            </div>
                                        </div>                                                                                                    
                                    </li>      
                                </ul>
                            </div>
                        </li>
                        <li class="nav-list">
                            <p><span>购物车<em>(0)</em></span></p>
                            <div class="subnav-shop"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="underheader">
        <div class="secondnav">
            <div class="secondnav-left">
                <img src="../img/logo.png" alt="" class="logo">
                
                <ul class="second-left-list">
                    <li>
                        <a href="#" class="imgmargin">
                            <img src="../img/hwzq.png"  alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#" class="imgmargin">
                           <img src="../img/ryzq.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">P40系列</a>
                    </li>
                    <li>
                        <a href="#">荣耀30</a>
                    </li>
                    <li>
                        <a href="#">安心居家</a>
                    </li>
                </ul>
                
            </div>
            <div class="secondnav-right">
                    <div class="search">
                        <form action="">
                                <input type="text" class="secondnav-right-text"><input type="submit"value=" " class="secondnav-right-but">
                                <a href="#" style="color: lightgray;position:absolute;left: 60px;top: 8px;font-size: 12px;">Mate 40系列</a>
                                <a href="#" style="color: lightgray;position:absolute;left: 150px;top: 8px;font-size: 12px;">荣耀30</a>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
        <div class="hr10"></div>
        <div class="g">
            <div class="g-1">
                <a href="">首页</a>
                &nbsp;>&nbsp;
                <a href="">手机</a>
                &nbsp;>&nbsp;
                <a href="">HUAWEI Mate系列</a>
                &nbsp;>&nbsp;
                <span>HUAWEI Mate 40 Pro+ 5G 全网通 12GB+256GB（陶瓷黑）</span>
            </div>
        </div>
        <div class="hr10"></div>
        <div class="product">
            <div class="content clearfix">
                <div class="left left1"> 
                    <div class="smallfdj">
                        <img src="../img/${picture[0].src}" alt="" class="smallfdj2">
                        <div class="hide movebox"></div>
                    </div>
                    <div class="smalltp clearfix">
                        <div class="prev"><span>&lt;</span></div>
                        <div class="smalltp1">
                            <li class="clearfix smalltp2 p-picture">
                                <a href=""><img src="../img/${picture[0].src}" alt=""></a>
                                <a href=""><img src="../img/${picture[1].src}" alt=""></a>
                                <a href=""><img src="../img/${picture[2].src}" alt=""></a>
                                <a href=""><img src="../img/${picture[3].src}" alt=""></a>
                                <a href=""><img src="../img/${picture[4].src}" alt=""></a>
                            </li>
                        </div>
                        <div class="next"><span>&gt;</span></div>
                    </div>
                    <div class="bigfdj hide">
                        <img src="../img/${picture[0].src}" alt="" class="bigpic">
                    </div>
                </div>
                <div class="left right1">
                    <h1>HUAWEI FreeBuds 3 无线耳机（陶瓷白）</h1>
                    <div class="gwcz">
                        <p class="p-price">价格<span>￥${res.price}</span></p>
                        <div class="gwc6">
                            <span>促销</span>
                            <span>限时特价</span>
                            <span>限时直降50元</span>
                        </div>
                        <div class="gwc7">
                            <span>一站式换新</span>
                            <span>APP专享，最高补贴550元</span>
                        </div>
                        <div class="gwc8">
                            <span>购机证券</span>
                            <span>支付后赠送优酷七天VIP会员，斑马AI课49元英语礼包</span>
                        </div>
                    </div>       
                    <div class="gwc1">
                        <span>选择版本</span>
                        <span>无线充版</span>
                        <span>有线充版</span>
                    </div>
                    <div class="gwc2">
                        <span>选择颜色</span>
                        <a href="" class="gwc-1">
                            <img src="../img/p01-0.png" alt="">
                            <span>陶瓷白</span>
                        </a>
                        <a href=""  class="gwc-2">
                            <img src="../img/p01-1.png" alt="">
                            <span>碳金灰</span>
                        </a>
                    </div>
                    <div class="gwc3">
                        <span>选择套餐</span>
                        <span>官方标配</span>
                    </div>
                    <div class="gwc4">
                        <span>分期免息</span>
                        <span>花呗分期</span>
                    </div>
                    <div class="gwc p-num">
                        购买数量:<input type="number" value="1" min="1" max="${res.num}" id="num" class="input1">
                        <span>库存数量:${res.num}</span>
                        <a href="../html/shopcar.html" id="additem"><span>加入购物车</span></a>
                        <span>立即下单</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="product1">
             ${res.details}
        </div>
        <div id="footer">
        <div class="container">
             <div>
                 <ul class="footer-first-list clear">
                     <li>
                         <a href="#" class="fitsta">
                             百强企业 品质保证
                         </a>
                     </li>
                     <li >
                         <a href="#" class="seconda">
                             7天退货 15天换货
                         </a>
                     </li>
                     <li >
                         <a href="#" class="thirda">
                             48元起免运费
                         </a>
                     </li>
                     <li >
                         <a href="#" class="foura">
                             2000家服务店 全国联保
                         </a>
                     </li>
                 </ul>
             </div>
             <div class="footer-second">
                 <div class="footer-second-main clear">
                        <div class="footer-second-main-left clear">
                            <ul >
                                <li class="firstli"><a href="#">购物相关</a></li>
                                <li><a href="#">购物指南</a></li>
                                <li><a href="#">配送方式</a></li>
                                <li><a href="#">支付方式</a></li>
                                <li><a href="#">常见问题</a></li>
                            </ul>
                            <ul >
                                <li class="firstli"><a href="#">购物相关</a></li>
                                <li><a href="#">购物指南</a></li>
                                <li><a href="#">配送方式</a></li>
                                <li><a href="#">支付方式</a></li>
                                <li><a href="#">常见问题</a></li>
                            </ul>
                            <ul >
                                <li class="firstli"><a href="#">购物相关</a></li>
                                <li><a href="#">购物指南</a></li>
                                <li><a href="#">配送方式</a></li>
                                <li><a href="#">支付方式</a></li>
                                <li><a href="#">常见问题</a></li>
                            </ul>
                            <ul >
                                <li class="firstli"><a href="#">购物相关</a></li>
                                <li><a href="#">购物指南</a></li>
                                <li><a href="#">配送方式</a></li>
                                <li><a href="#">支付方式</a></li>
                                <li><a href="#">常见问题</a></li>
                            </ul>
                            <ul >
                                <li class="firstli"><a href="#">购物相关</a></li>
                                <li><a href="#">购物指南</a></li>
                                <li><a href="#">配送方式</a></li>
                                <li><a href="#">支付方式</a></li>
                                <li><a href="#">常见问题</a></li>
                            </ul>
                            <ul >
                                <li class="firstli"><a href="#">购物相关</a></li>
                                <li><a href="#">购物指南</a></li>
                                <li><a href="#">配送方式</a></li>
                                <li><a href="#">支付方式</a></li>
                                <li><a href="#">常见问题</a></li>
                            </ul>
                            
                        </div>
                        <div class="footer-second-main-right">
                             <p class="main-right-p1">950805</p>
                             <p class="main-right-p2">7x24小时客服热线（仅收市话费）</p>
                             <p class="main-right-p3"><a href="#" class="zx">在线客服</a></p>
                             <p class="main-right-p4">关注Vmall：
                                 <a href="#" class="footer-firsta"></a>
                                 <a href="#" class="footer-thirda"></a>
                                 <a href="#" class="footer-seconda"></a>
                                 <a href="#" class="footer-foura"></a>
                             </p>
                        </div>
                 </div>
             </div>
             <div class="footer-third">
                 <div class="footer-third-center clear">
                    <div class="third-center-left">
                     <img src="../img/vmall.png" alt="" width="95px">
                    </div>
                    <div class="third-center-center">
                        <ul class="lastul clear">
                            <li class="left-padding0"><a href="#">华为集团</a></li>
                            <li><a href="#">华为CBG官网</a></li>
                            <li><a href="#">荣耀官网</a></li>
                            <li><a href="#">花粉俱乐部</a></li>
                            <li><a href="#">华为应用市场</a></li>
                            <li><a href="#">EMUI</a></li>
                            <li><a href="#">华为终端云空间</a></li>
                            <li><a href="#">开发者联盟</a></li>
                            <li><a href="#">华为商城手机版</a></li>
                            <li class="right-padding0"><a href="#">网站地图</a></li>
                        </ul>
                        <ul class="lastul2 clear">
                            <li><a href="#">隐私声明&nbsp;</a></li>
                            <li><a href="#">服务协议&nbsp;</a></li>
                            <li><a href="#"> COOKIES&nbsp;</a></li>
                            <li>Copyright © 2012-2020 华为终端有限公司 版权所有</li>
                            <li><a href="#">&nbsp;粤ICP备19015064号</a></li>
                            <li><a href="#">&nbsp;粤公网安备 44190002003939号</a></li>
                        </ul>
                        <p class="footer-last-lastp">增值电信业务经营许可证：粤B2-20190762&nbsp;|&nbsp;备案主体编号：44201919072182</p>
                    </div>
                    <div class="lastdiv">
                        <a href="#">
                     <img src="../img/footerlast.png" alt=""></a>
                    </div>
                 </div>
             </div>
        </div> 
            `;

            // 渲染页面
            $('body').append(template).find('#additem').on('click', function() {
                // console.log(cookie);
                addItem(res.id, $('#num').val());
            });

            //放大镜
            const movebox = $('.movebox');
            const bigpic = $('.bigpic');
            const small = $('.smallfdj');
            const big = $('.bigfdj');
            glass(movebox,bigpic,small,big);
            
        }
    });

    function addItem(id, num) {
        // console.log(id,num);
        let shop = cookie.get('shop'); // 从cookie中获得shop数据

        let product = {
            id: id,
            num: num
        }

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop); // 将取出的cookie数据转成对象

            // 判断cookie中的购物车数据 是否已存在本条数据的id
            // 如果本条数据的id已存在 修改数量
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(el => {
                    el.id === id ? el.num = num : null;
                });
            } else {
                shop.push(product);
            }

        } else { // cookie中不存在shop数据
            shop = []; // 设置一个数组
            shop.push(product); // 将当前商品存入数组
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }

})();