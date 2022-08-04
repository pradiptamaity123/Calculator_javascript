// Todo: Make M+ M- and MC functional
let string = "";                                      // initially calculator screen set blank
let buttons = document.querySelectorAll('.button');   // select all the class name 'button'
Array.from(buttons).forEach((button)=>{               // to check all the button pressed
  button.addEventListener('click', (e)=>{             // find out which button is pressed   -- event name click
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""                                          // Logic to clear the screen 
      document.querySelector('input').value = string;     // clear the screen     
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;                // equal '=' operator is Working here. (Logic)
    document.querySelector('input').value = string;      // to print the result
      }
  })
})
