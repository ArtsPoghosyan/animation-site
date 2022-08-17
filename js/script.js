let numEfect = true;
addEventListener('scroll', (event) => {
    if(window.innerWidth > 990){
        if(window.scrollY > 45 && window.scrollY < 299){
            navigation(0);
            const scrollTopItem = document.getElementsByClassName("scrollTopItem");
            scrollTopItem[0].classList.remove("scrollTopActive");
            scrollTopItem[0].classList.add("scrollTopBlock");
        }else if(window.scrollY < 44){
            const a = document.getElementsByClassName("navBar");
            a[0].classList.remove("navBarActive");
        }else if(window.scrollY > 300 && window.scrollY < 899){
            navigation(1);
            if(numEfect){
                const num = document.getElementsByClassName("num");
                num[0].classList.add("number");
                num[1].classList.add("number");
                numEfect = !numEfect;
                setTimeout(()=>{
                    $('.number').easy_number_animate({
                        start_value: 0,
                        end_value: 1234,
                        duration: 1000,
                    });
                }, 300); 
            }
            scrollTopItemHiden();
            
        }else if(window.scrollY > 1200 && window.scrollY < 2699){
            navigation(2);
            scrollTopItemHiden();
        }else if(window.scrollY > 2700 && window.scrollY < 4399){
            navigation(3);
            scrollTopItemHiden();
        }else if(window.scrollY > 4400 && window.scrollY < 5099){
            navigation(4);
            scrollTopItemHiden();
        }else if(window.scrollY > 5100 && window.scrollY < 7350){
            navigation(5);
            scrollTopItemHiden();
        }
    }else{
        if(window.scrollY > 0 && window.scrollY < 300){
            const scrollTopItem = document.getElementsByClassName("scrollTopItem");
            scrollTopItem[0].classList.remove("scrollTopActive");
            scrollTopItem[0].classList.add("scrollTopBlock");
        }else{
            scrollTopItemHiden();
        }
    }
});

let autoSliderCount = 1;
let isAutoSlider = true;
let timeoutAutoSlider;

autoSlider();

function autoSlider(){
    if(isAutoSlider){
        slider(autoSliderCount, false);
        if(autoSliderCount + 1 > 5){
            autoSliderCount = 1;
        }else{
            autoSliderCount++;
        }
        timeoutAutoSlider = setTimeout(()=>{
            autoSlider();
        }, 2000);
    }else{
        isAutoSlider = true;
        timeoutAutoSlider = setTimeout(()=>{
            autoSlider();
        }, 1000);
    }
}

function slider(id, path){
    if(path === true){
        isAutoSlider = false;
        autoSliderCount = id;
        if(timeoutAutoSlider !== undefined){
            clearTimeout(timeoutAutoSlider);
            timeoutAutoSlider = undefined;
            autoSlider();
        }else{
            autoSlider();
        }
    }

    const slidBtn = document.getElementsByClassName("sliderBtn");
    const slidBlock = document.getElementsByClassName("slides");
    slidBlock[0].classList = ["slides"];
    slidBlock[0].classList.add(`slides${id}`);
    for(let i = 0; i < slidBtn.length; i++){
        if((i + 1) === id){
            slidBtn[i].classList.add("sliderActive");
        }else{
            slidBtn[i].classList.remove("sliderActive");
        }
    }
}

let autoSliderCount2 = 1;
let isAutoSlider2 = true;
let timeoutAutoSlider2;

autoSlider2();

function autoSlider2(){
    if(isAutoSlider2){
        slider2(autoSliderCount2, false);
        if(autoSliderCount2 + 1 > 5){
            autoSliderCount2 = 1;
        }else{
            autoSliderCount2++;
        }
        timeoutAutoSlider2 = setTimeout(()=>{
            autoSlider2();
        }, 2000);
    }else{
        isAutoSlider2 = true;
        timeoutAutoSlider2 = setTimeout(()=>{
            autoSlider2();
        }, 1000);
    }
}

function slider2(id, path){
    if(path === true){
        isAutoSlider2 = false;
        autoSliderCount2 = id;
        if(timeoutAutoSlider2 !== undefined){
            clearTimeout(timeoutAutoSlider2);
            timeoutAutoSlider2 = undefined;
            autoSlider2();
        }else{
            autoSlider2();
        }
    }

    const slidBtn = document.getElementsByClassName("sliderBtn2");
    const slidBlock = document.getElementsByClassName("slides");
    slidBlock[1].classList = ["slides"];
    slidBlock[1].classList.add(`slides${id}`);
    for(let i = 0; i < slidBtn.length; i++){
        if((i + 1) === id){
            slidBtn[i].classList.add("sliderActive");
        }else{
            slidBtn[i].classList.remove("sliderActive");
        }
    }
}

var sliderFiel = 2;
var id;


function sliderNext(){
    const slidhiden = document.getElementsByClassName("slidhiden");
    const sliderItems = document.getElementsByClassName("sliderItem");
    slidhiden[0].classList = ["slidhiden"];
    slidhiden[0].classList.add(`slidhiden${sliderFiel + 1}`);
    if(id !== undefined){
        clearTimeout(id);
        id = undefined;
        sliderItems[2].classList.add("sliderActiveItem");
        slidhiden[0].classList.remove(`slidhiden5`);
        slidhiden[0].classList.add(`slidhiden11`);
        slidhiden[0].classList.remove(`slidhiden11`);
        sliderItems[6].classList.remove("sliderActiveItem");
    } 
    sliderItems[sliderFiel].classList.remove("sliderActiveItem");
    sliderItems[(sliderFiel + 1) > 5 ? 6 : (sliderFiel + 1)].classList.add("sliderActiveItem");
    if(sliderFiel > 4){
        id = setTimeout(()=>{
            sliderItems[2].classList.add("sliderActiveItem");
            slidhiden[0].classList.remove(`slidhiden5`);
            slidhiden[0].classList.add(`slidhiden11`);
            sliderItems[6].classList.remove("sliderActiveItem");
        }, 500);
    }
    if(sliderFiel < 5){
        sliderFiel = sliderFiel + 1;
    }else{
        sliderFiel = 2;
    }
    
}


function sliderBack(){
    const slidhiden = document.getElementsByClassName("slidhiden");
    const sliderItems = document.getElementsByClassName("sliderItem");
    slidhiden[0].classList = ["slidhiden"];
    slidhiden[0].classList.add(`slidhiden${sliderFiel - 1}`);
    if(id !== undefined){
        clearTimeout(id);
        id = undefined;
        sliderItems[5].classList.add("sliderActiveItem");
        slidhiden[0].classList.remove(`slidhiden1`);
        slidhiden[0].classList.add(`slidhiden00`);
        slidhiden[0].classList.remove(`slidhiden00`);
        sliderItems[1].classList.remove("sliderActiveItem");
    }
    sliderItems[sliderFiel].classList.remove("sliderActiveItem");
    sliderItems[(sliderFiel - 1) < 2 ? 1 : (sliderFiel - 1)].classList.add("sliderActiveItem");
    if((sliderFiel - 1) < 2){
        id = setTimeout(()=>{
            sliderItems[5].classList.add("sliderActiveItem");
            slidhiden[0].classList.remove(`slidhiden1`);
            slidhiden[0].classList.add(`slidhiden00`);
            sliderItems[1].classList.remove("sliderActiveItem");
        }, 500);
    }
    if(sliderFiel > 2){
        sliderFiel = sliderFiel - 1;
    }else{
        sliderFiel = 5;
    }
}
 

function scrollTopItemHiden(){
    const scrollTopItem = document.getElementsByClassName("scrollTopItem");
    scrollTopItem[0].classList.remove("scrollTopBlock");
    scrollTopItem[0].classList.add("scrollTopActive");
}