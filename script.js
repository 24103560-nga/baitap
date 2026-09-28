// Runs when the mouse is over an image (or the image receives keyboard focus)
function upDate(previewPic) {
  // Step 1: check that the event fires
  console.log("Event triggered: mouse over / focus");

  // Step 2: check the alt text and source of the image
  console.log("alt text: " + previewPic.alt);
  console.log("image source: " + previewPic.src);

  // Step 3: change the text of the div with id="image"
  document.getElementById("image").textContent = previewPic.alt;

  // Step 5: change the background image of the div with id="image"
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

// Runs when the mouse leaves an image (or the image loses focus)
function unDo() {
  console.log("Event triggered: mouse out / blur");

  // Put the background image back to its original value
  document.getElementById("image").style.backgroundImage = "url('')";

  // Put the text back to the original message
  document.getElementById("image").textContent = "Hover over an image below to display here.";
}
