$(document).ready(function () {
    'use strict';
// Check contact form
//     $('#formSubmit').on('click', function (e) {
// //        PostUserMessage();
// //        e.preventDefault();
//         var abort = false;
//         $('span.labelError').remove();
//         $(':input[required]').each(function () {
//             if ($(this).val() === '') {
//                 $(this).before('<span class="labelError">Required</span>');
//                 abort = true;
//             }
//         });// iterate through each form element
//         if (abort) {
//             $(':input[required]').val('');
//             return false;
//         } else {
//             PostUserMessage();
//         }
//     });
//
//     function PostUserMessage() {
//         $.ajax({
//             type: 'POST',
//             url: './sendMail.php',
//             data: $('form').serialize()
//         }).done(function (data) {
//             var json = JSON.parse(data);
//
//             if (json.error === 1) {
//             // Something gone wrong
//                 alert(json.error_message);
//             } else if (json.error === 0) {
//                 alert("Your message has been received");
//
//             // clear form elements
//                 $(':input').not(':submit').val('');
//             }
//         });
//     }

// swap sliders for footstool or chair kit instructions
    var $swapSlider = $('#swap-slider'),
        $footSlider = $('#foot-slider'),
        $chairSlider = $('#chair-slider');

    $swapSlider.text('Click here for Footstool Instructions');
    $footSlider.hide();
       
    $swapSlider.on('click', function () {
        if ($chairSlider.is(':visible')) {
            $swapSlider.text('Click here for Chair Instructions');
            $chairSlider.hide();
            $footSlider.show();
        } else {
            $swapSlider.text('Click here for Footstool Instructions');
            $chairSlider.show();
            $footSlider.hide();
        }
        return false;
    });
    
// Display the FAQ
    $('.faq_question').click(function () {
        if ($(this).parent().is('.open')) {
            $(this).closest('.faq').find('.faq_answer_container').animate({'height': '0'}, 500);
            $(this).closest('.faq').removeClass('open');
        } else {
            var newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
            $(this).closest('.faq').find('.faq_answer_container').animate({'height': newHeight}, 500);
            $(this).closest('.faq').addClass('open');
        }
    });
    
// Show model for FAQ
    $('#faqmodel').click(function () {
        $('#faqModel').foundation('reveal', 'open');
    });
    
// show or hide the sticky button
    var btn = document.getElementById("backToTop");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(btn).fadeIn(300);
        } else {
            $(btn).fadeOut(300);
        }
    });
// made button got to top
    $('btn').click(function (e) {
        $('html, body').animate({scrollTop: 0}, 500);
        e.preventDefault();
    });
    
});


