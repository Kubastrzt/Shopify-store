var x
var y

window.onerror = function(message, url, lineNumber) {  
    return true; 
};

function scroller() {
    var elmnt = document.querySelector(".slider-inner")
    x = elmnt.scrollLeft
    var stala=100;
    var viewportWidth=window.innerWidth;
    const dots= document.querySelectorAll('.slide-dots')
    dots[0].classList.add('dots-addon')
    for(var sliderLength=1;sliderLength<=dots.length;sliderLength++)
    {
        if(x>stala){
            dots[sliderLength-1].classList.remove('dots-addon')
            dots[sliderLength].classList.add('dots-addon')
        }
        else if(stala>x){
            dots[sliderLength].classList.remove('dots-addon')
        }
        stala+=viewportWidth;
    }
  }

window.setInterval('scroller()',100)



const slider = document.querySelector('.slider')
const slide = document.querySelector('.slider-inner')

let clicked = false 
let startingPoint
let z

slider.addEventListener('mousedown', (e)=>{
    if(window.innerWidth>=1458){

        clicked = true;
        startingPoint = e.offsetX - slide.offsetLeft;
        slider.style.cursor = 'grabbing'
    }
    else return
})

slider.addEventListener('mouseenter', ()=>{
    if(window.innerWidth>=1458){
    slider.style.cursor = 'grab'
    }
    else return
})

slider.addEventListener('mouseup', ()=>{
    if(window.innerWidth>=1458){
    slider.style.cursor = 'grab'
    }
    else return
})

window.addEventListener('mouseup', ()=>{
    if(window.innerWidth>=1458){
    clicked= false
    }
    else return
})

slider.addEventListener('mousemove', (e)=>{
    if(window.innerWidth>=1458){
        if(!clicked) return
        e.preventDefault()
        z = e.offsetX
        slide.style.left = `${z - startingPoint}px`

        checkboundary()
    }
    else return
})

function checkboundary(){
    let outer = slider.getBoundingClientRect()
    let inner = slide.getBoundingClientRect()
    if(parseInt(slide.style.left)> 0 ){
        slide.style.left = '0px'
    }
    else if(inner.right < outer.right){
        slide.style.left = `-${inner.width -outer.width}px`
    }
}