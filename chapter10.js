$(function() {

//first the click for changing the middle image
$('#thumbBox').click(function(e){
    //change the big image

    if (e.target.tagName == 'IMG'){
        var newSrc = e.target.src.replace('small', 'medium');
        $('#imgManipulated img').attr('src', newSrc);
    }


    //change the figure title/caption
    var newtitle=e.target.alt;
    var newtitle2=e.target.title;
    $('figcaption').html(newtitle + '<br>' + newtitle2);
});

//handling the slider

$('input').on('input', function(){
    var opacityvalue = $('#sliderOpacity').val();
    console.log(opacityvalue);
    $('#numOpacity').html(opacityvalue);

    var saturationvalue = $('#sliderSaturation').val();
    $('#numSaturation').html(saturationvalue);

    var brightnessvalue = $('#sliderBrightness').val();
    $('#numBrightness').html(brightnessvalue);

   
    var huevalue = $('#sliderHue').val();
    $('#numHue').html(huevalue);


    var grayvalue = $('#sliderGray').val();
    $('#numGray').html(grayvalue);

    var blurvalue = $('#sliderBlur').val();
    $('#numBlur').html(blurvalue);

    var filterstring = 'grayscale(' + grayvalue + '%) blur(' + blurvalue + 'px) hue-rotate(' + huevalue + 'deg) brightness(' + brightnessvalue + '%) saturate(' + saturationvalue + '%) opacity(' + opacityvalue + '%)';
    $('#imgManipulated img').css('filter', filterstring);
});



});