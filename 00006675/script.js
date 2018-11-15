 var slideIndex = 1;
 showDivs(slideIndex);  /*i made a var SlideIndex to make switchings*/

 function plusDivs(n) {
  showDivs(slideIndex += n);  /*when plusDivs start working, it adds one divs*/
 }
 function showDivs(n) {
  var i;
   var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}      /*showDivs function is used for checking the slides length and making them the none */
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
  }
   x[slideIndex-1].style.display = "block";  
 }///end of slide show///








   /* Demo purposes only */
  $(".hover").mouseleave(
     function () {
       $(this).removeClass("hover");
     }
   );
	









