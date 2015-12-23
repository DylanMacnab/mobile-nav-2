// **************************************************
// Name: codepen.js
// Description: codepen.js
// **************************************************



// Show and Hide Mobile Menu
$('.burger').on('click', function(){
  $('.burger').toggleClass('burger-open');
  $('.mobileNav').toggleClass('mobileNav-open');
});

// Click event changes between different tier1 lists
$('.mobileNav_tier1 li').on('click', function (){
   $('.mobileNav_tier1 li').removeClass('active');
  $(this).toggleClass('active');
});


// To Do:

// Animation for burger closing
// Add icons to Tier 2 list
// Refactor code
// Take code to
