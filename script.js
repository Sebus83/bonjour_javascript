//let message = "Bonjour !"

//console.log(message)

//let firstName = "Sébastien"

//message = ("Bonjour " + firstName + " !")

//console.log(message)

//encapsule le code précédent
function sayHello(hour){
   const firstName = prompt("Quel est ton prénom ?") 
   
   if (hour <= 17){
       let message = ("Bonjour " + firstName + " !")
       document.querySelector('h1').innerText = message;
    
  //console.log(message)
  
  
      
    } 
    else 
    { 
      let message = ("Bonsoir " + firstName + " !")
      document.querySelector('h1').innerText = message;
    
  //console.log(message)
   
        
  }

  
  }
sayHello(14)