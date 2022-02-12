// handle slideUp Div
let slideSpan = document.querySelector('.click-up-btn');
let sliderDiv = document.querySelector('.data-wrapper-slideup');
let slideDivBody = document.querySelector('.wrap');
let downLink = document.querySelector('.down-link');

slideSpan.addEventListener('click',e=>{
    e.preventDefault();
    let screenWidth = screen.width;
    if(screenWidth > 400 && screenWidth < 700){
        console.log('ht')
        sliderDiv.classList.toggle('slide-down-small');
    }
    else if(screenWidth < 400){
        sliderDiv.classList.toggle('slide-down-xsmall');
    }
    else{
        sliderDiv.classList.toggle('slide-down');
    }
    downLink.classList.toggle('rotateZ180');
});


fetch('https://weatherdbi.herokuapp.com/data/weather/delhi')
.then(response=>response.json())
.then(data=>console.log(data));



// api call is not added since this is not a full stack project
// same project will be made using MERN stack in the near future.
// then a full implementation of this app will be taken place.