(function(){
    let screen= document.querySelector('.screen');          // to select the screen
    let buttons= document.querySelectorAll('.btn');         // to select all the buttons -- single class name btn for all
    let clear= document.querySelector('.btn-clear');        // to selece clear button
    let equal= document.querySelector('.btn-equal');         // to select equal button

    buttons.forEach(function(button){                       // to check all the button pressed
        button.addEventListener('click', function(e){       // find out which button is pressed   -- event name click
            let value= e.target.dataset.num;                // store the clicked button into value variable            
            screen.value += value;                          // to push the value into the screen
        })  
    });     
    
    equal.addEventListener('click', function(e){
        
        if (screen.value === '') {
            screen.value = "";
        }
         else{
            let answer= eval(screen.value); 
            screen.value= answer;   
        }

    });

   
    clear.addEventListener('click', function(e){
        screen.value= "";

    });

})();  

