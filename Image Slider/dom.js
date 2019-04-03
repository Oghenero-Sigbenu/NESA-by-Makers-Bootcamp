

let mages = document.getElementById("myslides");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next")  ;
let pictures = ["images/image1.jpg","image2.jpg", "image3.jpg", "image4.jpg"];
 let counterIndex = 0;

 btnNext.addEventListener('click', function() {
    
       let picturelength = pictures.length;
       if(counterIndex < picturelength - 1){
           counterIndex += 1;
           mages.setAttribute("src", pictures[counterIndex]);
           console.log(counterIndex);
           btnPrev.disabled = false;
        }

           if (counterIndex != picturelength - 1){
            btnNext.disabled = false;
           }
           else{
               btnNext.disabled = true;
           }
           
       
  } );

 btnPrev.addEventListener('click', function() {

    if(counterIndex > 0){
    counterIndex -= 1;
    mages.setAttribute("src", pictures[counterIndex]);
    
    console.log(counterIndex);
    btnNext.disabled = false;
    }
    if (counterIndex === 0 ){
        btnNext.disabled = false;
        btnPrev.disabled = true;
    }
       
 });
 mages.setAttribute("btnNext").disabled = true;


// document.getElementById("myslides").src = pictures[1];
    
   



//       pictures[0]
//  }
//     for (var i = 0; i < mages.length; ++i);{
//         mages[i].style.display = "none";
//     }

//     counter++
// if(counter > mages.length){
//     counter = 1
// }
//     }
//     mages[counter-1].style.display = "block";
// arrw.addEventListener('click', change);


// change();
    // document.getElementById("myslides").src = "images/image2.jpg";
    // document.getElementById("myslides").src = "images/image3.jpg";




//     document.getElementById("myslides").src = "images/image4.jpg";
//     document.getElementById("myslides").src = "images/image5.jpg";

//   
// function plusSlides() {
//     document.getElementById("myslides").src = "images/image3.jpg";
