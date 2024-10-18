//let message = "Bonjour !"

//console.log(message)

//let firstName = "Sébastien"

//message = ("Bonjour " + firstName + " !")

//console.log(message)

//encapsule le code précédent
function sayHello() {
  const firstName = prompt("Quel est ton prénom ?");
  const date = new Date();
  const hours = date.getHours();
  
  let message;
  if (hours <= 17) {
      message = `Bonjour ${firstName} !`;
  } else {
      message = `Bonsoir ${firstName} !`;
  }
  
  document.querySelector('h1').innerText = message;
  
}

sayHello();