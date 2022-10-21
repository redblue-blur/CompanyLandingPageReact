$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 100);
});
$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 100);
});
$("#button3").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 100);
});
$('.owl-carousel').owlCarousel(
{
    items : 1,
    loop:true,
    margin:0,
    nav:true,
    autoHeight:true,
    navText : ['<h1 class="navftsz"><</h1>','<h1 class="navftsz">></h1>'],
});
$(document).ready(function () {
    $( "#myform" ).validate({
        rules: {
            name: {
                required: true,
            },
            cont: {
                required: true,
                number:true,
                minlength: 10,
                maxlength: 10,
            },
            email: {
                required: true,
                email: true,
            },
            age: {
                required: true,
                min: 18,
            },
            date: {
                required: true,
                maxDate: true,
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
$.validator.addMethod("maxDate", function(value, element) {
    var curDate = new Date();
    var inputDate = new Date(value);
    if ((inputDate - curDate) < 172800000)
        return true;
    return false;
}, "Invalid Date!");