var _locationPopUp = {
  title: "Most Viewed Videos in Your Area (Istanbul)",
  explanation: "Based on your internet provider (Turk Telekom) info, we know that you are in Istanbul. According to our data scientists, you will be 80% likely to watch these recommended videos similar to your neighbours. this is why you are viewing this content now.",
  detailButton: "./detail/clickbait.html",
};

var _recommendationPopUp = {
  title: "Most Viewed Videos in Your Area (Istanbul)",
  explanation: "Based on your internet provider (Turk Telekom) info, we know that you are in Istanbul. According to our data scientists, you will be 80% likely to watch these recommended videos similar to your neighbours. this is why you are viewing this content now.",
  detailButton: "./detail/clickbait.html",
};


var uncheckedModes = {
  educator: false,
  student: false
};

chrome.runtime.onMessage.addListener(changeValue);

function changeValue(message) {
  uncheckedModes[message.mode] = true;

  addRecommButton();
  console.log("Hello");

  chrome.storage.sync.set({
    modes: uncheckedModes,
    blockAds: message.blockAds
  });
  chrome.runtime.onMessage.removeListener(changeValue);
}

// Youtube
var addRecommButton = () => {
  var _el = document.getElementById("contents");
  bindPopUpBeforeElement(_el, _recommendationPopUp);
};

var addRecommListButton = () => {
  var _el = document.getElementById("secondary");
  bindPopUpBeforeElement(_el, _recommendationPopUp);
};