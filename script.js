const buttons = document.querySelectorAll('.btn');
const historyDisplay = document.getElementById('history');
const resultDisplay = document.getElementById('result');
let history = '';
let result = '';

// Function to handle input clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === 'DEL') {
      // Delete last character
      result = result.slice(0, -1);
      if (result === '') result = '0';
    } else if (value === 'RESET') {
      // Reset everything
      result = '0';
      history = '';
    } else if (value === '=') {
      // Calculate result
      try {
        result = result.replace('x', '*');
        result = eval(result).toString();
        history = ''; // Clear history after calculation
      } catch {
        result = 'Error';
      }
    } else {
      // Append numbers and operators to result
      if (result === '0' || result === 'Error') {
        result = value;
      } else {
        result += value;
      }
    }

    // Update display
    historyDisplay.innerText = history;
    resultDisplay.innerText = result;
  });
});
