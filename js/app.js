const $ = document

const surface = $.querySelector('.surface')
const car = $.querySelector('.car')
const carImg = $.querySelector('.car img')
const music = $.querySelector('audio')

let isLightOn = true


window.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter'){
        surface.classList.toggle('moveRight')
        car.classList.toggle('carMove')
    }
    if(e.code === 'Space'){
        if(isLightOn){
            carImg.setAttribute('src' , './images/Img_05.png')
            isLightOn = false
            music.pause()
        }else{
            carImg.setAttribute('src' , './images/Img_06.png')
            isLightOn = true
            music.play()
        }
    }
})
 

//  for mobile

window.addEventListener('load' , () => {
  const Width = document.body.clientWidth
 if (Width < 1000) {
    
    surface.classList.toggle('moveRight')
    car.classList.toggle('carMove')

    window.addEventListener('click' , () => {
        if(isLightOn){
            carImg.setAttribute('src' , './images/Img_05.png')
            isLightOn = false
            music.pause()
        }else{
            carImg.setAttribute('src' , './images/Img_06.png')
            isLightOn = true
            music.play()
        }
    })
 }
})