const colorDisplay = document.getElementById('color-display');
    const colorButton = document.getElementById('color-button');

    const colors = ["Brown","Yellow","Pink","Purple","Black","Orange","Violet","Gray","Coral","Gold","Orange","Black","Burnt", "Orange","Crimson","Cyan","Earls", "Green","Magenta","White","Azure","Beige"];

    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function flipColor() {
      const newColor = getRandomColor();
      document.body.style.backgroundColor = newColor;
      colorDisplay.textContent = newColor;
    }

    colorButton.addEventListener('click', flipColor);