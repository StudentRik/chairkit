!function(e){"use strict";function a(){e.ajax({type:"POST",url:"./sendMail.php",data:e("form").serialize()}).done(function(a){var n=JSON.parse(a);1===n.error?alert(n.error_message):0===n.error&&(alert("Your message has been received"),e(":input").not(":submit").val(""))})}e(":submit").on("click",function(){var n=!1;return e("span.labelError").remove(),e(":input[required]").each(function(){""===e(this).val()&&(e(this).before('<span class="labelError">Required</span>'),n=!0)}),n?(e(":input[required]").val(""),!1):!0;a()});var n=e("#swap-slider"),t=e("#foot-slider"),i=e("#chair-slider");n.text("Click here for Chair/Footstool Instructions"),n.on("click",function(){i.fadeToggle(200,"linear"),t.fadeToggle(200,"linear")}),e(".faq_question").click(function(){if(e(this).parent().is(".open"))e(this).closest(".faq").find(".faq_answer_container").animate({height:"0"},500),e(this).closest(".faq").removeClass("open");else{var a=e(this).closest(".faq").find(".faq_answer").height()+"px";e(this).closest(".faq").find(".faq_answer_container").animate({height:a},500),e(this).closest(".faq").addClass("open")}}),e("#faqmodel").click(function(){e("#faqModel").foundation("reveal","open")});var o=document.getElementById("backToTop");e(window).scroll(function(){e(this).scrollTop()>400?e(o).fadeIn(300):e(o).fadeOut(300)}),e("btn").click(function(a){a.preventDefault(),e("html, body").animate({scrollTop:0},500)})}($);