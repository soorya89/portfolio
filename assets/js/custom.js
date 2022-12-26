

$("#contact-form").submit((e)=>{
	e.preventDefault()
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbyJTToxKxEIlUZUiQjajjbUAX7lJfIFT_tzILXmYjgeWvgFPsIo4NvC-UBxZa6HRfIt/exec",
		data:$("#contact-form").serialize(),
		method:"post",
		success:function (response){
			alert("Form submitted successfully")
			window.location.reload()
			//window.location.href="https://google.com"
		},
		error:function (err){
			alert("Something Error")

		}
	})
})










var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var subjectError=document.getElementById('subject-error');



function validateName(){
	var name = document.getElementById('name').value;
	if(name.length == 0){
		nameError.innerHTML ='Name is required';
         return false;
	}
	if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
		nameError.innerHTML = 'Write full name';
		return false;
	}
	nameError.innerHTML ='';
	return true;
}


function validateEmail(){
	var email = document.getElementById('email').value;
	if(email.length == 0){
		emailError.innerHTML ='Email is required';
         return false;
	}
	if(!email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
		emailError.innerHTML = 'Email invalid';
		return false;
	}
	emailError.innerHTML ='';
	return true;
}

function validateMessage(){
	var message = document.getElementById('message').value;
	var required =30;
	var left = required - message.length;

	if(left>0) {
		messageError.innerHTML = left + ' more characters required.';
		return false;
	} else {
		messageError.innerHTML = 'Enter a valid message';
	}

	messageError.innerHTML ='';
	return true;
}


function validateSubject(){
	var subject = document.getElementById('subject').value;
	var required =10;
	var left = required - subject.length;

	if(left>0) {
		subjectError.innerHTML = left + ' more characters required.';
		return false;
	} else {
		subjectError.innerHTML = 'Enter a valid subject';
	}

	subjectError.innerHTML ='';
	return true;
}
function validateSubmit(){
	validateName(),validateEmail(),validateMessage(),validateSubject();
    if(!validateEmail() || !validateMessage() || !validateName() || !validateSubject()) {
                  submitError.style.display = 'block';
                  submitError.innerHTML = 'Please fix all errors to submit.';
                  setTimeout(function() {submitError.style.display = 'none';}, 3000);
                  return false;
        }
	}

	




$(document).ready(function(){
	"use strict";

    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	
	