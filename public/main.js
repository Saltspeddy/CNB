let slide = document.querySelector("#slide");
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let k = 1;

function leftSlide(){
    if(k != 1){
        slide.style.transform = "translateX("+ (k-2)*-100 +"vw)"; 
        k--;
        for(let i = 1 ; i <= 5 ; i++){
            if( k === i ){
                document.querySelector("#i"+i).style.opacity = "0.8";
            }
            else{
                document.querySelector("#i"+i).style.opacity = "0.5";
            }
        }
    }
    else{
        slide.style.transform = "translateX(-400vw)";
        k = 5;
        document.querySelector("#i5").style.opacity = "0.8";
        document.querySelector("#i1").style.opacity = "0.5";
    }
}
function rightSlide(){
    if(k != 5){
        slide.style.transform = "translateX("+ k*-100 +"vw)";
        k++;
        for(let i = 1 ; i <= 5 ; i++){
            if( k === i ){
                document.querySelector("#i"+i).style.opacity = "0.8";
            }
            else{
                document.querySelector("#i"+i).style.opacity = "0.5";
            }
        }
    }
    else{
        slide.style.transform = "translateX(0vw)";
        k = 1;
        document.querySelector("#i1").style.opacity = "0.8";
        document.querySelector("#i5").style.opacity = "0.5";
    }
}

function dropDown(){
    document.querySelector("#dropDown").style.display = "block";
    document.querySelector("#dropDown").style.opacity = "1";
}
function dropFade(){
    document.querySelector("#dropDown").style.display = "none";
    document.querySelector("#dropDown").style.opacity = "0";
}

let opened = true;
function secondaryMenu(){
    if(opened === true){
        document.querySelector("#secondaryMenu").style.transform = "translateX(0px)";
        opened = !opened;
    }
    else{
        document.querySelector("#secondaryMenu").style.transform = "translateX(250px)";
        opened = !opened;
    }
}
let boolInformatii = [];
for (let index = 1; index <= 2; index++) {
    boolInformatii[index] = true;
}
function dropInformatii(value){
    if(boolInformatii[value] === true){
        document.querySelector("#info"+value).style.display = "flex";
        document.querySelector("#arrow"+value).style.transform = "rotate(180deg)"
    }
    else{
        document.querySelector("#info"+value).style.display = "none";
        document.querySelector("#arrow"+value).style.transform = "rotate(0deg)"
    }
    boolInformatii[value] = !boolInformatii[value]; 
}

function test(){
    let top = window.pageYOffset;
    if( top === 0 ){
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0)"
    }
    else{
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
    }

}