var _emptyPopUp = {
  question: "",
  title: "",
  explanation: "",
  style:"",
  detailButton: "",
};

var _baitAdsPopUp = {
  question: "",
  title: "Most Viewed Videos in Your Area (Istanbul)",
  explanation: "Based on your internet provider (Turk Telekom) info, we know that you are in Istanbul. According to our data scientists, you will be 80% likely to watch these recommended videos similar to your neighbours. this is why you are viewing this content now.",
  style:"bait-ads",
  detailButton: "./detail/clickbait.html",
};

var _baitContentPopUp = {
  question: "Is it a clickbait content?",
  title: "The Thumbnail Images can be Misleading",
  explanation: "It is called “clickbait.” The content creator tries to grab your attention with misleading images and content.",
  style:"bait-content",
  detailButton: "./detail/clickbait.html",
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
  title: "Most Viewed Videos in Your Area (Istanbul)",
  explanation: "Based on your internet provider (Turk Telekom) info, we know that you are in Istanbul. According to our data scientists, you will be 80% likely to watch these recommended videos similar to your neighbours. this is why you are viewing this content now.",
  style:"recommendation",
  detailButton: "./detail/recommendation.html",
};

var _passwordSecondPopUp = {
  question: "Is my password, okay?",
  title: "A Hacker can Crack This Password in Seconds",
  explanation: "This password is one of the most commonly used passwords. If hackers intend to hack your account, this is one of the first passwords they will try.",
  style:"password-second",
  detailButton: "./detail/password.html",
};

var _passwordDayPopUp = {
  question: "Is my password, okay?",
  title: "A Hacker needs 2-3 days to crack this password",
  explanation: "This password is not easy to crack. After the occurrence of a potentıal securıty breach, you may have the chance to change your password.",
  style:"password-day",
  detailButton: "./detail/password.html",
};

var _passwordMonthPopUp = {
  question: "Is my password, okay?",
  title: "A Hacker needs months to crack this password",
  explanation: "This password consists of more than 8 characters, including numbers and symbols. It is not easy to crack ıt.",
  style:"password-month",
  detailButton: "./detail/password.html",
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
    modes: uncheckedModes,
    blockAds: message.blockAds
  });
  chrome.runtime.onMessage.removeListener(changeValue);
}

// Youtube
var addNudgeButtons = () => {
  // bindPopUpBeforeElement(document.getElementById("contents"), _passwordMonthPopUp);
  // bindPopUpBeforeElement(document.getElementById("contents"), _passwordDayPopUp);
  // bindPopUpBeforeElement(document.getElementById("contents"), _passwordSecondPopUp);
  bindPopUpBeforeElement(document.getElementById("contents"), _recommendationPopUp);
  //bindPopUpBeforeElement(document.getElementById("secondary"), _locationPopUp);
  bindPopUpInsideElement(document.getElementById("upnext"), _baitContentPopUp);
  //bindPopUpBeforeElement(document.getElementById("secondary"), _baitAdsPopUp);
};