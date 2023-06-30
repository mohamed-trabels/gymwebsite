
    var welcomeMsg = "Welcome to the World of Fitness";
    var delay = 100; // Delay between displaying each character
    
    displayMessage(welcomeMsg);
  
    function displayMessage(message) {
      var index = 0;
      var interval = setInterval(function() {
        $('#welcomeMsg').append(message[index]);
        index++;
        if (index >= message.length) {
          clearInterval(interval);
        }
      },
  
  