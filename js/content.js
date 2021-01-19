var _emptyPopUp = {
  question: "",
  title: "",
  explanation: "",
  style:"",
  detailButton: "",
};


var _locationPopUp = {
  question: "How do I see this content?",
  title: "Most Viewed Videos in Your Area (Istanbul)",
  explanation: "Based on your internet provider (Turk Telekom) info, we know that you are in Istanbul. According to our data scientists, you will be 80% likely to watch these recommended videos similar to your neighbours. this is why you are viewing this content now.",
  style:"location",
  detailButton: "./detail/recommendation.html",
};

var _recommendationPopUp = {
  question: "Why do I see this content?",
  title: "Interest Groups Shapes the Recommendations",
  explanation: "The algorithm behind this system records the data when you like, watch, or search for content. The system fits your interest data with a similar group to better categorize their content.",
  style:"recommendation",
  detailButton: "./detail/recommendation.html",
};


var _securePasswordPopUp = {
  question: "Can strong password protect my loved ones?",
  title: "Give Time to Create a Real Secure Password",
  explanation: "You might think that your data is not important but from your profile you put your friends and family in danger. Someone might behave like you in an online environment and your close ones can believe this attack!",
  style:"pass-secure",
  detailButton: "./detail/secure.html",
};


var _twoFactorPopUp = {
  question: "Should I use two factor authentication?",
  title: "Use Two-Factor Authentication If It is Available",
  explanation: "It makes you more secure. The application will send a code to your personal smartphone to approve if it is really you!",
  style:"pass-twofactor",
  detailButton: "./detail/secure.html",
};

var uncheckedModes = {
  educator: false,
  student: false
};

chrome.runtime.onMessage.addListener(changeValue);

function changeValue(message) {
  uncheckedModes[message.mode] = true;

  addNudgeButtons();

  chrome.storage.sync.set({
    modes: uncheckedModes
  });
  chrome.runtime.onMessage.removeListener(changeValue);
}

// Youtube
var addNudgeButtons = () => {
  if (getLoginStatus()){
    bindPopUpBeforeElement(document.getElementById("contents"), _recommendationPopUp);
    bindPopUpBeforeElement(document.getElementById("avatar-btn"), _securePasswordPopUp);
  } else {
    bindPopUpBeforeElement(document.getElementById("contents"), _locationPopUp);
    bindPopUpBeforeElement(document.getElementById("end"), _twoFactorPopUp);
  }
};