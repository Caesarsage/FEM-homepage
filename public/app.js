const scrollBack = document.querySelector('#scroll-back');
const scrollForward = document.querySelector('#scroll-forward');

let bg = document.querySelector('#bg');
let bgInfo = document.querySelector('#bg-info');
scrollForward.addEventListener('click', ()=>{  
  console.log(bg);
  if (bg.classList.contains('bg-hero-4') || bg.classList.contains('md:bg-hero-1')) {
    productOne('bg-hero-4', 'md:bg-hero-1',bgInfo)
  }else if (bg.classList.contains('bg-hero-5') || bg.classList.contains('md:bg-hero-2')) {
    productTwo('bg-hero-5','md:bg-hero-2',bgInfo)
  }else if (bg.classList.contains('bg-hero-6') || bg.classList.contains('md:bg-hero-3')){
   productThree('bg-hero-6', 'md:bg-hero-3', bgInfo)
  }
});

scrollBack.addEventListener('click', ()=>{
  if (bg.classList.contains('bg-hero-6') || bg.classList.contains('md:bg-hero-3')) {
    productThree('bg-hero-6', 'md:bg-hero-3', bgInfo)
  }else if (bg.classList.contains('bg-hero-5') || bg.classList.contains('md:bg-hero-2')) {
    productTwo('bg-hero-5','md:bg-hero-2',bgInfo)
  }else if(bg.classList.contains('bg-hero-4') || bg.classList.contains('md:bg-hero-1')){
    productOne('bg-hero-4', 'md:bg-hero-1',bgInfo)
  }
})

const productOne = (x,y,z)=>{
    bg.classList.remove(x);
    bg.classList.remove(y);
    bg.classList.add('md:bg-hero-2');
    bg.classList.add('bg-hero-5');
    z.children[1].innerText =  ` We are available all across the globe`
    z.children[2].innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
}

const productTwo = (x,y,z)=>{
  bg.classList.remove(x);
  bg.classList.remove(y);
  bg.classList.add('md:bg-hero-3');
  bg.classList.add('bg-hero-6');
  z.children[1].innerText = ` Manufactured with the best materials `
  z.children[2].innerText = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`
}
const productThree = (x,y,z)=>{
  bg.classList.remove(x);
  bg.classList.remove(y);
  bg.classList.add('md:bg-hero-1');
  bg.classList.add('bg-hero-4');
  z.children[1].innerText = `  Discover innovative ways to decorate `
  z.children[2].innerText = `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`
}