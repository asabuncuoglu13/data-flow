chrome.storage.sync.get(["pages", "blockAds"], function (storage) {
  Object.keys(storage.pages).map(item => {
    if (storage.pages[item]) blur(item, "10px");
  });
  if (storage.blockAds) {
    enableBlockAds();
  }
});

var blur = (key, value) => {
  document.documentElement.style.setProperty(
    `--blur-value-${key}`,
    `blur(${value})`
  );

};


var enableBlockAds = () => {
  setInterval(() => {
    for (const button of document.getElementsByClassName(
      "ytp-ad-skip-button"
    )) {
      button.click();
    }
  }, 200);
};

var bindPopUpBeforeElement = (_el, _json, _style) => {
  var tag = document.createElement("div");
  //tag.innerHTML = "Learn More";
  //tag.innerHTML = convertToHTMLText(_json);
  tag.innerHTML = _json;
  //tag.style.cssText = "margin: 0 auto; color: white;"
  tag.style.cssText = _style;
  //var _el = document.getElementById("contents");
  var parent = _el.parentNode;
  parent.insertBefore(tag, _el);
}

var bindPopUpAfterElement = (_el, _json, _style) => {
  var tag = document.createElement("div");
  tag.innerHTML = convertToHTMLText(_json);
  tag.style.cssText = _style;
  var parent = _el.parentNode;
  parent.insertBefore(tag, _el.nextSibling);
}

var prependPopUpInsideElement = (_el, _json, _style) => {
  var tag = document.createElement("div");
  tag.innerHTML = convertToHTMLText(_json);
  tag.style.cssText = _style;
  _el.appendChild(tag);
}

var appendPopUpInsideElement = (_el, _json, _style) => {
  var tag = document.createElement("div");
  tag.innerHTML = convertToHTMLText(_json);
  tag.style.cssText = _style;
  _el.prepend(tag);
}