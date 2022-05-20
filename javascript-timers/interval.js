
var $countdownDisplay = document.querySelector('.countdown-display');
var $startingNumber = parseInt($countdownDisplay.textContent);

function countdownDisplay() {
  console.log($startingNumber);
  if ($startingNumber > 1) {
    $startingNumber--;
    $countdownDisplay.textContent = $startingNumber;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervId);
  }

}

var intervId = setInterval(countdownDisplay, 1000);
