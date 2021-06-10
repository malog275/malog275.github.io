// Get all elements with class name flex item //
function getElements() {
  let bubbles = document.querySelectorAll(".flex-item")
// make a four each loop that will go over each element, add event listener to it  //
document.addEventListener('click', getElements);
ArrayList<Image> imageArrayList = new ArrayList<>();//Creates the list that will store images
for(int i = 0; i < getObjects().size(); i++) {
    Image image = new Image(getObjects().get(i).getImagePath());//Create the image you want to store
    imageArrayList.add("images/prayer/apple.png");
    imageArrayList.add("images/prayer/emojidex.png");
    imageArrayList.add("images/prayer/fb.png");
    imageArrayList.add("images/prayer/google.png");
    imageArrayList.add("images/prayer/joypixels.png");
    imageArrayList.add("images/prayer/microsoft.png");
    imageArrayList.add("images/prayer/openmoji.png");
    imageArrayList.add("images/prayer/samsung.png");
    imageArrayList.add("images/prayer/twitter.png");
    imageArrayList.add("images/prayer/whatsapp.png");
    //Add that image to the arraylist
}
// click listner //

// when that event listner is called we want to call a function that replaces information inside the program element //

function getProgram() {
  if (event.click == (".apple")) {
    let programAdder = document.createElement(".program");
    programAdder.classlist.add(".program")
    document.body.appendChild(programAdder); //child and parent are html //
    getElements ();
  } else {

  }

// new function "replace program text" inside the function a bunch of if statements //
