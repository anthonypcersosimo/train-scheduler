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
            trainNameF: trainName,
            trainDestF: trainDest,
            trainTimeF: trainTime,
            trainFreqF: trainFreq
        });
      
    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("child_added", function(childSnapshot) {

        
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val());
        var newSnap = childSnapshot.val();
        
        // Change the HTML to reflect
        var name = newSnap.trainNameF;
        var dest = newSnap.trainDestF;
        var time = newSnap.trainTimeF;
        var freq = newSnap.trainFreqF;

        // Moment JS
        var timeFormat = "h:mm a";
        var nextArrival = moment().add(freq, 'minutes');
        var convertedArrival = nextArrival.format(timeFormat);

        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(dest),
            $("<td>").text(freq),
            $("<td>").text(convertedArrival),
            $("<td>").text(freq),
        );

        $("#newTable").append(newRow);

        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
  

};