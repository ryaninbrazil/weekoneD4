var countdownGenerator = function (x) {
  let countdown =  x; 
    return function () {
      if (countdown === 0) {
        console.log("Blast Off!")
    } else if (countdown < 0) {
        console.log("Rocket already gone, bub!")
    } else  {
        console.log("T-minus " + countdown)
    }
    return countdown--;
  }
};



var countdown = countdownGenerator(3);


countdown();// T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!