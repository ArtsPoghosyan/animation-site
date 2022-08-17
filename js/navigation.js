function scrol(px){
    if(window.innerWidth > 990){
        window.scrollTo({
            top: px,
            left: 0,
            behavior: "smooth",
        });
    }else if(window.innerWidth > 250){
        var setPx  = 0;
        if(px === 600){
            setPx = 1300;
        }else if(px === 1400){
            setPx = 2300;
        }else if(px === 3100){
            setPx = 3500;
        }else if(px === 4600){
            setPx = 6500;
        }else if(px === 5350){
            setPx = 7200;
        }

        window.scrollTo({
            top: setPx,
            left: 0,
            behavior: "smooth",
        });
    }
    
}

function navigation(id){
    const a = document.getElementsByClassName("navBar");
    const navItems = document.getElementsByClassName("navItems");
    a[0].classList.add("navBarActive");

    for(let i = 0; i < navItems.length; i++){
        if(i === id){
            navItems[i].classList.add("active");
        }else{
            navItems[i].classList.remove("active");
        }
    }
}

let bolean = false;

function mobileNav(){
    if(bolean){
        const navDivMobile = document.getElementsByClassName("navDivMobile");
        const divHero = document.getElementsByClassName("divHero");
        const burgerClose = document.getElementsByClassName("burgerClose1");
        const bug = document.getElementsByClassName("bug");

        burgerClose[0].classList.remove("burgerClose");
        bug[0].classList.add("burger");
        divHero[0].classList.remove("burgerActive");
        navDivMobile[0].classList.remove("navDivMobileActive");
    }else{
        const navDivMobile = document.getElementsByClassName("navDivMobile");
        const divHero = document.getElementsByClassName("divHero");
        const burgerClose1 = document.getElementsByClassName("burgerClose1");
        const bug = document.getElementsByClassName("bug");

        bug[0].classList.remove("burger");
        burgerClose1[0].classList.add("burgerClose");
        divHero[0].classList.add("burgerActive");
        navDivMobile[0].classList.add("navDivMobileActive");
    }
    bolean = !bolean;
}