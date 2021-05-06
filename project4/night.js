// console.log is telling the website to do something, and also used to check if code is working //
console.log("hello, georgia your javascript is working IF you can see this message")
// function is your idea, recipe for you idea and contains all code for idea //
function putCloudsAllOverPage() {
  // get all of the html elements that have the class bubble that ive written that I know are in my index.html //
  let clouds = document.querySelectorAll(".clouds")

  clouds.forEach(function(clouds) {
    let randomHorizontal = Math.floor(Math.random() * window.innerWidth);
    let randomVertical = Math.floor(Math.random() * window.innerHeight);

  //  console.log(randomHorizontal, randomVertical) // comma makes you call multiple variable at once//
    clouds.style.top = randomVertical + "px";
    clouds.style.left = randomHorizontal + "px"; // + px means pixels //
    })
  // let is a variable always when you say let you name your variable and equal to something//
  // document means get the document and select all items //
  // I know that there are 6 bubbles,  I want to position EACH of thosebubblein adifferent PLACE on the page //
  // what is in the for each is what you are calling //
  // style is css //
  //random horizontal is making the bubbles random place when refresh //
  // Math.floor is whole numbers //
}

document.addEventListener('keydown', addClouds);
let dayTimeArray = [
  "images/night/nightcloud4.png",
  "images/night/nightcloud5.png",
];
function addClouds() {
    // console.log(dayTimeArray.length) //
    let randomNumber = Math.floor(Math.random() * dayTimeArray.length);
    console.log(randomNumber)
    let cloudDiv = document.createElement("div");
    cloudDiv.classList.add("clouds");
    let cloudImage = document.createElement("img");
    cloudImage.src = dayTimeArray[1];
    cloudDiv.appendChild(cloudImage);
    document.body.appendChild(cloudDiv); //child and parent are html //
    putCloudsAllOverPage();

// if statememnt is used when you want something specific to happen //
}
//key down means everytime someone presses a key it runs the function or if it was click it runs everytime it clicks//

putCloudsAllOverPage();
// in order to make a function work you have to call it, this is how it is called //
// array comes up when function is working //
