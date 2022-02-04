// UI
// start header

// start nav
const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{
    let scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly > 300 ){
        nav.classList.add("active");
    }else {
        nav.classList.remove("active");
    }
});

// end nav

// start banner
const slides = document.querySelectorAll('.slide');

const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');


let activeindex = 0;

function slideactive(){
    removeactive();

    slides[activeindex].classList.add('active');
}

function removeactive(){
    slides.forEach(slide=>{
        slide.classList.remove('active');
    })
}

leftbtn.addEventListener('click',()=>{
    // console.log('left');
    if(activeindex === 0){
        activeindex = slides.length - 1;
    }else {
        activeindex--;
    }

    // console.log(activeindex);
    slideactive();

});

rightbtn.addEventListener('click',()=>{
    // console.log('right');
    if(activeindex === slides.length - 1){
       activeindex = 0;
    }else{
        activeindex++;
    }

    // console.log(activeindex);
    slideactive();

});
// end banner

// end header

// start store section
const psbth = document.getElementById('ps'),
    xboxbtn = document.getElementById('xbox');

const pscontent = document.querySelector('.ps'),
    xboxcontent = document.querySelector('.xbox');

const psimg = document.querySelector('.psimg'),
    xboximg = document.querySelector('.xboximg');

console.log(pscontent);

psbth.addEventListener('click',()=>{
    xboxbtn.classList.remove("active");
    psbth.classList.add("active");
    xboxcontent.style.display = "none";
    pscontent.style.display = "block";
    xboximg.style.display = "none";
    psimg.style.display = "flex";
})

xboxbtn.addEventListener('click',()=>{
    psbth.classList.remove('active');
    xboxbtn.classList.add('active');
    pscontent.style.display = "none";
    xboxcontent.style.display = "block";
    psimg.style.display = "none";
    xboximg.style.display = "flex";
})

console.log("hey");


// end store section

