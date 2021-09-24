 //gallery
 var numOfPhotos = 6;
 var photos = []; //Declare an empty array to store image file names
 var fileNames = []; // Declare an empty array to store image file names
 var imageList = []; // Declare an empty array to store html list that contains an image
 var image; // Declare an empty variable to store assembled empty list codes
 var openList = "<li class='partner'>"; // Declare a variable to contain open list tag
 var closeList = "</li>"; // Declare a variable to contain close list tag

 // Create a loop to create 6 images starting with index of 0
 for (var i = 0; i < 6; i++) {
   fileNames.push("partner" + (i + 1)); //create image file name & store in array
   photos.push("<img src='images/" + fileNames[i] + ".png'>"); // Assemble file name into an image element & store in array
   image = openList + photos[i] + closeList; // Assembly everything so it's a full code
   imageList.push(image); // Store the fully assemble code of each image list
 }
 // Display all six image codes store in the array
 document.getElementById("partners").innerHTML = imageList.join("");