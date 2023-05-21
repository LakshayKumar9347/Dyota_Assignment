const scrollHome = document.querySelectorAll('.nav-link-scroll1')
scrollHome.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll1') 
    el.scrollIntoView({behavior:"smooth",block:"start"}) 
  })
})

const scrollAbout = document.querySelectorAll('.nav-link-scroll2')
scrollAbout.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll2') 
    el.scrollIntoView({behavior:"smooth"}) 
  })
})

const scrollServices = document.querySelectorAll('.nav-link-scroll3')
scrollServices.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll3') 
    el.scrollIntoView({behavior:"smooth"}) 
  })
})

const scrollShowcase = document.querySelectorAll('.nav-link-scroll4')
scrollShowcase.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll4') 
    el.scrollIntoView({behavior:"smooth"}) 
  })
})

const scrollContact = document.querySelectorAll('.nav-link-scroll5')
scrollContact.forEach((item)=>{
  item.addEventListener('click',()=>{
    let el = document.getElementById('scroll5') 
    el.scrollIntoView({behavior:"smooth"}) 
  })
})
