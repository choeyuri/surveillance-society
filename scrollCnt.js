
let scrollY;

window.addEventListener("scroll", scrollFn);

let cnt = 0;
let nowNum = 0;


let countBox = document.querySelector('#count');
let numberBOX = document.querySelector('#box');
let hiddenText = document.querySelector('#a');

function scrollFn()
{
    scrollY = this.scrollY;
    console.log(scrollY);

    
    if(scrollY >= 0 && scrollY < 281)
    {
        cnt = 0;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY > 281 && scrollY < 840)
    {
        cnt = 1;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 840 && scrollY < 1532 )
    {
        cnt = 5;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 1532 && scrollY < 1600 )
    {
        cnt = 300;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 1600 && scrollY < 2000 )
    {
        cnt = 8000;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 2000 && scrollY < 2400 )
    {
        cnt = 50000;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >=2400 && scrollY < 2800 )
    {
        cnt = 120000;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >=2800 && scrollY < 3100 )
    {
        cnt = 500000;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 3100 && scrollY < 4500 )
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity:0";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 4500 && scrollY < 4550 )
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity:0.3";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 4550 && scrollY < 4600 )
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 0.5";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 4600 && scrollY < 4700 )
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity:0.7";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 4700 && scrollY < 4800 )
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 1";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 4800 && scrollY <5000 )
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 1";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 5000 && scrollY < 5050)
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 1";
        numberBOX.style.cssText = "opacity: 1";
    }
    else if(scrollY >= 5050 && scrollY < 5100)
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 1";
        numberBOX.style.cssText = "opacity: 0.8";
    }
    else if(scrollY >= 5100 && scrollY < 5200)
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 1";
        numberBOX.style.cssText = "opacity: 0.6";
    }
    else if(scrollY >= 5200 && scrollY < 5300)
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 1";
        numberBOX.style.cssText = "opacity: 0.4";
    }
    else if(scrollY >= 5300 && scrollY < 5400)
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 1";
        numberBOX.style.cssText = "opacity: 0.2";
    }
    else if(scrollY >= 5400 && scrollY < 5584)
    {
        cnt = 1458465;
        hiddenText.style.cssText = "opacity: 1";
        numberBOX.style.cssText = "display: none";
    }

}

// function fadeOut(target) {
//     var level = 1;
//     var outTimer = null;
//     outTimer = setInterval( function(){
//         l
//     })
// }

let cntAni = requestAnimationFrame(makeCnt);
function makeCnt()
{
    nowNum +=((cnt - nowNum)*0.1);
    countBox.innerHTML = Math.round(nowNum) ;
    cntAni = requestAnimationFrame(makeCnt);
}



