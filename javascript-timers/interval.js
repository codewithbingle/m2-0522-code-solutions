
var $countdownDisplay = document.querySelector('.countdown-display');
var $startingNumber = parseInt($countdownDisplay.textContent);

function countdownDisplay() {
  if ($startingNumber > 1) {
    $startingNumber--;
    $countdownDisplay.textcontent = $startingNumber;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(start);
  }

}

var intervId = setInterval(countdownDisplay, 1000);
