// Define Global Variables

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCXzzj2noJFSwe2-5hgZKs5Uig0gENaqfc",
    authDomain: "project1-5e12c.firebaseapp.com",
    databaseURL: "https://project1-5e12c.firebaseio.com",
    projectId: "project1-5e12c",
    storageBucket: "project1-5e12c.appspot.com",
};

// Initialize Firebase
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();
database.ref().set({
    trainName: "",
    trainDest: "",
    trainTime: "",
    trainFreq: ""
});

// On page load
window.onload = function() {

    $("#submitButton").on("click", function () {
        event.preventDefault();
        
        var trainName = $("#trainNameInput").val();
        var trainDest = $("#destinationInput").val();
        var trainTime = $("#trainTimeInput").val();
        var trainFreq = $("#frequencyInput").val();

        console.log(trainName);
        console.log(trainDest);
        console.log(trainTime);
        console.log(trainFreq);

        database.ref().push({
            trainName: trainName,
            trainDest: trainDest,
            trainTime: trainTime,
            trainFreq: trainFreq
        });
      
    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

        // Log everything that's coming out of snapshot
        console.log(snapshot.val());
  
        // Change the HTML to reflect
        
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
  

};