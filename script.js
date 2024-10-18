//let message = "Bonjour !"

//console.log(message)

//let firstName = "Sébastien"

//message = ("Bonjour " + firstName + " !")

//console.log(message)

//encapsule le code précédent
function sayHello() {
  const firstName = prompt("Quel est ton prénom ?"); // demande le prénom à l'utilisateur
  const date = new Date();   //récupération de la date
  const hours = date.getHours();  //récupération de l'heure
  
  let message;
  if (hours <= 17) {    //condition du message en fonction de l'heure
      message = `Bonjour ${firstName} !`;
  } else {
      message = `Bonsoir ${firstName} !`;
  }
  
  document.querySelector('h1').innerText = message; //envoie du message final dans h1 sur le index.html
  
}

sayHello();