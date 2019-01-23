// CAR ANIMATION

$(document).ready(function() {
  animateDiv();
});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(".animated").height() - 50;
  var w = $(".animated").width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv() {
  var newq = makeNewPosition();
  var oldq = $(".a").offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(".a").animate({ top: newq[0], left: newq[1] }, speed, function() {
    animateDiv();
  });
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}

// MODAL

window.onload = function() {
  // your code

  //CATEGORIES
  var button = document.getElementById("btn-categories");
  button.onclick = function showMe() {
    console.log("it is happening");
    $("#categories").css("display", "flex");
    $("#special-offers").css("display", "none !important");
    $("#rent-a-car").css("display", "none !important");
    $("#payment").css("display", "none !important");
    $("#locations").css("display", "none !important");
    $("#categories").addClass("fadeInLeft");
    $("#locations").removeClass("fadeInLeft");
    $("#special-offers").removeClass("fadeInLeft");
    $("#rent-a-car").removeClass("fadeInLeft");
    $("#categories").removeClass("fadeOut");
    $("#payment").removeClass("slideInDown");
		$("btn-categories").css("color", "#0198e1")
  };

  var xicon = document.getElementById("xicon");
  xicon.onclick = function hide() {
    console.log("it is not happening");
    $(".animated").removeClass("fadeInLeft");
    $(".animated").addClass("fadeOut");
    $(".animated fadeInLeft").css("display", "none !important");
    $(".animated fadeOut").css("display", "none !important");
  };

  //SPECIAL OFFERS

  var button2 = document.getElementById("btn-special-offers");
  button2.onclick = function showMe2() {
    console.log("it is happening");
    $("#categories").css("display", "none !important");
    $("#special-offers").css("display", "flex");
    $("#locations").css("display", "none !important");
    $("#payment").css("display", "none !important");
    $("#special-offers").addClass("fadeInLeft");
    $("#special-offers").removeClass("fadeOut");
    $("#locations").removeClass("fadeInLeft");
    $("#categories").removeClass("fadeInLeft");
    $("#rent-a-car").removeClass("fadeInLeft");
    $("#payment").removeClass("slideInDown");
    $("#rent-a-car").css("display", "none !important");
  };

  var xicon2 = document.getElementById("xicon2");
  xicon2.onclick = function hide() {
    console.log("it is not happening");
    $(".animated").removeClass("fadeInLeft");
    $(".animated").addClass("fadeOut");
    $(".animated fadeInLeft").css("display", "none !important");
    $(".animated fadeOut").css("display", "none !important");
  };

  //LOCATIONS

  var button3 = document.getElementById("btn-locations");
  button3.onclick = function showMe3() {
    console.log("it is happening");
    $("#categories").css("display", "none !important");
    $("#special-offers").css("display", "none !important");
    $("#locations").css("display", "flex");
    $("#locations").addClass("fadeInLeft");
    $("#locations").removeClass("fadeOut");
    $("#categories").removeClass("fadeInLeft");
    $("#special-offers").removeClass("fadeInLeft");
    $("#rent-a-car").removeClass("fadeInLeft");
    $("#rent-a-car").css("display", "none !important");
    $("#payment").removeClass("slideInDown");
    $("#payment").css("display", "none !important");
  };

  var xicon3 = document.getElementById("xicon3");
  xicon3.onclick = function hide() {
    console.log("it is not happening");
    $(".animated").removeClass("fadeInLeft");
    $(".animated").addClass("fadeOut");
    $(".animated fadeInLeft").css("display", "none !important");
    $(".animated fadeOut").css("display", "none !important");
  };

  //RENT A CAR

  var button4 = document.getElementById("btn-rent-a-car");
  button4.onclick = function showMe4() {
    console.log("it is happening");
    $("#categories").css("display", "none !important");
    $("#special-offers").css("display", "none !important");
    $("#locations").css("display", "none !important");
    $("#rent-a-car").css("display", "flex");
    $("#rent-a-car").addClass("fadeInLeft");
    $("#rent-a-car").removeClass("fadeOut");
    $("#locations").removeClass("fadeInLeft");
    $("#categories").removeClass("fadeInLeft");
    $("#special-offers").removeClass("fadeInLeft");
    $("#payment").removeClass("slideInDown");
    $("#payment").css("display", "none !important");
  };

  var xicon4 = document.getElementById("xicon4");
  xicon4.onclick = function hide() {
    console.log("it is not happening");
    $(".animated").removeClass("fadeInLeft");
    $(".animated").removeClass("slideInDown");
    $(".animated").addClass("fadeOut");
    $(".animated fadeInLeft").css("display", "none !important");
    $(".animated slideInDown").css("display", "none !important");
    $(".animated fadeOut").css("display", "none !important");
  };

  //ONCLICK CAR

  $(".middle").click(function() {
    console.log("it is happening");
    $("#categories").css("display", "none !important");
    $("#special-offers").css("display", "none !important");
    $("#locations").css("display", "none !important");
    $("#rent-a-car").css("display", "flex");
    $("#rent-a-car").addClass("fadeInLeft");
    $("#rent-a-car").removeClass("fadeOut");
    $("#locations").removeClass("fadeInLeft");
    $("#categories").removeClass("fadeInLeft");
    $("#special-offers").removeClass("fadeInLeft");
    $("#payment").removeClass("slideInDown");
    $("#payment").css("display", "none !important");
  });
};

// RESERVATION SYSTEM

function payment() {
  var cost = 0;
  var name = $("#name").val();
  var phone = $("#phone").val();
  var email = $("#email").val();
  var location = $("#location-select option:selected").text();
  var car = $("#car-select option:selected").text();
  var startdate = $("#starting-date").val();
  var endingdate = $("#ending-date").val();
  var starting = new Date($("#starting-date").val());
  var ending = new Date($("#ending-date").val());

  if (
    name.length < 3 ||
    phone.length < 5 ||
    email.lenth < 8 ||
    location.length < 3 ||
    startdate.length < 3 ||
    endingdate.length < 3
  ) {
    alert("Please, enter correct information!");
  } else {
    var timeDiff = Math.abs(ending.getTime() - starting.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if ($("#car-select option:selected").val() < 9) {
      cost = 20;
    } else {
      cost = 40;
    }

    if ($("#insurance").is(":checked")) {
      cost = cost + 10;
    }
    if ($("#seats").is(":checked")) {
      cost = cost + 10;
    }
    if ($("#navigator").is(":checked")) {
      cost = cost + 10;
    }
    if ($("#tires").is(":checked")) {
      cost = cost + 20;
    }
    if ($("#jack").is(":checked")) {
      cost = cost + 20;
    }

    var price = cost * diffDays;

    console.log(cost, name, phone, email, location, starting, ending, diffDays);
    $("#lbl-name").text(name);
    $("#lbl-phone").text(phone);
    $("#lbl-email").text(email);
    $("#lbl-location").text(location);
    $("#lbl-car").text(car);
    $("#lbl-startdate").text(startdate);
    $("#lbl-endingdate").text(endingdate);
    $("#lbl-duration").text(diffDays);
    $("#lbl-price").text(price + " €");

    console.log("it is happening");
    $("#categories").css("display", "none !important");
    $("#special-offers").css("display", "none !important");
    $("#locations").css("display", "none !important");
    $("#payment").css("display", "flex");
    $("#payment").addClass("slideInDown");
    $("#payment").removeClass("fadeOut");
    $("#rent-a-car").removeClass("fadeInLeft");
    $("#locations").removeClass("fadeInLeft");
    $("#categories").removeClass("fadeInLeft");
    $("#special-offers").removeClass("fadeInLeft");

    var xicon5 = document.getElementById("xicon5");
    xicon5.onclick = function hide() {
      console.log("it is not happening");
      $(".animated").removeClass("slideInDown");
      $("#payment").addClass("fadeOut");
    };
  }
}

function officialPay() {
  console.log("OFFICIAL");
  var cardnumber = $("#credit-card").val();
  var expiration = $("#expiration").val();
  var security = $("#security").val();

  if (cardnumber.length < 3 || expiration.length < 3 || security.lenth < 3) {
    alert("Please, enter correct information!");
  } else {
    $("#success").text("Payment successful!");
    alert("Payment successful!");
  }
}
