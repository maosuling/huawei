// const btns = $('.links .tabBtn');
// const boxs = $('.set-meal-ajax .box');
// import 
// function tabs(btns,boxs){
//     btns.on('mouseover', function() {
//         let i = btns.index(this);
//         $(this).addClass('hover').siblings().removeClass('hover');
//         boxs.eq(i).addClass('show').siblings().removeClass('show');
//     });
// }

// export default tabs;

function sTab(smallpic,bigpic,right,left) {
    let listLi = $('.left1 .smalltp2 a');
    let list = $('.left1 .smallfdj2');

    let imgurlfirst = listLi.eq(0).find('img').attr('src');
    smallpic.attr('src',imgurlfirst);

    listLi.on('click',function() {
        let imgurl = $(this).find('img').attr('src');
        smallpic.attr('src',imgurl);
        bigpic.attr('src',imgurl);
    });

    let num = 5;
    right.on('click',function() {
        if (listLi.length > num) {
            num++;
            list.animate({
                left: -(num - 5) * listLi.eq(0).outerWidth(true)
            });
        }
    });

    left.on('click',function() {
        if (num > 5) {
            num--;
            list.animate({
                left: -(num - 5) * listLi.eq(0).outerWidth(true)
            });
        }
    });

}

export default sTab;
