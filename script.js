const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentSlide = 1
next.addEventListener('click',()=>{
    currentSlide++;

    if(currentSlide > circles.length){
        currentSlide=circles.length;
    }
    // console.log(currentSlide)
    update()
})

prev.addEventListener('click',()=>{
    currentSlide--;

    if(currentSlide < 1){
        currentSlide=1;
    }
    // console.log(currentSlide)
    update()
})

function update(){
    circles.forEach((circle,idx)=>{
        if(currentSlide > idx){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    actives.forEach((active)=>{
        // console.log(active)
        // console.log((currentSlide -1)/(circles.length-1)*100)
        progress.style.width = ((currentSlide -1)/(circles.length-1))*100 +'%'
    })

    if(currentSlide == 1){
        prev.disabled = true
       
    }else if(currentSlide == circles.length){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }
}

