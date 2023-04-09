let slide = document.querySelector("#slide");
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let k = 1;
function leftSlide(){
    if(k != 1){
        slide.style.transform = "translateX("+ (k-2)*-50 +"vw)";
        k--;
        for(let i = 1 ; i <= 5 ; i++){
            if( k === i ){
                document.querySelector("#c"+i).style.opacity = "1";
            }
            else{
                document.querySelector("#c"+i).style.opacity = "0.6";
            }
        }
    }
}
function rightSlide(){
    if(k != 5){
        slide.style.transform = "translateX("+ k*-50 +"vw)";
        k++;
        for(let i = 1 ; i <= 5 ; i++){
            if( k === i ){
                document.querySelector("#c"+i).style.opacity = "1";
            }
            else{
                document.querySelector("#c"+i).style.opacity = "0.6";
            }
        }
    }
}