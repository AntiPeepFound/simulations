// document.querySelector('#prompt').style.display = "none";
// document.querySelector('#stay').style.display = "none";
// document.querySelector('#flee').style.display = "none";
// document.querySelector('#fard').style.display = "none";

// setTimeout(showPrompt, 1000);

// function showPrompt() {
//     $('#prompt').fadeIn(0500);
//     setTimeout(function() {$('#stay').fadeIn(1000);}, 2000);
//     setTimeout(function() {$('#flee').fadeIn(1000);}, 3500);
//     setTimeout(function() {$('#fard').fadeIn(1000);}, 5000);
// }

$("#stay").click(function() {
    $("#stay").attr("disabled", true);
    $("#flee").attr("disabled", true);
    $("#fard").attr("disabled", true);
    setTimeout(function() {$('#stay').fadeOut(1000);}, 2000);
    setTimeout(function() {$('#flee').fadeOut(1000);}, 3500);
    setTimeout(function() {$('#fard').fadeOut(1000);}, 5000);
    
    $('#prompt').fadeOut(1000, function() {document.querySelector("#prompt").innerHTML = "You have failed! The Matey Marines have now kept you prisoner."});
    setTimeout(function() {$('#prompt').fadeIn(1000);}, 5500);
});

$("#flee").click(function() {
    $("#stay").attr("disabled", true);
    $("#flee").attr("disabled", true);
    $("#fard").attr("disabled", true);
    setTimeout(function() {$('#flee').fadeOut(1000);}, 2000);
    setTimeout(function() {$('#stay').fadeOut(1000);}, 3500);
    setTimeout(function() {$('#fard').fadeOut(1000);}, 5000);

    var random = Math.floor(Math.random() * 4);
    console.log(random);

    if (random == 1 || random == 3) {
        $('#prompt').fadeOut(1000, function() {document.querySelector("#prompt").innerHTML = "You have failed! The Matey Marines have now kept you prisoner."});
    } else if (random == 0 | random == 2) {
        $('#prompt').fadeOut(1000, function() {document.querySelector("#prompt").innerHTML = "Congratulations! You fleed from the situation and the Matey Marines didn't notice 👀."});
    }
    setTimeout(function() {$('#prompt').fadeIn(1000);}, 5500);
});

$("#fard").click(function() {
    $("#stay").attr("disabled", true);
    $("#flee").attr("disabled", true);
    $("#fard").attr("disabled", true);
    setTimeout(function() {$('#fard').fadeOut(1000);}, 2000);
    setTimeout(function() {$('#flee').fadeOut(1000);}, 3500);
    setTimeout(function() {$('#stay').fadeOut(1000);}, 5000);

    $('#prompt').fadeOut(1000, function() {document.querySelector("#prompt").innerHTML = "Congratulations! You unleashed a ginormous fard that completly wiped out the Matey Marines."});
    setTimeout(function() {$('#prompt').fadeIn(1000);}, 5500);
});