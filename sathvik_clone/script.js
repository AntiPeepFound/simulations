document.querySelector('#prompt').style.display = "none";
document.querySelector('#fight').style.display = "none";
document.querySelector('#order').style.display = "none";
document.querySelector('#mug-cake').style.display = "none";

setTimeout(showPrompt, 1000);

function showPrompt() {
    $('#prompt').fadeIn(0500);
    setTimeout(function() {$('#fight').fadeIn(1000);}, 2000);
    setTimeout(function() {$('#order').fadeIn(1000);}, 3500);
    setTimeout(function() {$('#mug-cake').fadeIn(1000);}, 5000);
}

$("#fight").click(function() {
    $("#fight").attr("disabled", true);
    $("#order").attr("disabled", true);
    $("#mug-cake").attr("disabled", true);
    setTimeout(function() {$('#fight').fadeOut(1000);}, 2000);
    setTimeout(function() {$('#order').fadeOut(1000);}, 3500);
    setTimeout(function() {$('#mug-cake').fadeOut(1000);}, 5000);
    
    $('#prompt').fadeOut(1000, function() {document.querySelector("#prompt").innerHTML = "You have failed! The Sathvik clones have overtaken you in sheer numbers and have taken you away."});
    setTimeout(function() {$('#prompt').fadeIn(1000);}, 5500);
});

$("#order").click(function() {
    $("#fight").attr("disabled", true);
    $("#order").attr("disabled", true);
    $("#mug-cake").attr("disabled", true);
    setTimeout(function() {$('#order').fadeOut(1000);}, 2000);
    setTimeout(function() {$('#fight').fadeOut(1000);}, 3500);
    setTimeout(function() {$('#mug-cake').fadeOut(1000);}, 5000);

    $('#prompt').fadeOut(1000, function() {document.querySelector("#prompt").innerHTML = "You have failed! Your attempts to command the Matey Marines were futile. In that time, the clones sneak attacked you."});
    setTimeout(function() {$('#prompt').fadeIn(1000);}, 5500);
});

$("#mug-cake").click(function() {
    $("#fight").attr("disabled", true);
    $("#order").attr("disabled", true);
    $("#mug-cake").attr("disabled", true);
    setTimeout(function() {$('#mug-cake').fadeOut(1000);}, 2000);
    setTimeout(function() {$('#order').fadeOut(1000);}, 3500);
    setTimeout(function() {$('#fight').fadeOut(1000);}, 5000);

    $('#prompt').fadeOut(1000, function() {document.querySelector("#prompt").innerHTML = "Congratulations! You unleashed a ginormous fard that can only be achieved with Aryan and Mug Cake. It completly wiped out the clones within a 5-mile radius."});
    setTimeout(function() {$('#prompt').fadeIn(1000);}, 5500);
});