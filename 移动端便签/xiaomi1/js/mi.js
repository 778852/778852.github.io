

window.onload=function () {
    //选项卡
   let boxs = document.querySelectorAll('.big');
   boxs.forEach(function (value) {
       xuanxiang(value);
   })
    function xuanxiang(par) {
	let zis = par.querySelectorAll('.diyi>li');
    let zuidas = par.querySelectorAll('.tupiany>.zuida');
        zis.forEach(function (value,index) {
            value.onmousemove=function () {
                for(let i =0;i<zis.length;i++){
                  zis[i].classList.remove('active');
                  zuidas[i].classList.remove('active');
                }
                this.classList.add('active');
                zuidas[index].classList.add('active');
            }
        })
      }
      
//banner图
        let banner=document.querySelectorAll('.bannertu>ul>li');
        let boxdians=document.querySelectorAll('.boxdian>ul>li');
        let box=document.querySelector('.banner');
        let right=document.querySelector('.jiantouzuo');
        let left=document.querySelector('.jiantouyou');
        let n=0;
        let t=setInterval(change,2000);
        let flagss=true;
        function change(way='r') {
            if(!flagss){
                return;
            }
            flagss=false;
            if(way=='r'){
                n++;
                if(n>banner.length-1){
                    n=0;
                }
            }else if(way=='l'){
                n--;
                if(n<0){
                    n=banner.length-1;
                }
            }
            for(let i=0;i<banner.length;i++){
                banner[i].classList.remove('active');
                boxdians[i].classList.remove('active') ;
            }
            banner[n].classList.add('active') ;
            boxdians[n].classList.add('active') ;
            banner[n].addEventListener('transitionend',function(){
                flagss=true;
            })
        }
        boxdians.forEach(function (value,index) {
            value.onclick=function () {
                if(!flagss){
                    return;
                }
                flagss=false;
                for(let j=0;j<boxdians.length;j++){
                    banner[j].classList.remove('active');
                    boxdians[j].classList.remove('active');
                }
                this.classList.add('active') ;
                banner[index].classList.add('active') ;
                banner[index].addEventListener('transitionend',function(){
                flagss=true;
            })
                n=index;
            }
        })
        right.onclick=function () {
            change('l');
        }
        left.onclick=function () {
            change();
        }
        box.onmousemove=function(){
            clearInterval(t);
        }
        box.onmouseout=function () {
            t=setInterval(change,2000);
        }


//banner 选项卡
let zis = document.querySelectorAll('.zuozi>li');
let zuidas = document.querySelectorAll('.bannerzhong');
        zis.forEach(function (value,index) {
            value.onmousemove=function () {
                for(let i =0;i<zis.length;i++){
                 zuidas[i].style.display='none';
                }
                zuidas[index].style.display='block';
            }
            value.onmouseout=function(){
            for(let i=0;i<zis.length;i++){
                zuidas[i].style.display='none';
            }
        }
    })
      
        
 
//banner下

        let bigs=document.querySelector('.img');
        let bigd=document.querySelector('.xiaomidan')
        let widths=parseInt(getComputedStyle(bigd,null).width);
        let lefts=document.querySelector('.jiantou-2-l');
        console.log(lefts);
        let rights=document.querySelector('.jiantou-2-r');
        console.log(rights);
        let time=setInterval(mova,3000);
        let fal=true;
        let x=0;
        // function mova(){
        //     if(!fal){
        //         return;
        //     }
        //     fal=false;
        //     x++;
        //     if(x%2==0){
        //       animate(bigs,{left:0},1000);
        //       animate(bigs,{left:-widths},1000,function(){
        //         fal=true;
        //       }) ;
        //     }else{
        //      animate(bigs,{left:-widths},1000);
        //       animate(bigs,{left:0},1000,function(){
        //         fal=true;
        //       }) ;
        //     }
            
        // }
        
        // rights.onclick=function(){
        //     if(fal){
        //         fal=false;
        //         animate(bigs,{left:-widths},1000,function(){
        //         fal=true;
        //       });
        //     }
          
        // }
        // lefts.onclick=function(){
        //     if(fal){
        //        fal=false;
        //         animate(bigs,{left:0},1000,function(){
        //         fal=true;
        //       });
        //     }
          
        // }


        // bigd.onmousemove=function(){
        //     clearInterval(time);
        // }
        // bigd.onmouseout=function () {
        //     time=setInterval(mova,2000);
        // }



    

    function mova(){
        if(!fal){
            return;
        }
        fal=false;
         let left = parseInt(getComputedStyle(bigs,null).left);
         if(left==0){
             animate(bigs,{left:-widths},3000,function(){
                fal=true;;
             })
         }else if(left==-widths){
             animate(bigs,{left:0},3000,function(){
                fal=true;;
             });
         }

     }

    lefts.onclick=function(){
        // if(!fal){
        //     return;
        // }
        // fal=false;
        // let left = parseInt(getComputedStyle(bigs,null).left);
        //      if(left==0){
        //          animate(bigs,{left:0},2000,function(){
        //         fal=true;;
        //      });
        //      }else if(left==-widths){
        //          animate(bigs,{left:-widths},2000,function(){
        //         fal=true;;
        //      });
        //  }
        mova();
    }

    rights.onclick=function(){
      mova();
    }

    bigd.onmousemove=function(){
        clearInterval(time);
    }
    bigd.onmouseout=function () {
        time=setInterval(mova,3000);
    }

    









//导航
let box2=document.querySelector('.bigg .danghang')
let box1 = document.querySelectorAll('.shouye .ohezi');
let hetiao = document.querySelectorAll('.container>ul');
let boxd = document.querySelector('.xiahezi');
    box1.forEach(function (value,index) {
        value.onmousemove=function () {
            animate(boxd,{height:229},200);
          boxd.style.display='block'
            for(let i =0;i<box1.length;i++){
                hetiao[i].classList.remove('first');
            }
            // boxd.style.height=0;
            hetiao[index].classList.add('first');
            // animate(boxd,{height:229})
        }
        value.onmouseout=function(){
        animate(boxd,{height:0},200)
      }
    });



boxd.onmousemove=function(){
    animate(boxd,{height:229},200)
}
boxd.onmouseout=function () {
    animate(boxd,{height:0},200)
}


// 明星单品

    let boox = document.querySelector('.bhezi-a');
     console.log(boox);
    let tuijian = document.querySelector('.tuijian');
    console.log(tuijian);
    let widthh = parseInt(getComputedStyle(boox,null).width);
    console.log(widthh);
    let leftl = document.querySelector('.jiantou-a');
    console.log(leftl);
    let rightr = document.querySelector('.jiantou-b');
    console.log(rightr);
    leftl.onclick=function(){
      animate(tuijian,{left:-widthh},800);
    }

    rightr.onclick=function(){
      animate(tuijian,{left:0},800);
    }


{
    function toggleShow(node){
        const box = node.querySelector('.plate-inner');
        let lists = node.querySelectorAll('.plate-inner li');
        let circles = node.querySelectorAll('.circle li');
        let prev = node.querySelector('.prev');
        let next = node.querySelector('.next');
        let i = 0;
        //圆点 点击切换
        circles.forEach( (el,index)=>{
            el.onclick = function(){
                i = index;
                move();
            }
        } )

        //前进 后退
        function toggle(){
            if(this.classList.contains('next') && i>0){
                i--;
            } else if(this.classList.contains('prev') && i<lists.length-1){
                i++;
            } else {
                return
            }
            move();
        }
        //移动
        function move(){
            box.style.marginLeft = `-${i * 296}px`;
            circles.forEach(el=>{
                el.classList.remove('circleActive');
            });
            circles[i].classList.add('circleActive');
        }
        prev.onclick = next.onclick = toggle;
    }
    
    
    const lists = document.querySelectorAll('.plate-list .plate-item');
    console.log(lists);   
    lists.forEach(el=>{
        toggleShow(el);
    }) 
}
    {
        let imgs=document.images;
        let st=document.body.scrollTop;
        Array.from(imgs).forEach(function (ele) {
            if(st+window.innerHeight>getPosition(ele)){
                ele.src=ele.getAttribute("data-src");
            }
        });
        window.addEventListener("scroll",function () {
            let st=document.body.scrollTop;
            Array.from(imgs).forEach(function (ele) {
                if(st+window.innerHeight > getPosition(ele)){
                    ele.src=ele.getAttribute("data-src");
                }
            })
        });
        function getPosition(obj) {
            let ot=obj.offsetTop;
            let parent=obj.offsetParent;
            while(parent != null && parent.nodeName != "BODY"){
                ot+=parent.offsetTop;
                parent=parent.offsetParent;
            }
            return ot;
        }
    }































     //  let box2 = document.querySelector('.xiaomidan');
     //  console.log(box2);
     //  let img2 = document.querySelector('.xiaomi>img');
     //  console.log(img2);
     //  let right2 = document.querySelector('.xiaomi>jiantou-2-r');
     //  console.log(right2);
     //  let left2 = document.querySelector('.xiaomi>jiantou-2-1');
     //  console.log(left2);
     //  let imgli=document.querySelector('.img li');
     //  console.log(imgli);
     //  let width = parseInt(getComputedStyle(imgli,null).width);
     //  console.log(width);
     //  function move(){
     //        animate(img2,{left:-width},800,function(){
     //            let first=img2.firstElementChild;
     //            img2.appendChild(first);
     //            img2.style.left=0;
     //        })
     //  } 
     //  console.log(move)
     //   setInterval(move, 2000);
     //  box2.onmouseover=function(){
     //      clearInterval(t2);
     //  }
     //  box2.onmouseout=function(){
     //      t2 = setInterval(move,2000)
     //  }
     //  right2.onclick=function(){
     //      animate(img2,{left:-width},800,function(){
     //        let first=img2.firstElementChild;
     //        first.parentNode.appendChild(first);
     //        img2.style.left=0;
     //      })
     //  }
     // left2.onclick=function(){  
     //      let first=img2.firstElementChild;   
     //      let last=img2.lastElementChild;
     //      first.parentNode.insertBefore(last,first); 
     //      img2.style.left=-width+'px';   
     //      animate(img2,{left:0},800,function(){})
     // }


 }




 


  

