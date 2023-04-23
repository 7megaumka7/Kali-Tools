document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.getElementById('terminal');
    function writeToTerminal(text) {
      terminal.value += text;
    }
    function handleUserInput(event) {
      if (event.key === 'Enter') {
        const input = event.target.value.trim();
        writeToTerminal('\n$ ' + input);
        if (input === 'clear') {
          terminal.value = '';
        } else {
          writeToTerminal('\n' + input);
        }
  
        event.target.value = '$ '; 
        event.preventDefault();
      }
    } 
    terminal.addEventListener('keydown', handleUserInput);
    terminal.value = '$ ';
  });
  