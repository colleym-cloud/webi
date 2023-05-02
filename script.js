// Sign Up / Log In Form Validation
document.getElementById("signup-form").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("signup-form").elements[0];
    var passwordInput = document.getElementById("signup-form").elements[1];
  
    if (!validateEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  
    if (passwordInput.value.length < 8) {
      alert("Password should be at least 8 characters long.");
      event.preventDefault();
    }
  });
  
  // Booking Form Validation
  document.getElementById("booking-form").addEventListener("submit", function(event) {
    var pickupInput = document.getElementById("booking-form").elements[0];
    var destinationInput = document.getElementById("booking-form").elements[1];
    var passengerInput = document.getElementById("booking-form").elements[2];
  
    if (pickupInput.value.trim() === "") {
      alert("Please enter the pickup location.");
      event.preventDefault();
    }
  
    if (destinationInput.value.trim() === "") {
      alert("Please enter the destination.");
      event.preventDefault();
    }
  
    if (passengerInput.value < 1) {
      alert("Number of passengers should be at least 1.");
      event.preventDefault();
    }
  });
  
  // Add Passenger Form Validation
  document.getElementById("add-passenger-form").addEventListener("submit", function(event) {
    var bookingIdInput = document.getElementById("add-passenger-form").elements[0];
    var passengerNameInput = document.getElementById("add-passenger-form").elements[1];
  
    if (bookingIdInput.value.trim() === "") {
      alert("Please enter the booking ID.");
      event.preventDefault();
    }
  
    if (passengerNameInput.value.trim() === "") {
      alert("Please enter the passenger name.");
      event.preventDefault();
    }
  });
  
  // Email Validation Function
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  