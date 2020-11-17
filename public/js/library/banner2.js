import bufferMove from './move.js';
function banner2(banner3, picLi3, btnLi3){
    let num = 0;
    let timer = null;

    for (let i = 0; i < btnLi3.length;i++) {
        btnLi3[i].onmouseover = function() {
            num = i;
            tabswitch();
        };
    }

    function tabswitch() {
        // 清空
        for (let j = 0;j < btnLi3.length;j++) {
            btnLi3[j].className = '';
            bufferMove(picLi3[j],{
                opacity: 0
            });
        }
        // 当前添加
        btnLi3[num].className = 'active';
        bufferMove(picLi3[num],{
            opacity: 100
        });
    }
    
    
    banner3.on('mouseover',function() {
        clearInterval(timer);
    });
    
    banner3.on('mouseout',function() {
        timer = setInterval(() => {
            num++;
            if (num > btnLi3.length - 1) {
                num = 0;
            }
            tabswitch();
        }, 3000);
    });
    
    // 自动播放
    timer = setInterval(() => {
        num++;
        if (num > btnLi3.length - 1) {
            num = 0;
        }
        tabswitch();
    }, 3000);

}

export default banner2;