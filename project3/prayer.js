// Get all elements with class name flex item //

// make a four each loop that will go over each element, add event listener to it  //
document.querySelectorAll('.flex-item').forEach(item => {
  item.addEventListener('click', event => {
    replaceProgramText(pickText(item.id))
    //handle click
  })
})
    //Add that image to the arraylist
// click listner //

// when that event listner is called we want to call a function that
// replaces information inside the program element //



// new function "replace program text" inside the function a bunch of if statements //
function replaceProgramText(text){

  document.getElementById('program').innerHTML = text

}
function pickText(id){
  switch(id) {
  case "apple":
    return "Apple <br> <br> Emojis displayed on iPhone, iPad, Mac, Apple Watch and Apple TV use the Apple Color Emoji font installed on iOS, macOS, watchOS and tvOS. Some Apple devices support Animoji and Memoji. Two Private Use Area characters are not cross-platform compatible but do work on Apple devices:"

  case "emojidex":
    return "Emojidex <br> <br> Emoji images from emojidex are part of an emoji as a service platform, which can be used on any web site or app that includes the emojidex libraries. <br> <br>  Emojipedia displays all original emojidex images for Unicode emoji characters. User-submitted emoji images which are outside of the standard emoji set can be found on the emojidex website."
  case "fb":
    return "Facebook <br> <br> Facebook emojis appear for users of the Facebook website, Messenger for web, and Messenger for Android. Facebook apps for iOS and Android use native emojis for their respective platform instead of Facebook's own emoji images. As of March 2019, Facebook supports the Transgender Pride Flag emoji. <br> <br>  Support for Emoji 13.0 is now available for some Facebook users, with rollout continuing."
  case "google":
    return "Google <br> <br> Google emoji images are used on most Android devices, Gmail Web Interface, Google Meet, and ChromeOS. These are provided as part of the Noto Emoji project. These images are also used for Slack on non-Apple platforms including Windows, Linux, and Android."
  case "joypixels":
   return "JoyPixels <br> <br> JoyPixels is the emoji set known as EmojiOne prior to 2019-03-28. Images from JoyPixels are available under paid licenses, with the initial releases being open source. <br> <br>  A low resolution option is available free for personal use."
  case "microsoft":
    return "Microsoft <br> <br> Emojis from Microsoft are supported on PCs and tablets running Windows 10, as well as Xbox. These are provided by the Segoe Color Emoji font, although some applications continue to show black and white emojis from an earlier release. <br> <br>  Support for Emoji 13.0 is coming soon. Now availalable for Windows Insider channels."
  case "openmoji":
    return "OpenMoji <br> <br> OpenMoji is a free and open source emoji library which can be used for a variety of purposes. Available with a Creative Commons (Attribution-ShareAlike 4.0 International) license. <br> <br>  Emojis from OpenMoji 13.0 are displayed below."
  case "samsung":
    return "Samsung <br> <br> Samsung devices use their own emoji designs which are different to those used on other Android devices. These glossy emojis appear on devices such as the Samsung Galaxy and Galaxy Note series and are updated as part of the Samsung One UI interface layer (previously Samsung Experience, before that Samsung TouchWiz) which runs on top of Android. <br> <br>  Note: WhatsApp, Twitter, and Facebook have their own emoji designs which are used instead of Google or Samsung emojis in their respective apps on Android devices."
  case "twitter":
    return "Twitter <br> <br> Twitter supports all standard emojis, and these can be inserted via emoji keyboard or picker. Alternatively emojis can be copy and pasted by choosing from the emojis on this page. <br> <br>  Twemoji is an open source emoji project, created and owned by Twitter. Emojis from Twemoji are found on the Twitter.com website, TweetDeck, Twitter for Android, Discord, Roblox and other apps. The native Twitter app for iOS uses native emojis provided by Apple."
  case "whatsapp":
    return "WhatsApp <br> <br> WhatsApp has its own emoji designs which are displayed on all WhatsApp for Android and WhatsApp Web. <br> <br>  One emoji supported by WhatsApp but no other platform is the Texas Flag emoji. This is a valid subdivision flag supported by Unicode, but not listed within any Unicode emoji release and as of 2019 is not supported by any other major vendor."
}
}
