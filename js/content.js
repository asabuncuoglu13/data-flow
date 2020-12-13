var uncheckedModes = {
  educator: false,
  student: false
};

chrome.runtime.onMessage.addListener(changeValue);

function changeValue(message) {
  uncheckedModes[message.mode] = true;

  addRecommButton();

  chrome.storage.sync.set({
    modes: uncheckedModes,
    blockAds: message.blockAds
  });
  chrome.runtime.onMessage.removeListener(changeValue);
}

// Youtube
var addRecommButton = () => {
  var _el = document.getElementById("contents");
  var _json = "Learn More";
  var _style = "margin: 0 auto; color: white;";
  bindPopUpBeforeElement(_el, _json, _style);
};
