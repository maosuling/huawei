import bufferMove from './move.js';
function banner1(banner, picLi, btnLi,rightArrow,leftArrow){
    let num = 0;
    let timer = null;

    for (let i = 0; i < btnLi.length;i++) {
        btnLi[i].onmouseover = function() {
            num = i;
            tabswitch();
        };
    }

    function tabswitch() {
        // 清空
        for (let j = 0;j < btnLi.length;j++) {
            btnLi[j].className = '';
            bufferMove(picLi[j],{
                opacity: 0
            });
        }
        // 当前添加
        btnLi[num].className = 'active';
        bufferMove(picLi[num],{
            opacity: 100
        });
    }
    
    
    banner.on('mouseover',function() {
        clearInterval(timer);
    });
    
    banner.on('mouseout',function() {
        timer = setInterval(() => {
            num++;
            if (num > btnLi.length - 1) {
                num = 0;
            }
            tabswitch();
        }, 3000);
    });
    
    // 左右箭头添加点击事件
    rightArrow.on('click',function() {
        num++;
        if (num > btnLi.length - 1) {
            num = 0;
        }
        tabswitch();
    });
    leftArrow.on('click',function() {
        num--;
        if (num < 0) {
            num = btnLi.length - 1;
        }
        tabswitch();
    });
    // 自动播放
    timer = setInterval(() => {
        num++;
        if (num > btnLi.length - 1) {
            num = 0;
        }
        tabswitch();
    }, 3000);

}

export default banner1;