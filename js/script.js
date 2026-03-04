// 卡片淡入
const cards=document.querySelectorAll('.card');
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){entry.target.classList.add('show');}
});
});
cards.forEach(card=>observer.observe(card));

// 数字递增
const counters=document.querySelectorAll('.stat h2');
counters.forEach(counter=>{
let started=false;
const runCounter=()=>{
if(started) return;
started=true;
const target=+counter.innerText.replace('+','');
let count=0;
const step=()=>{
count += target/100;
if(count<target){
counter.innerText=Math.ceil(count)+'+';
requestAnimationFrame(step);
}else{counter.innerText=target+'+';}
}
step();
}
const statObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{if(entry.isIntersecting){runCounter();}});
});
statObserver.observe(counter);
});

// 导航滚动阴影
window.addEventListener('scroll',()=>{
const header=document.querySelector('header');
if(window.scrollY>50){header.style.boxShadow="0 6px 30px rgba(0,0,0,0.08)";}
else{header.style.boxShadow="0 2px 15px rgba(0,0,0,0.04)";}
});
