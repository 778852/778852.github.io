{
  const bannerlist=document.querySelectorAll('.banner-box li');
  const boxlist=document.querySelectorAll('.dian-box li');
  
  let num=0;
  boxlist.forEach(function(ele,index){
            ele.onclick=function(){
                for(var i=0;i<boxlist.length;i++){
                    boxlist[i].classList.remove('active');
                    bannerlist[i].classList.remove('active');
                }
                boxlist[index].classList.add('active');
                bannerlist[index].classList.add('active');
            }
        })
  function move(){
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
}
  let st=setInterval(move,3000);


}

{
  let coleft=document.querySelector('.carousel');
  let zuohua=document.querySelector('.zuohua');
  let youhua=document.querySelector('.youhua');
  console.log(zuohua);
  console.log(youhua)
  let num=0;
  setInterval(function(){
    if(num==2){
      num=0;
    }
  coleft.style.marginLeft=-num*1226+'px';
  coleft.style.transition='all 1s';
  num++;
  },3000);
  youhua.onclick=function(){
    if(num===2){
      return;
    }
    coleft.style.marginLeft=-num*1226+'px';
    num++;
  }
  zuohua.onclick=function(){
    if(num===0){
         return;
    }
    coleft.style.marginLeft=-num*1226+'px';
    num--;
  }
  
}  