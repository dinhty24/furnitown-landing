const PAGE = $("body").attr("data-page");



if (PAGE === "homepage"){

}


if (PAGE === "projectdetail"){
    const btnTabItem =  document.querySelectorAll('.btn__tabItem')
    console.log(btnTabItem);
    const tabItem = document.querySelectorAll('.tab__item')
    console.log(tabItem);

    const menuScrolll=document.querySelector('.menu__scroll')
    const navMainn = document.querySelector('.nav__main')
    
    const navMenu=document.querySelector('.nav__menu')
    const closeMenu=document.querySelector('.close-icon')
    menuScrolll.addEventListener('click',function(e){
        e.stopPropagation();
        navMainn.classList.toggle('active')
    })
    closeMenu.addEventListener('click',function(e){
        console.log(closeMenu)
        e.stopPropagation();
            navMainn.classList.remove('active')
    })  

    btnTabItem.forEach(function(btn, index){
        btn.addEventListener('click', function(){
            let tabID = index + 1
            btnTabItem.forEach(xoanut => (
                xoanut.classList.remove('active')
            ))
            tabItem.forEach((tabItem) => {
                tabItem.classList.remove('active')
            })
            btn.classList.add('active')
            document.querySelector(`.tab__project-${tabID}`).classList.add('active')
        })
    })
}

if(PAGE ==="newswp")
{
    const btnTabItem =  document.querySelectorAll('.btn__tabItem')
    console.log(btnTabItem);
    const tabItem = document.querySelectorAll('.tab__item')
    console.log(tabItem);
        const menuScrolll=document.querySelector('.menu__scroll')
    const navMainn = document.querySelector('.nav__main')

    const navMenu=document.querySelector('.nav__menu')
    const closeMenu=document.querySelector('.close-icon')
    menuScrolll.addEventListener('click',function(){
        navMainn.classList.toggle('active')
        

        

    })
    closeMenu.addEventListener('click',function(){
        console.log(closeMenu)
            navMainn.classList.remove('active')
    })

    btnTabItem.forEach(function(btn, index){
        btn.addEventListener('click', function(){
            let tabID = index + 1
            btnTabItem.forEach(xoanut => (
                xoanut.classList.remove('active')
            ))
            tabItem.forEach((tabItem) => {
                tabItem.classList.remove('active')
            })
            btn.classList.add('active')
            document.querySelector(`.tab__project-${tabID}`).classList.add('active')
        })
    })
}
if(PAGE ==="service"){
    const menuScroll=document.querySelector('.menu__scroll')
    const navMain = document.querySelector('.nav__main')

    const navMenu=document.querySelector('.nav__menu')
    const closeMenu=document.querySelector('.close-icon')
    menuScroll.addEventListener('click',function(){
        navMain.classList.toggle('active')      
    })
    closeMenu.addEventListener('click',function(){
        console.log(closeMenu)
            navMain.classList.remove('active')
    })
}

if(PAGE ==="wpcontact"){
    const menuScroll=document.querySelector('.menu__scroll')
    const navMain = document.querySelector('.nav__main')

    const navMenu=document.querySelector('.nav__menu')
    const closeMenu=document.querySelector('.close-icon')
    menuScroll.addEventListener('click',function(){
        navMain.classList.toggle('active')    
    })
    closeMenu.addEventListener('click',function(){
        console.log(closeMenu)
            navMain.classList.remove('active')
    })

}

const backToTop=document.querySelector('.back')
backToTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior :'smooth'
    })
})

const menuMb=document.querySelector('.menu__mobiles')
const iconMenu=document.querySelector('.icon__menu-mobile')
const exit=document.querySelector('.exit')
 iconMenu.addEventListener('click',function(){
    menuMb.classList.toggle('active')
    exit.addEventListener('click',function(){
        menuMb.classList.remove('active')
    })
 })



const header=document.querySelector('header')
window.addEventListener('scroll',function(){
    // e.stopPropagation();

    let positionY = window.pageYOffset;
    if(positionY > 70){
        header.classList.add('active')
    }else{
        header.classList.remove('active')

    }
})


const iconMenuSmall=document.querySelector('.icon__menu-small')
const icon_menu= document.getElementsByClassName('.icon__menu-small')

// active-Menu

const clickMenu = document.querySelector('.menu__main')
const navMain = document.querySelector('.nav__main')
const closeIcon = document.querySelector('.close-icon')

const iconMenuMbile = document.querySelector('header .icon__menu-mobile')
const menuScroll= document.querySelector('.menu__scroll')
iconMenuMbile.addEventListener('click', function(){
    console.log('click...');
    navMain.classList.add('active')
})

clickMenu.addEventListener('click', function(e){
    e.stopPropagation();
    navMain.classList.add('active')
})

closeIcon.addEventListener('click', function(e){
    e.stopPropagation();
    navMain.classList.remove('active')
})



// const root = document.querySelector('.root')

// let newData;

// async function goiApi(){
//     await fetch("https://62d4e0b9cd960e45d45cfd64.mockapi.io/api/data")
//     .then(function(res){
//       return res.json()
//     } )
//     .then(function(data){
//       if(data){
//           newData = data
//       }
//     }
//   )
// }
const menuMain=document.querySelector('.menu__main')
const iconMenuMobile = document.querySelector('.icon__menu')
const menuMobile = document.querySelector('.menu__mobile')
console.log(menuMobile);

iconMenuMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('active')
})
const items = document.querySelectorAll('.nav__main');

items .forEach(item => {
  item.addEventListener("click", function() {   
   items .forEach(a=>{
      a.classList.remove("active");
      a.style.display = 'none'; 
    });
     item.classList.add("active");
     item.style.display = 'block'; 
    
  });  
});

// console.log(newData);
// const html = newData.map((item) => (`<h1>${item.title}</h1>`))

// root.appendChild(html)
const lienHe=document.querySelectorAll('.contact-product p')
lienHe.forEach(function(contact){
    contact.addEventListener('click',function(){
        lienHe.forEach(function(moi){
            moi.classList.remove('active')
        })
        contact.classList.add('active')
    })
})
const btnTabItem =  document.querySelectorAll('.btn__tabItem')
console.log(btnTabItem);
const tabItem = document.querySelectorAll('.tab__item')
console.log(tabItem);


btnTabItem.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        let tabID = index + 1
        btnTabItem.forEach(xoanut => (
            xoanut.classList.remove('active')
        ))
        tabItem.forEach((tabItem) => {
            tabItem.classList.remove('active')
        })
        btn.classList.add('active')
        document.querySelector(`.tab__project-${tabID}`).classList.add('active')
    })
})
// const lienHe=document.querySelectorAll('.lienhe')
// lienHe.forEach(function(lien){
//     lien.addEventListener('click',function(){
//       lienHe.forEach(function(sau){
//         sau.classList.add('active')
//       })  
//     lien.classList.remove('active')
//     })
// })
// const menuScrolll=document.querySelector('.menu__scroll')
// const navMainn = document.querySelector('.nav__main')

// const navMenu=document.querySelector('.nav__menu')
// const closeMenu=document.querySelector('.close-icon')
// menuScrolll.addEventListener('click',function(e){
//     e.stopPropagation();
//     navMainn.classList.toggle('active')
// })
// closeMenu.addEventListener('click',function(e){
//     console.log(closeMenu)
//     e.stopPropagation();
//         navMainn.classList.remove('active')
// })