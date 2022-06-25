// starting header and landing page js
window.addEventListener("scroll" , function(){
    if (window.scrollY > 0){
        document.querySelector("section.landing header").style.backgroundColor = "rgb(16, 17, 48)";
    }
    else{
        document.querySelector("section.landing header").style.backgroundColor = "transparent";
    } 
    
})
window.addEventListener("scroll" , function(){
    if (this.window.scrollY >=200){
        document.getElementById("toTop").style.display = "block";
        this.setTimeout(function(){
            document.getElementById("toTop").style.opacity = "1";
        },100);
    }
    else {
        document.getElementById("toTop").style.opacity = "0";
        document.getElementById("toTop").style.display = "none";

     
    }
})
document.getElementById("toTop").addEventListener("click" , function(){
 window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth",
 });
})
// drop down menu
document.querySelector(".landing .container nav div.icon").addEventListener("click" , function(){
    document.querySelector(".landing .container nav ul").classList.toggle("downUl");
    document.querySelector(".landing .container nav div.icon span:first-child").classList.toggle("up"); 
    document.querySelector(" div.icon span:nth-child(2)").classList.toggle("between"); 
    document.querySelector(".landing .container nav div.icon span:last-child").classList.toggle("down");

})
// starting onloading window section
window.addEventListener("load" , function(){
    this.document.querySelector(".landing article p:first-of-type").style.transform = "scale(1)";
    this.document.querySelector(".landing article h1").style.cssText = "opacity:1; transform: translateY(0px);";
    this.document.querySelector(".landing article p:last-of-type").style.cssText = "opacity:1; transform: translateY(0px);";
    this.document.querySelector(".landing article button").style.cssText = "opacity:1; transform: translateY(0px);";

})
// starting clock section
let hourStrong = document.getElementById("hours");
let minuteStrong = document.getElementById("minutes");
let secondStrong = document.getElementById("seconds");
function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10 ){
        hours = "0" + hours;
    }
    if (minute < 10 ){
        minute = "0" + minute;
    }
    if (seconds < 10 ){
        seconds = "0" + seconds;
    }
    hourStrong.textContent = hours;
    minuteStrong.textContent = minute;
    secondStrong.textContent = seconds;

}
window.addEventListener("load" ,function(){
    window.setInterval(clock , 500);
    let date = new Date();
    let year =date.getFullYear();
    this.document.getElementById("yearSpan").textContent = `Decemper ${year+1}`;
    this.document.querySelectorAll(".events .container ul li span .yearSpan").forEach(function(el){
        el.textContent = `${year+1}`;
    })
})
// starting scrolling to second section 
window.addEventListener("scroll" , function(){
let speakerOne = this.document.getElementById("speakerOne");
let fiveSpeaker = this.document.getElementById("fiveSpeaker");
    let specialHeading1 = document.getElementsByClassName("special-heading")[0];
    let specialHeading2 = document.getElementsByClassName("special-heading")[1];
    let specialHeading3 = document.getElementsByClassName("special-heading")[2];
    let firstArticle = this.document.getElementById("firstArticle");
    let fourthArticle = this.document.getElementById("fourthArticle");
    let aboutSection = this.document.getElementsByClassName("about")[0];
    if (window.scrollY >= specialHeading1.offsetTop -200){
        this.document.querySelector(".special-heading h3").style.cssText = "opacity:1; transform:scale(1);";
        this.document.querySelector(".special-heading h1").style.cssText = "opacity:1; transform:translateY(0px);";
        this.document.querySelector(".special-heading p").style.cssText = "opacity:1; transform:translateY(0px);";
    }
    if (window.scrollY >= specialHeading2.offsetTop -200){
        this.document.querySelector(".hTwo h3").style.cssText = "opacity:1; transform:scale(1);";
        this.document.querySelector(".hTwo h1").style.cssText = "opacity:1; transform:translateY(0px);";
        this.document.querySelector(".hTwo p").style.cssText = "opacity:1; transform:translateY(0px);";
    }
    if (window.scrollY >= specialHeading3.offsetTop -300){
        this.document.querySelector(".hThree h3").style.cssText = "opacity:1; transform:scale(1);";
        this.document.querySelector(".hThree h1").style.cssText = "opacity:1; transform:translateY(0px);";
        this.document.querySelector(".hThree p").style.cssText = "opacity:1; transform:translateY(0px);";
    }

    if (window.scrollY >= firstArticle.offsetTop -350 ){
      
        this.document.querySelectorAll(".main .container .FA").forEach(function(e){
        e.style.cssText = "opacity:1; transform:translateY(0px);";
     })
    }
    if (window.scrollY >= fourthArticle.offsetTop -400 ){
        
        this.document.querySelectorAll(".main .container .LA").forEach(function(e){
        e.style.cssText = "opacity:1; transform:translateY(0px);";
     })
    }
    if (this.window.scrollY >= aboutSection.offsetTop -200){
        
        this.document.querySelector(".about figure").style.opacity = "1";
        this.document.querySelector(".about article").style.opacity = "1";
    }
    
    if (this.window.scrollY >= speakerOne.offsetTop -300){
       this.document.querySelectorAll(".speakers .container section.SO").forEach(function(e){
          e.style.cssText = "opacity:1; transform:translateY(0px);"
         
       })
    } 
    if (this.window.scrollY >=fiveSpeaker.offsetTop -400){
        this.document.querySelectorAll(".speakers .container section.SF").forEach(function(e){
            e.style.cssText = "opacity:1; transform:translateY(0px);"
        })
    } 

})
// starting events ul li section
let eventsLies = document.querySelectorAll(".events .container ul li");
let strongs = document.querySelectorAll(".events .container .content .box .left strong");
let boxes = document.querySelectorAll(".events .container .content .box");
eventsLies.forEach(function(li){
    li.addEventListener("click" , function(){
        eventsLies.forEach(function(li){
            li.classList.remove("active");
        })
        this.classList.add("active");
        let date = this.dataset.cat;
        console.log(date);

        strongs.forEach(function(s){
            s.style.transform = "scale(0)";
        })
        boxes.forEach(function(b){
            b.style.transform = "rotateX(90deg)";
        })
        

        window.setTimeout(function(){
            strongs.forEach(function(s){
                s.style.transform = "scale(1)";
              s.textContent = date;
              let temp;
         
                     
            })
            let imgs = document.querySelectorAll(".events .container .filter .content .box .center img");
        },900)
        window.setTimeout(function(){
            boxes.forEach(function(b){
                b.style.transform = "rotateX(0deg)";
            })
        },900)
        
    })
})
// starting testi section 
let testiLi = document.querySelectorAll(".tsm ul li");
testiLi.forEach(function(li){
    li.addEventListener("click" , function(){
        testiLi.forEach(function(li){
            li.classList.remove("active");
        })
        this.classList.add("active");
        console.log(this);
    })
})
window.addEventListener("scroll" , function(){
    let testiheader = this.document.querySelector(".tsm .htsm");
    if (window.scrollY >= testiheader.offsetTop -400){
        this.document.querySelector(".tsm .htsm h3").style.cssText = "opacity:1; transform:scale(1);";
        this.document.querySelector(".tsm .htsm h1").style.cssText = "opacity:1; transform:translateY(0px);";
        this.document.querySelector(".tsm .htsm p").style.cssText = "opacity:1; transform:translateY(0px);";
    }
        
        let lioneClick =0;
        testiLi[0].addEventListener("click" , function(action){
            if (lioneClick !=0)
            document.querySelector(".tsm .container .content").style.cssText = "margin-left:0;"
        })
        testiLi[1].addEventListener("click" , function(){
            
        document.querySelector(".tsm .container .content").style.cssText = "margin-left:-100%;"
        lioneClick++;
    })
        testiLi[2].addEventListener("click" , function(){
            
        document.querySelector(".tsm .container .content").style.cssText = "margin-left:-200%;"
        lioneClick++;
    })
        testiLi[3].addEventListener("click" , function(){
            
        document.querySelector(".tsm .container .content").style.cssText = "margin-left:-300%;"
        lioneClick++;
    })
        testiLi[4].addEventListener("click" , function(){
            
        document.querySelector(".tsm .container .content").style.cssText = "margin-left:-400%;"
        lioneClick++;
    })
        testiLi[5].addEventListener("click" , function(){
            
        document.querySelector(".tsm .container .content").style.cssText = "margin-left:-500%;"
        lioneClick++;
    })  
})
// starting blog section
window.addEventListener("scroll" , function(){
    let hblog = this.document.querySelector(".blog .hblog");
    let blogarticle = this.document.querySelectorAll(".blog .container article");
    let blogarticle1 = blogarticle[0];
    if (window.scrollY >= hblog.offsetTop -320){
        this.document.querySelector(".hblog h3").style.cssText = "opacity:1; transform:scale(1);";
        this.document.querySelector(".hblog h1").style.cssText = "opacity:1; transform:translateY(0px);";
        this.document.querySelector(".hblog p").style.cssText = "opacity:1; transform:translateY(0px);";
    }
    if (this.window.scrollY >= blogarticle1.offsetTop -230){
        blogarticle.forEach(function(el){
            console.log("exit");
            el.style.cssText = "opacity:1; transform:trasnlateY(0px);"
        })
    }


})
// starting bink section
let binkSec = document.querySelector(".bink div");
window.addEventListener("scroll" , function(){
if (this.window.scrollY >= binkSec.offsetTop -100){
    this.document.querySelector(".bink div").style.cssText = "transform:scale(1)";
    this.document.querySelector(".bink p").style.cssText = "opacity:1;"
    this.document.querySelector(".bink h1").style.cssText = "opacity:1;"
    this.document.querySelector(".bink a").style.cssText = "opacity:1;"
}
})
// starting nav part js final
let links = document.querySelectorAll(".landing nav ul li a");
links.forEach(function(a){
    a.addEventListener("click" , function(){
        links.forEach(function(a){
            a.classList.remove("active");
        })
        this.classList.add("active");
    })

})
let outerBTN = document.querySelector(".landing nav .out-btn");
let innerBTN = document.querySelector(".landing nav .inner-btn");
let buyBTN = document.getElementById("buy");
let Events = document.querySelector("section.events");
let linkAbout =document.getElementById("about");
let linkSpeaker = document.getElementById("speakers");
let linkPricing = document.getElementById("pricing");
let linkTesti = document.getElementById("testi");
let linkBLog = document.getElementById("blog");
outerBTN.addEventListener("click" , function(){
    window.scrollTo(0 ,linkPricing.offsetTop-20);
    
})
innerBTN.addEventListener("click" , function(){
    window.scrollTo(0 ,linkPricing.offsetTop-20);
    
})
buyBTN.addEventListener("click" , function(){
    window.scrollTo(0 ,linkPricing.offsetTop-20);
    
})
window.addEventListener("scroll" , function(){
    if (this.window.scrollY >= linkAbout.offsetTop -200 ){
        links.forEach(function(a){
            a.classList.remove("active");
        })
        links[1].classList.add("active");
    }

    if (this.window.scrollY >= linkSpeaker.offsetTop -200){
        links.forEach(function(a){
            a.classList.remove("active");
        })
        links[2].classList.add("active");
    }
    if (this.window.scrollY >= Events.offsetTop -250 ){
        links.forEach(function(a){
            a.classList.remove("active");
        })
        links[3].classList.add("active");
    }

    if (this.window.scrollY >= linkPricing.offsetTop-200){
        links.forEach(function(a){
            a.classList.remove("active");
        })
        links[4].classList.add("active");
    }
    if (this.window.scrollY >= linkTesti.offsetTop -200){
        links.forEach(function(a){
            a.classList.remove("active");
        })
        links[5].classList.add("active");
    }
    if (this.window.scrollY >= linkBLog.offsetTop-200){
        links.forEach(function(a){
            a.classList.remove("active");
        })
        links[6].classList.add("active");
    }
    if (this.window.scrollY <= 50){
        links.forEach(function(a){
            a.classList.remove("active");
        })
        links[0].classList.add("active");
    }
})
