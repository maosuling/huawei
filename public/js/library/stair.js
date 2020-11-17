function Stairs(options){
    this.options = options;
    this.init();
}
Stairs.prototype = {
    constructor:Stairs,
    init:function(){
    	//声明一个数组用来存储每一个模块距离顶部的距离
        this.content_top_list = [];
        $(this.options.content_selector).offset(function(index,coords){
             this.content_top_list.push(coords.top);
            return coords;
        }.bind(this));
        //这一步是给数组中添加一个项，在后面数组的时候的时候我们需要与最后一个模块的位置比对，以确保是否离开了判定区域，因此要添加一个footer的距离顶部的高度，也就是最后一个模块的距离顶部高度加上自己的高度。
        this.first = this.content_top_list[0];
        this._last = this.content_top_list[this.content_top_list.length-1] + $(this.options.content_selector).last().height();
        this.content_top_list.push(this._last);
        this.bindEvent();
    },
    bindEvent:function(){
         var $body_html = $("body,html");
         //此处我们需要用到鼠标点击的this因此我们需要把实例对象存储起来
         var instance = this;
         $(document).scroll(function(){
             var scrolltop = $body_html.scrollTop(); 
             this.calStairsIndex(scrolltop);
         }.bind(this));
         //绑定鼠标点击事件 当鼠标点击时 获取对应的下标 将页面滚动到改下表对应的卷动高度的位置
         $(this.options.stairs_selector).click(function(){
             var index = $(instance.options.stairs_selector).index(this);
             instance.changeScrollTop(index);
         })
    },
    calStairsIndex:function(st){
    	//当滚动的距离在最小以下或者最大以上时返回index=-1 当进入了某个区域时返回该区域的下标 当滚动的距离没有离开该区域时返回false
        if(st < this.first || st > this._last){
             this.index = -1;
             this.changeStairsBtn();
             return false;
        }
        if(st >= this.content_top_list[this.index] && st < this.content_top_list[this.index + 1 ]){
            return false;
        }
        for(var i = 0; i < this.content_top_list.length ; i++){
            if(st >= this.content_top_list[i] && st < this.content_top_list[i + 1 ]){
                this.index = i;
                break;
            }
        }
        this.changeStairsBtn();
    },
   
    changeStairsBtn:function(){
    //首先清除所有的li上的active 然后判定index的值 如果为-1就不给任何li添加active 如果不为-1就给对应下标的li添加active类 这样就可以有页面滚动 li随之变化的特效
         var stairs = $(this.options.stairs_selector);
         stairs.removeClass("active");
         if(this.index === -1){
             return false;
         }
         stairs.eq(this.index).addClass("active");
    },
    changeScrollTop:function(index){
         $("body,html").scrollTop(this.content_top_list[index]);
    }    
}
new Stairs({
    content_selector:".content",
    stairs_selector:".stairs-list li"
});
