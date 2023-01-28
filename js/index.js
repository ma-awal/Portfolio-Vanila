 
// sticky nav
 const myNav=document.querySelector('.header_nav')
 window.addEventListener('scroll',()=>{
   if(window.scrollY>myNav.offsetHeight+150){
    myNav.classList.add("show-nav")
   }else{
    myNav.classList.remove("show-nav")
   }
 })

 
 
 