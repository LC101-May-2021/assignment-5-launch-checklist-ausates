// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "" || testInput === null || testInput === undefined){
    return  "Empty"
   } else if ((!isNaN(testInput))){
     return "Is a Number"
   } else if (isNaN(testInput)) {
     return "Not a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let listPilot = document.getElementById("pilotStatus");
  let listCopilot = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let launchStatus = document.getElementById("launchStatus");
  
   if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number"){
     alert("Pilot must be a word or letters")
   }
   if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number"){
    alert("CoPilot must be a word or letters")
  }
  if (validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number"){
    alert("FuelLevel must be a number")
  }
  if (validateInput(cargoLevel) === "Empty" || validateInput(cargoLevel) === "Not a Number"){
    alert("CargoLevel must be a number")
  }
  
  listPilot.innerText = `Pilot ${pilot} is ready to launch.`;
  listCopilot.innerText = `Copilot ${copilot} is ready to launch.`;
  list.style.visibility = 'visible';
  if (fuelLevel < 10000){
    fuelStatus.innerText = "Fuel Level too low for launch";
    launchStatus.innerText = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
  }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
