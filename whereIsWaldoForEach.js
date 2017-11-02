//
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var located = arr[i]; 
      found(i); // execute callback
    }
  }
}



findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(position) {
  console.log("Found him! " + "He is located at index: " + position);
});
