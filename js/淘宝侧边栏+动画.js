
window.document.addEventListener('DOMContentLoaded',function(){

    var sidebar = document.querySelector('.sidebar');
    var bodys = document.querySelector('.body');
    var banner = document.querySelector('.banner');
    var span = document.querySelector('span');

    var sidebarTop = sidebar.offsetTop - banner.offsetTop;
    document.addEventListener('scroll',function(){
        /* var sidebarY =  */
        /* console.log(window.pageYOffset); */
        /* console.log(banner.offsetTop); */
        /* console.log(sidebar.offsetTop - banner.offsetTop); */
        
        if(window.pageYOffset >= banner.offsetTop){
            sidebar.style.position = 'fixed';
            sidebar.style.top = sidebarTop + 'px'
        }else{
            sidebar.style.position = 'absolute';
            sidebar.style.top = 500 + 'px'
        }
        if(window.pageYOffset >= bodys.offsetTop){
            span.style.display = 'block';
        }else{
            span.style.display = 'none';
        }
    })

    /* banner.addEventListener('mouseover',function(){//经过子元素也会触发事件
        console.log(1);
        
    }) */
    banner.addEventListener('mouseenter',function(){//只会在经过绑定事件的盒子触发，不会冒泡，跟mouseleave合用
        /* console.log(2); */
        
    })
    banner.addEventListener('mouseleave',function(){
        /* console.log(4); */
        
    })
    //动画效果
    var content = document.querySelector('.content');
    /* var timer = setInterval(function(){
        console.log(content.offsetLeft);
        
        if(content.offsetLeft >= 500){
            clearInterval(timer);
        }
        content.style.left = content.offsetLeft + 1 + 'px';
    },30) */
    //封装函数
    function animate(obj , target , callback){//callback是一个回掉函数
        clearInterval(obj.timer);//取消上一个点击的定时器，消除bug
        obj.timer = setInterval(function(){//使用对象.timer，增加性能
            //缓动动画
            var step = (target - obj.offsetLeft) / 10;
            step = step < 0 ? Math.floor(step) : Math.ceil(step);
            if(obj.offsetLeft == target){
                clearInterval(obj.timer);
                //结束里调用回掉函数
                if(callback){
                    callback();
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        },15)
    }
    var btn = document.querySelectorAll('button');
    btn[0].addEventListener('click',function(){
        animate(content,1000,function(){
            alert('前进成功');
        })//加上回掉函数
    })
    btn[1].addEventListener('click',function(){
        animate(content,0,function(){
            alert('后退成功');
        })//加上回掉函数
    })
})