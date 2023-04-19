
var passConfirm = function() {

    var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

    if (password.value == confirm_password.value) {
      document.getElementById("Message").style.color = "Green";
      document.getElementById("Message").innerHTML = "Passwords match!"
    } else {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").innerHTML = "Passwords do NOT match!"
    }
  }