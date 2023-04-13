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
let a = true;
function dropExamene(){
    if(a === true){
        document.querySelector("#examene").style.display = "flex";
        a = !a;
        document.querySelector("#arrow1").style.transform = "rotate(180deg)"
    }
    else{
        document.querySelector("#examene").style.display = "none";
        document.querySelector("#arrow1").style.transform = "rotate(0deg)"
        a = !a; 
    }
}

function dropOfertaEducationala(){
    if(a === true){
        document.querySelector("#ofertaEducationala").style.display = "flex";
        a = !a;
        document.querySelector("#arrow2").style.transform = "rotate(180deg)"
    }
    else{
        document.querySelector("#ofertaEducationala").style.display = "none";
        document.querySelector("#arrow2").style.transform = "rotate(0deg)"
        a = !a; 
    }
}

