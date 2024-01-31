//----------------------🏳‍🌈setting-------------------------

gsap.registerPlugin(ScrollTrigger) 
gsap.registerPlugin(ScrollToPlugin)


//-----------------------🏳‍🌈lenis------------------------

const lenis = new Lenis({
   duration:1.2,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//---------------------🎃nav 영역------------------------

let nav_button=document.querySelector('.nav_button')
let nav=document.querySelector('.nav')
let tl=gsap.timeline()


nav_button.addEventListener('click',()=>{
   if(nav.classList.contains('on')){
      nav.classList.remove('on')
   }else{
      nav.classList.add('on')
      tl.from(".nav",{
         ease: "power1.inOut",
         duration:0.1,
      })
      tl.from(".nav span",{
         width:0,
         ease: "power3.inOut",
         duration:0.3,
      })
      tl.from(".nav_desc",{
         width:0,
         opacity:0,
         ease: "power3.inOut",
         duration:0.3,  
      })
   }
})

nav_button.addEventListener('click',()=>{
   nav_button.classList.toggle("on")
})

let nav_section=document.querySelectorAll('.nav_list a')
let nav_item=document.querySelectorAll('.nav_desc_item')

nav_section.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
      nav_item.forEach((e)=>{
         e.classList.remove('active');
      })
      nav_item[i].classList.add('active');
      gsap.fromTo(nav_item[i],{
         rotate:90,
         opacity:0
      },{
         duration:0.6,
         ease: "back.out(2)",
         rotate:0,
         opacity:1
      })
   })
})






/* ------------------------🎃text_scroll----------------------- */

let pTag1=document.querySelector('.first-parallel');
let pTag2=document.querySelector('.second-parallel');

let textArr1='MONSTER ENERGY MONSTER ENERGY'.split(' ');
//띄워쓰기를 기준으로 잘라서 배열로 만든다

let textArr2="TO BE MONSTER TO BE MONSTER".split(' ');


// let arr=[];
// console.log(...textArr1)//Welcome Hello Welcome Hello Welcome Hello Welcome Hello
// arr.push(...textArr1) //...textArr1 -->textArr1를 그대로 복사
// console.log(arr)

let count1=0;
let count2=0;

initTexts(pTag1,textArr1);
initTexts(pTag2,textArr2);

function initTexts(element, textArray){
    textArray.push(...textArray)//8개의 배열안의 아이템을 복사하여 다시 배열 뒤에 넣는다
    for(let i=0; i<textArray.length; i++){
        // &nbsp
        //    \u00A0  --> javaScript에서의 공백을 나타냄
        element.innerHTML += `${textArray[i]}\u00A0\u00A0`
    }
}


////////////////
function animate(){
    count1++;
    //console.log(count1)
    count2++;

    count1 = marqueeText(count1,pTag1,-1)
    count2 = marqueeText(count2,pTag2,1)

    window.requestAnimationFrame(animate)

    //setInterval--> 어떤 시간마다 할일
}
function marqueeText(count, element,direction){
    //.srollHeight --> 보이지 않는 공간이라도 공간이의 높이값//보이지 않는 공간일지라도 스크롤해서 확인할룻 있는 공간의 높이
    //.scrollWidth -->
   // console.log("element.scrollWidth"+ element.scrollWidth)
   // console.log("count"+count)
   if(count>element.scrollWidth/2){
    count=0;
    element.style.transform=`translate(0,0)`;
   }
   element.style.transform=`translate(${count * direction * 0.4}px,0)`;
     
   return count

}



animate()
// window.addEventListener('scroll',function(){
//     scrollHandler()
// })


//-------------------------------section2---------------------

// 복사할 노드 선택
for(i=0; i<14; i++){
   const boxListBox = document.querySelector('.box_list_box');
   const newNode = boxListBox.cloneNode(true);
   boxListBox.after(newNode);
}

let sec2= document.querySelector('.section2')
let sec2Container=document.querySelector('.section2_container')
let innerWidth=window.innerWidth;
let innerHeight=window.innerHeight
let box_main_content=document.querySelectorAll('.box_main_content')
let box_title=document.querySelectorAll('.box_title')
let box_text=document.querySelectorAll('.box_text')

sec2.addEventListener('mousemove',(e)=>{
   // console.log(e.clientX)
   let x = window.innerWidth/2 - e.clientX
   
   let y = window.innerHeight/2 - e.clientY
   
   sec2Container.style.transform=`translate(${x*0.5}px, ${y*0.5}px)`

},true)
/* sec2.addEventListener('mouseout',(e)=>{
 
   sec2Container.style.transform=`translate(0px, 0px)`

},true) */

function box_contents(){
   box_title[0].innerHTML="Enviromental"
   box_title[1].innerHTML="Social"
   box_title[2].innerHTML="Governance"
   box_title[3].innerHTML="R&D"
   box_title[4].innerHTML="Passion"
   box_title[5].innerHTML="With who"
   box_title[6].innerHTML="Taste"
   box_title[7].innerHTML="MONSTER"
   box_title[8].innerHTML="Flavor"
   box_title[9].innerHTML="Power"
   box_title[10].innerHTML="Health"
   box_title[11].innerHTML="History"
   box_title[12].innerHTML="Caffeine"
   box_title[13].innerHTML="Price"
   box_title[14].innerHTML="Legends"
   box_text[0].innerHTML="Eco-friendly process for a better environment"
   box_text[1].innerHTML="A thrilling experience that is equally given to everyone  "
   box_text[2].innerHTML="Honest management activities"
   box_text[3].innerHTML="Technology to improve customer value"
   box_text[4].innerHTML="An effort toward overflowing energy"
   box_text[5].innerHTML="With all the players around the world"
   box_text[6].innerHTML="Each unique new flavor"
   box_text[7].innerHTML="a companion on one's journey to legend"
   box_text[8].innerHTML="an overwhelming flavor that is full of personality"
   box_text[9].innerHTML="overwhelming power to succeed"
   box_text[10].innerHTML="It doesn't contain harmful ingredients"
   box_text[11].innerHTML="World-Loved Energy Drinks"
   box_text[12].innerHTML="a history written with legends"
   box_text[13].innerHTML="The best experience at a cheap price "
   box_text[14].innerHTML="You can be a legend, too"

}

function box_imgs(){

   box_main_content[0].style.background=`center/cover url(https://cdnb.artstation.com/p/assets/images/images/058/976/807/4k/massimo-verona-at-the-stream-ps-resized2.jpg?1675355444)`
   box_main_content[1].style.background=`center/cover url(https://cdna.artstation.com/p/assets/images/images/067/790/454/large/sylvain-sarrailh-danghost-street-food-market.jpg?1696255157)`
   box_main_content[2].style.background=`center/cover url(https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Femployee-owned-company.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.9183&fp-y=0.4406&h=415&q=88&w=622&s=a2c4208569c9b23a18e84955163f4478)`
   box_main_content[3].style.background=`center/cover url(https://nationaltoday.com/wp-content/uploads/2022/05/World-Laboratory-Day-1200x834.jpg)`
   box_main_content[4].style.background=`center/cover url(https://cdna.artstation.com/p/assets/images/images/011/287/390/large/anato-finnstark-lady-eboshi-mononoke-by-anatofinnstark-dce6jyv.jpg?1528814621)`
   box_main_content[5].style.background=`center/cover url(https://cdnb.artstation.com/p/assets/images/images/017/117/951/large/js-m-faker.jpg?1554723410)`
   box_main_content[6].style.background=`center/cover url(https://cdna.artstation.com/p/assets/images/images/010/640/008/large/sylvain-sarrailh-sunsetbridgeartstation.jpg?1525445450)`
   box_main_content[7].style.background=`center/cover url(https://cdnb.artstation.com/p/assets/images/images/055/337/425/large/blender-licious-monster-energy-4-waldboden-mond-ps.jpg?1666711666)`
   box_main_content[8].style.background=`center/cover url(https://cdna.artstation.com/p/assets/images/images/037/113/386/4k/ede-laszlo-kerek-asztal-tavolrol-final-lg.jpg?1619529894)`
   box_main_content[9].style.background=`center/cover url(https://cdnb.artstation.com/p/assets/images/images/059/294/679/4k/sebastian-luca-157-colombia-4725.jpg?1676051036)`
   box_main_content[10].style.background=`center/cover url(https://cdna.artstation.com/p/assets/images/images/058/506/292/large/samuel-kwadwo-monster-drink-dragon.jpg?1674318912)`
   box_main_content[11].style.background=`center/cover url(https://cdnb.artstation.com/p/assets/images/images/020/974/269/smaller_square/remy-m-f2cc4ff3-a5dc-4cf6-bc3c-9acf18dc6e67-rw-1920.jpg?1569892932)`
   box_main_content[12].style.background=`center/cover url(https://cdna.artstation.com/p/assets/covers/images/029/356/510/smaller_square/giorgio-bogni-giorgio-bogni-giorgio-bogni-daytona-rain.jpg?1597268697)`
   box_main_content[13].style.background=`center/cover url(https://cdna.artstation.com/p/assets/images/images/049/904/706/4k/jose-vega-final-painting.jpg?1653583370)`
   box_main_content[14].style.background=`center/cover url(https://cdna.artstation.com/p/assets/images/images/064/747/300/4k/sebastian-luca-daily-0241.jpg?1688650725)`

}   
box_contents()
box_imgs()

//-------------------------------section3---------------------





/* gsap.to(".section3 .intro_card",{
   startAt: {xPercent: -200},
   xPercent: -300,
   ease: "power3.inOut",
   scrollTrigger: {
     trigger: ".section3",
     markers: true,
     start: "60% top", // 상단에서 시작
     end: "80% top",
     toggleActions: "restart none none reverse ",
   // 상단에서 25% 지점에서 끝
   }
 })
gsap.to(".section3 .intro_card",{
   startAt: {xPercent: -100},
   xPercent: -200,
   duration:0.7,
   ease: "power3.inOut",
   scrollTrigger: {
     trigger: ".section3",
     markers: true,
     start: "40% top", // 상단에서 시작
     end: "60% top",
     toggleActions: "restart none none reverse ",
   // 상단에서 25% 지점에서 끝
   }
 })
 gsap.to(".section3 .intro_card", {
   startAt: {xPercent: 0},
   xPercent: -100,
   ease: "power3.inOut",
   scrollTrigger: {
     trigger: ".section3",
     markers: true,
     start: "20% top", // 상단에서 시작
     end: "40% top",
     toggleActions: "restart none none reset ",
   // 상단에서 25% 지점에서 끝
   }
 })

 */
 scrollFuc=()=>{
   setProperty();
   contentIn();
 }


 
 let scrollBody=document.querySelector('.section3')
 setProperty()

function setProperty(){
   scrollHeight=scrollBody.offsetHeight;
    //객체(fix_motion)의 높이
    
    scrollRealHeight=scrollHeight - window.innerHeight
    //마지막페이지 뺀 전체높이
    
   sectionOffsetTop=scrollBody.offsetTop;
   //객체의 top좌표

   winScrollTop=pageYOffset;
   sectionScrollTop=winScrollTop - sectionOffsetTop
   //화면top-객체top값
   // console.log(sectionScrollTop)//섹션 꼭대기 기준 탑값
   //↪ .fix_motion 기준 탑값 구하는 식

   scrollPercent=sectionScrollTop/scrollRealHeight
   percent=scrollPercent * 100 
   // console.log(percent)
} 

contentIn()
function contentIn(){
   let deviceImg = document.querySelectorAll('.card_box')
   let intro_desc=document.querySelectorAll('.intro_content')
   let imgWidth = deviceImg[0].offsetWidth //figure태그 하나의 넓이값
   let descWidth = intro_desc[0].offsetWidth //figure태그 하나의 넓이값
   let particle=document.querySelectorAll('.particle')
   if(percent>=12 && percent<37){
      imageChange(imgWidth*0)
      imageChange(descWidth*0)
      particle[0].style.opacity="1"
      particle[1].style.opacity="0"
      particle[2].style.opacity="0"
      particle[3].style.opacity="0"
   }
   if(percent>=37 && percent<62){
      imageChange(imgWidth*1)
      imageChange(descWidth*1)
      particle[0].style.opacity="0"
      particle[1].style.opacity="1"
      particle[2].style.opacity="0"
      particle[3].style.opacity="0"
   }
   if(percent>=62 && percent<88){
      imageChange(imgWidth*2)
      imageChange(descWidth*2)
      particle[0].style.opacity="0"
      particle[1].style.opacity="0"
      particle[2].style.opacity="1"
      particle[3].style.opacity="0"
   }
   if(percent>=88){
      imageChange(imgWidth*3)
      imageChange(descWidth*3)
      particle[0].style.opacity="0"
      particle[1].style.opacity="0"
      particle[2].style.opacity="0"
      particle[3].style.opacity="1"
   }
   if(percent<12 ){
     
   }
}

function imageChange(movex){
   let img=document.querySelector('.intro_card')
   let desc=document.querySelector('.intro_desc')
   img.style.transform=`translateX(${-movex}px)`
   desc.style.transform=`translateX(${movex}px)`
}
window.addEventListener("scroll",()=>{
   scrollFuc()
})
scrollFuc()

//---------------------------------section4---------------------------
let port_desc=document.querySelector('.port_desc')
let container = document.querySelectorAll('.port_desc .port')
let overlay = document.querySelectorAll('.overlay')
let glare = document.querySelectorAll('.glare')
let port_title=document.querySelector('.port_title')
let port_tit_top=port_title.offsetTop
let port_tit_bottom=port_tit_top+port_title.offsetHeight
let scroll_start = port_tit_top
let scroll_end = port_tit_bottom - window.innerHeight*0.8

/* window.addEventListener('scroll',()=>{
   console.log(scroll_end)


   if(scroll_start<window.pageYOffset && window.pageYOffset<scroll_end){
      port_title.style.position="fixed"
   }else if(window.pageYOffset>=scroll_end){
      port_title.style.position="relative"
      port_title.style.top=`${scroll_end}px`
   }
   else{
      port_title.style.position="static"
   }
})

 */
const fix=gsap.to(port_title,{
   position:"fixed",
   scrollTrigger:{
     trigger:'.port_desc',
     start:'top 20%',
     end:'+=5000',
     toggleActions: "restart reset restart reset ",
   }
 })
const horiz=gsap.to(port_desc,{
   // x:(- 99 * (horSection.length - 2))+"%",
   x: - port_desc.offsetWidth + (container[0].offsetWidth * 8),
   scrollTrigger:{
     trigger:'.port_desc',
     start:'top 20%',
     end:'+=5000',   //애니가 시작되는 지점에서 5000px 떨어진 지점
     markers:false,
     scrub:1, //관성 수치 높을수록 미끄러짐
     pin:true,
 
   }
 },"<")
// -----------------카드 효과---------------------

 container.forEach((e,i )=>{
   e.addEventListener('mousemove', function(item){
      let x = item.offsetX
      let width=e.offsetWidth
      let percentX=x/width * 100
      let y = item.offsetY
      let height=e.offsetHeight
      let percentY=y/height * 100
      let rotateY = -2/5 * percentX + 20
      let rotateX = -2/5 * percentY + 20
      
      overlay[i].style = `background-position : ${x*2 /5 + y*2 /5}%; filter : opacity(${percentX/100}) brightness(0.7)`
      
      glare[i].style = `background-image: radial-gradient( farthest-corner circle at  ${percentX}% ${percentY}% , hsla(0, 0%, 100%, 0.8) 10%, hsla(0, 0%, 100%, 0.65) 20%, hsla(0, 0%, 0%, 0.5) 90% ); `
      
      e.style = `transform : perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) `   
   })
   e.addEventListener('mouseout', function(item){
      overlay[i].style = 'filter : opacity(0)'  
      e.style = 'transform : perspective(400px) rotateY(0deg) rotateX(0deg)'
    })
})

  
//------------------------------🎃section5--------------------------

//이메일
let email=document.querySelector('#email');

//제목
let Subject=document.querySelector('#Subject')

//메세지
let message=document.querySelector('#message');

//에러
let error=document.querySelectorAll('.error_next_box');
let pwMsg=document.querySelector('#alertTxt')

//버튼
let submit_button=document.querySelector('#btnJoin')


email.addEventListener('focusout',checkemail)
Subject.addEventListener('focusout',checkTitle)
message.addEventListener('focusout',isMessageCorrect)
let emailPattern=/^[a-zA-Z0-9_-]{5,20}$/

function checkemail(){
   // console.log(idPattern.test(id.value))
   if(email.value===""){
      error[0].innerHTML="Required information.";
      error[0].style.opacity=1;
      error[0].style.color="#f24343";
   }else if(!emailPattern.test(email.value)){
      error[0].innerHTML="Check the email format.";
      error[0].style.opacity=1;
      error[0].style.color="#f24343";
   }else{
      error[0].style.opacity=0;
      error[0].style.color="#80a600";

   }
}

let namePattern=/^[a-zA-Z0-9_-가-힣\!\?\@\#\$\%\^\&\*]{4,20}$/;

function checkTitle(){
   if(Subject.value ===""){
      error[1].style.opacity=1;
      error[1].innerHTML="Required information."
      error[1].style.color="#f24343"
   }else if(!namePattern.test(Subject.value) || Subject.value.indexOf(" ")>-1){
      error[1].style.opacity=1;
      error[1].innerHTML="Please write between 4 and 20 letters."
      error[1].style.color="#f24343"
   }else{
      error[1].style.opacity=0;
   }
 }
 let messagePattern=/^[a-zA-Z0-9_-가-힣\!\?\@\#\$\%\^\&\*]{5,200}$/;

 function isMessageCorrect(){
   if(message.value ===""){
      error[2].style.opacity=1;
      error[2].innerHTML="Required information."
      error[2].style.color="#f24343"
   }else if(!messagePattern.test(message.value) || message.value.indexOf(" ")>-1){
      error[2].style.opacity=1;
      error[2].innerHTML="This message is too short"
      error[2].style.color="#f24343"
   }else{
      error[2].style.opacity=0;
   }
}

let thx_wrap=document.querySelector('.thx_wrap')
let okay_button=document.querySelector('.close_button')

submit_button.addEventListener('click',()=>{
   console.log(messagePattern.test(message.value))
   if(emailPattern.test(email.value)&&namePattern.test(Subject.value)&&messagePattern.test(message.value)){

      thx_wrap.style.display="flex"
   }
})
okay_button.addEventListener('click',()=>{
 
   thx_wrap.style.display="none"
})



// --------------------------------footer---------------------------
let footer_video = document.querySelector('#footer_video')



//--------------------------snap--------------------------
