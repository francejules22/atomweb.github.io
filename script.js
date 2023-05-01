
//MENU BUTTON
let menuButton = document.querySelector('#menu-icon');
let navList = document.querySelector('.navlist');

menuButton.onclick = () => {
    menuButton.classList.toggle('bx-x');
    navList.classList.toggle('open');
}


//FOOTER LINK TOGGLE
$(document).ready(function(){
  $('#toggle-footer-list').on("click",function(){
       $(this).next().toggleClass('toggle');
  })

  $('#toggle-footer-list2').on("click",function(){
       $(this).next().toggleClass('toggle');
  })

  $('#toggle-footer-list3').on("click",function(){
       $(this).next().toggleClass('toggle');
  })

  $('#toggle-footer-list4').on("click",function(){
      $(this).next().toggleClass('toggle');
  })
});
