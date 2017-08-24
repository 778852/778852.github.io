/*
* @Author: yuge
* @Date:   2017-07-17 23:48:33
* @Last Modified by:   yuge
* @Last Modified time: 2017-08-24 00:54:05
*/
{
    const hidden=document.querySelector('.hidden');
    const flexedl=document.querySelector('.fixed-left')
    window.onscroll=function(){
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        if(obj.scrollTop>500){
            hidden.style.top=0;
        
        }else{
            hidden.style.top='-50px';
            
        }
        if(obj.scrollTop>800){
            flexedl.style.transform='scale(1)';
            flexedl.style.left='2px';
        }else{
            flexedl.style.transform='scale(0.2)';
            flexedl.style.left='-38px';
        }
    }
}
{var items=document.querySelectorAll('.module-right td');
var masks=document.querySelectorAll('.mask')
// console.log(items);
// console.log(masks);
items.forEach(function(ele,index){
        ele.onmouseover=function(){
            masks[index].style.display='block';
            masks[index].style.opacity='0.9'
        }
        ele.onmouseout=function(){
        	masks[index].style.display='none';
        }
    })
}
{
const bigs=document.querySelectorAll('.zhibo-big li');
const smalls=document.querySelectorAll('.zhibo-small li');
const masks=document.querySelectorAll('.small-mask');
const kais=document.querySelectorAll('.kai');
const kaishis=document.querySelectorAll('.kaishi img');
const right=document.querySelector('.youhua');
const bosmalls=document.querySelector('.zhibo-small');
const left=document.querySelector('.zuohua');
// console.log(bigs);
// console.log(smalls);
// console.log(masks);
 smalls.forEach(function(ele,index){
 	ele.onmouseover=function(){
        for(var i=0;i<smalls.length;i++){
 			bigs[i].style.zIndex='1';
            bigs[i].style.display='none';
 			masks[i].style.display='none';
            masks[i].style.opacity='0'
        
            }
    bigs[index].style.zIndex='2';
    bigs[index].style.display='block';
    masks[index].style.display='block';
    masks[index].style.opacity='0.7';
    };

 });
    right.onclick=function(){
        bosmalls.style.marginLeft=-488+"px";
    left.onclick=function(){
        bosmalls.style.marginleft=0;
         }   
    }
    // bigs.onmouseover=function(){
    //     kaishis.style.transform='scale(1.5)';
    // }
}
{
    const words=document.querySelector('.lunbo-word');
    let num=0;
    setInterval(function(){
    num++;
    if(num==3){
        num=0;
    }
    words.style.marginTop=-num*40+"px";
    },3000);
}
{
	const bannerlist=document.querySelectorAll('.banner li');
      const boxlist=document.querySelectorAll('.dian-box li');
      const bannerbox=document.querySelector('.banner-bottom');
      var colorarr=['#30B7F9','#85CEF1','#E6E7E8','#33A7DD','#930BF5','#08CDFA'];
        boxlist.forEach(function(ele,index){
            ele.onmouseover=function(){
                for(var i=0;i<boxlist.length;i++){
                    boxlist[i].classList.remove('active');
                    bannerlist[i].classList.remove('active');
                }
                boxlist[index].classList.add('active');
                bannerlist[index].classList.add('active');
                bannerbox.style.background=colorarr[index];
                num=index;
            }
        })
        let num=0;
        let move=function(){
            num++;
            if(num==boxlist.length){
                num=0;
            }
            for(var i=0;i<boxlist.length;i++){
                boxlist[i].classList.remove('active');
                bannerlist[i].classList.remove('active');
            }
            boxlist[num].classList.add('active');
            bannerlist[num].classList.add('active');
            bannerbox.style.background=colorarr[num];
        }
        let st=setInterval(move,3000);
        bannerbox.onmouseover=function(){
            clearInterval(st);
        };
        bannerbox.onmouseout=function(){
            st=setInterval(move,3000);
        }
}
{
    const words=document.querySelectorAll('.banner-right li a');
    const photos=document.querySelectorAll('.banner-right li div img');
    words.forEach(function(ele,index){
        ele.onmouseover=function(){
          for(var i=0;i<words.length;i++){
            photos[i].style.display='none';
          }
          photos[index].style.display='block';
      };
    ele.onmouseout=function(){
    for(var i=0;i<words.length;i++){
            photos[i].style.display='none';
          }
    }
    });
}

$('.btn').click(function(){
        var index=$(this).index();
        var ot=$('.floor').eq(index).offset().top;
        $('html,body').animate({scrollTop:ot});
        $('.btn').filter('.active').removeClass('active').end().eq(index).addClass('active');
});
$(window).scroll(function(){
        var st=$(window).scrollTop();
        $('.floor').each(function(index,ele){
            if(st>=$(this).offset().top){
            $('.btn').filter('.active').removeClass('active').end().eq(index).addClass('active');
            }
        })
});
$('#btn').click(function(){
    $('html,body').animate({scrollTop:0},3000);
})
$('.li').mouseover(function(){
var index=$(this).index();
    $('.li').filter('.active').removeClass('active').end().eq(index).addClass('active');
})