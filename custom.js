// ---------- heder section ----------
let navList = document.querySelectorAll(".menulist a");
let current = location.href;
for(let i =0;i<navList.length;i++){
    if(navList[i]==current){
        navList[i].className="menu_active"
    }else{
        navList[i].classList.remove("menu_active")
    }
}
let navBg=document.querySelector(".navbar_custom");
let ncolr = document.getElementById("atg");
let ncolr1 = document.getElementById("atg1");
let ncolr2 = document.getElementById("atg2");
let ncolr3 = document.getElementById("atg3");
let ncolr4 = document.getElementById("atg4");
console.log(ncolr)

window.onscroll=addEventListener("scroll",()=>{
    let scrollaNAV=window.scrollY;
    if(scrollaNAV>=100){
        navBg.style.background="rgba(0, 0, 0, 0.557)";
        ncolr.style.color="white";
        ncolr1.style.color="white";
        ncolr2.style.color="white";
        ncolr3.style.color="white";
        ncolr4.style.color="white";
    }else{
        navBg.style.background="";
        ncolr.style.color=""; 
        ncolr1.style.color=""; 
        ncolr2.style.color=""; 
        ncolr3.style.color=""; 
        ncolr4.style.color=""; 
    }
})

// ----------- header section----------

// ----------- home page----------
let homebImage = document.querySelector(".homebig_image");
let homesImage = document.querySelector(".home_s_image1");
let homesImage2 = document.querySelector(".home_s_image2");
let homesImage3 = document.querySelector(".home_s_image3");
let homesImage4 = document.querySelector(".home_s_image4");
homesImage.addEventListener("click",()=>{
    homebImage.src="image/food1.png"
});
homesImage2.addEventListener("click",()=>{
    homebImage.src="image/dish1.png"
})
homesImage3.addEventListener("click",()=>{
    homebImage.src="image/dish5.png"
})
homesImage4.addEventListener("click",()=>{
    homebImage.src="image/food5.png"
})

// ----------- offer----------
let offer = document.querySelector(".offer")
let count =0;
let clr=setInterval(()=>{
    count++;
    offer.innerHTML=count;
    if(count>=50){
        clearInterval(clr)
    }
    else{
        
    }
},50)
// ----------- offer----------
// ----------- home page----------

// ----------- our speciality----------
    let textanimation = document.querySelector(".spe");
    let text ="Speciality";
    let index=0;
    setInterval(()=>{
        textanimation.innerHTML=text.slice(0,index++);
        if(index>text.length){
            index=0
        }
          

    },300)

    let spImg = ["image/dish2.png","image/dish4.png","image/dish3.png"]
    let speImage = document.querySelector(".speimage");
    let index1 = 0;
    setInterval(()=>{
        index1++;
        
        if(index1>=spImg.length){
            index1=0;
            speImage.src=spImg[index1];
        }
        else{
            speImage.src=spImg[index1]; 
        }

    },2000);

   
    let ourSpeciality = document.querySelector(".our_speciality");
    ourSpeciality.addEventListener("mouseover",()=>{
        let tMember = document.querySelector(".t_member");
        let tOrder = document.querySelector(".t_order");
        let tItem = document.querySelector(".t_item");
        let memberCount =49000;
        let memberClear=setInterval(()=>{
            memberCount++;
            tMember.innerHTML="Members"+"<br>"+memberCount+"+";
            if(memberCount>=50000){
                clearInterval(memberClear)
            }
    
        },5)

        let orderCount =9950;
        let orderClear=setInterval(()=>{
            orderCount++;
            tOrder.innerHTML="Orders"+"<br>"+orderCount+"+";
            if(orderCount>=10000){
                clearInterval(orderClear)
            }
    
        },50);

        let itemCount =10;
        let itemClear=setInterval(()=>{
            itemCount++;
            tItem.innerHTML="Items"+"<br>"+itemCount+"+";
            if(itemCount>=50){
                clearInterval(itemClear)
            }
    
        },50)

    });
   
    
    // ----------- our speciality----------
    let mdl = document.querySelector(".galaryf1");
    let mdlShow = document.querySelector(".mdlshows");
    let mdlclose = document.querySelector(".closdd");
    mdlShow.addEventListener("click",function(){
        mdl.classList.add("m")
        console.log("hello");
    })
    mdlclose.addEventListener("click",function(){
        mdl.classList.remove("m")
        console.log("remove");
    })

    // ----------- food galary----------
     // ----------- car----------
     let car = document.querySelector(".car_img");
     let sped = 0;
     carstp=setInterval(()=>{
        sped+=2;
        car.style.marginLeft=sped+"px";
        if(sped>=1100){
            sped=0;
        }

     },30)
      // ----------- car----------

      // ----------- menu toggole----------
      let bar = document.querySelector(".bar");
      let menu = document.querySelector(".menulist");
      bar.addEventListener("click",()=>{
        menu.classList.toggle("navshow")
      })
      // ----------- menu toggole----------

    // let clickOrder = document.querySelector(".moodal");
    // let orderShow = document.querySelector(".fooddy");
    // let cls = document.querySelector(".cls");
    // orderShow.addEventListener("click",function(){
    //     orderShow.classList.add("opacity")
    // });
    // cls.addEventListener("click",()=>{
    //     let orderShow = document.querySelector(".fooddy");
    //     orderShow.classList.remove("opacity")
    // })


    // ----------- food galary----------

    // ----------- our ----------


    
           
          
  
       
// let titleScroll = window.scrollY;
// if(titleScroll>=175){
    
// }
// else if(titleScroll>=217){
//     clearInterval(clr)
// }
// else{

// } 

// window.onscroll=addEventListener("scroll",()=>{
    
//     console.log("hello")
// })

// ----------- our speciality----------



// // ----------- money updetor ----------
// let count=0;
// let timer=setInterval(()=>{
//     count++
//     document.querySelector(".diposit").innerHTML=count;
    
//     if(count===100){
//         clearInterval(timer)
//     }else{
       
//     }
//  },10);

//  let count1=0;
//  let timer1=setInterval(()=>{
//     count1++;
//     document.querySelector(".withdrwal").innerHTML=count1;
//     if(count1===200){
//         clearInterval(timer1)
//     }
//  },5)

//  let count2=0;
//  let timer2=setInterval(()=>{
//     count2++;
//     document.querySelector(".total").innerHTML=count2;
//     if(count2==500){
//         clearInterval(timer2)
//     }
//     },2)
// // ----------- money updetor ----------

// // ----------- money updetor ----------
// let copy = document.querySelector("#copytext");
// let copyButton = document.querySelector(".copybtn");

// copyButton.addEventListener("click",()=>{
//     navigator.clipboard.writeText(copy.value);
// });

// let cut = document.querySelector("#cuttext");
// let cutButton = document.querySelector(".cutbtn");

// cutButton.addEventListener("click",()=>{
//     navigator.clipboard.writeText(cut.value);
//     cut.value=""
// });

// let pest = document.querySelector("#pesttext");
// let pestButton = document.querySelector(".pestbtn");

// pestButton.addEventListener("click",()=>{
//     pest.value="";
//     navigator.clipboard.readText()
//    .then(function(text){
//     pest.value=text;
//    })
// });
// // ----------- money updetor ----------

// // -- ---------- color piker---------- -
// let color = document.querySelector("#color");
// let hex = document.querySelector("#hex");
// color.addEventListener("click",()=>{
//  let colorvalue = color.value;
//  hex.value=colorvalue;
//  let colordiv=document.querySelector(".colordiv");
//  colordiv.style.background=colorvalue;
// })



// // -- ---------- color piker---------- --

// // -- ---------- car---------- --
// let image = document.querySelector(".carimage");
// let start = document.querySelector(".start");
// let stopcar = document.querySelector(".stop")
// let m=0;
// start.addEventListener("click",()=>{
//     start.classList.add("startbtn");
//     stopcar.classList.remove("stopbtn");
//  run=setInterval(()=>{
//     if(m==900){
//         clearInterval(run);
//         m=0
    
//     }
//     else{
//         m+=2;
//         image.style.marginLeft=m+"px";
//     }
//  },10)
// });
// stopcar.addEventListener("click",()=>{
//     stopcar.classList.add("stopbtn");
//     start.classList.remove("startbtn");
//     if(true){
//         clearInterval(run);
//     }
// })
// // -- ---------- car---------- --

// // -- ---------- password---------- --
//  let password = document.querySelector("#pass");
//  let chek = document.querySelector("#chek");
//  chek.addEventListener("click",()=>{
//     if(password.type=="password"){
//         password.type="text"
//     }else{
//         password.type="password"
//     }
//  })
// // -- ---------- password---------- --

// // -- ---------- image auto slider---------- --

// let imageSlide = ["car.png","light on.png","light off.png"];
// let picture = document.querySelector(".image");

// let i = 0;
// function imageSlider(){
//     i++;
//     if(i>=imageSlide.length){
//         i=0;
//         picture.src = imageSlide[i]
//     }
//     else{
//         picture.src = imageSlide[i]
//     }
//     setTimeout(function nam(){
//     },1000)
//     window.onload=nam()
//     }

// // -- ---------- image auto slider---------- --

// // -- ---------- modal---------- --
// let modal=document.querySelector(".modaldiv");
// let show =document.querySelector(".clickme");
// let closed = document.querySelector(".closebtn");
// show.addEventListener("click",function(){
//     modal.classList.add("modalshow")
// });
// closed.addEventListener("click",()=>{
//     modal.classList.remove("modalshow")
// })
// // -- ---------- modal---------- --

// // -- ---------- zoom image---------- --
// let zoom= document.querySelector(".zoomimage");
//  let small1=document.querySelector(".small1");
//  let small2 =document.querySelector(".small2");
//  let small3 =document.querySelector(".small3");
//  let small4 =document.querySelector(".small4");

//  small1.addEventListener("click",()=>{
//     zoom.src="image/nayem.jpg"
//  })
//  small2.addEventListener("click",()=>{
//     zoom.src="image/nayem1.jpg"
//  })
//  small3.addEventListener("click",()=>{
//     zoom.src="image/nayem2.jpg"
//  })
//  small4.addEventListener("click",()=>{
//     zoom.src="image/nayem3.jpg"
//  })
// // -- ---------- zoom image---------- --
// // -- ---------- todo---------- --

// let addbtn = document.querySelector(".inputbutton");
// let addlist = document.querySelector(".orderlist");
// addbtn.addEventListener("click",()=>{
   
//     let input = document.querySelector(".inputvalue").value;
//     let text = document.createTextNode(input);
//     let creatnew = document.createElement("li");
//     creatnew.appendChild(text);
//     addlist.appendChild(creatnew)
    
//     if(input===""){
//         addlist.removeChild(creatnew)
//     }
//     else{
//        document.querySelector(".inputvalue").value=""
//     }

// })

// // -- ---------- todo---------- --

// // -- ---------- mcq---------- --
// let resultbtn = document.querySelector(".resultbtn");
// resultbtn.addEventListener("click",()=>{
//  let q1 = document.querySelector("#corroct1").checked;
//  let q2 = document.querySelector("#ad2").checked;
//  let q3 = document.querySelector("#bootstrap").checked;
//  let q4 = document.querySelector("#vasa").checked;

//  let count = 0;
//  if(q1){
//     count++
//  }
//  if(q2){
//     count++
//  }
//  if(q3){
//     count++
//  }
//  if(q4){
//     count++
//  }

//   document.querySelector(".resultshow").innerHTML="your result is : " +count;
// })
// // -- ---------- mcq---------- --

// // -- ---------- nav2---------- --
// let tgl = document.querySelector(".tgl");
// let navHeight =document.querySelector(".nvtwo");
// tgl.addEventListener("click",()=>{
//     navHeight.classList.toggle("tglnav")
    
// })
// console.log(navHeight)

// // -- ---------- nav2---------- --

// // -- ---------- imageslider---------- --
// let pic =["image/nayem1.jpg","image/nayem2.jpg","image/nayem3.jpg"];
// let imgsrc = document.querySelector(".imageslide");

// let index = 0;
// setInterval (() => {
//     index++;
    
    
//     if(index>=pic.length){
//         index=0;
//         imgsrc.src=pic[index];  
        
//     }else{
//         imgsrc.src=pic[index];
        
//     }
// console.log(index)

    
    
// },1000);



// -- ---------- imageslider---------- --

// -- ---------- todo---------- --
// -- ---------- todo---------- --