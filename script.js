// Write your JavaScript code here!

window.addEventListener("load", function() {

  //  let listedPlanets;
  //  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  //  let listedPlanetsResponse;
  //  listedPlanetsResponse.then(function (result) {
  //      listedPlanets = result;
  //      console.log(listedPlanets);
  //  }).then(function () {
  //      console.log(listedPlanets);
  //      Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        let submitForm = this.document.querySelector("form");
        submitForm.addEventListener("submit", function(event) {
          const doc = window.document;
          const pilotName = document.querySelector("input[name=pilotName]");
          const copilotName = document.querySelector("input[name=copilotName]");
          const fuelLevel = document.querySelector("input[name=fuelLevel]");
          const cargoMass = document.querySelector("input[name=cargoMass]");
          const list = document.getElementById("faultyItems");
          
          if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("All Fields Are Required");
            event.preventDefault();
          }
          formSubmission(doc, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
          
     });
   })
   
// });