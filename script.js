let display = document.getElementById("display");

    function appendValue(value) {
      if (display.innerText === "0") {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    function clearDisplay() {
      display.innerText = "0";
    }

    function backspace() {
      let current = display.innerText;
      if (current.length === 1) {
        display.innerText = "0";
      } else {
        display.innerText = current.slice(0, -1);
      }
    }

    function calculate() {
      try {
        let expression = display.innerText.replace(/×/g, "*").replace(/÷/g, "/");
        let result = eval(expression);

        if (!isFinite(result)) {
          display.innerText = "Error";
        } else {
          display.innerText = result;
        }
      } catch (e) {
        display.innerText = "Error";
      }
    }

    document.addEventListener("keydown", function(event) {
      if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
      } else if (event.key === "Enter") {
        calculate();
      } else if (event.key === "Backspace") {
        backspace();
      } else if (event.key === "Escape") {
        clearDisplay();
      }
    });