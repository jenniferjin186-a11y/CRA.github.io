// 顶部滚动阴影
window.addEventListener('scroll',()=>{
  const header=document.querySelector('header');
  if(window.scrollY>50){
    header.style.boxShadow="0 6px 30px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow="0 2px 20px rgba(0,0,0,0.05)";
  }
});

// 数字递增动画
const counters=document.querySelectorAll('.stat h2');
counters.forEach(counter=>{
  let started=false;
  const runCounter=()=>{
    if(started) return;
    started=true;
    const target=parseInt(counter.innerText.replace('+',''));
    let count=0;
    const step=()=>{
      count += target/80;
      if(count<target){
        counter.innerText=Math.ceil(count)+'+';
        requestAnimationFrame(step);
      } else {
        counter.innerText=target+'+';
      }
    }
    step();
  };
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        runCounter();
      }
    });
  });
  observer.observe(counter);
});
