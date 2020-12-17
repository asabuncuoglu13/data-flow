chrome.storage.sync.get(["blockAds"], function (storage) {
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

var bindPopUpBeforeElement = (_el, _json) => {
    var tag = document.createElement("div");
    tag.innerHTML = "Learn More";
    $(function () {
        tag.onclick = function (event) {
            $('<div id="dialog" class="card">\n' +
                '    <h2 id="title">' + _json.title + '</h2>\n' +
                '    <i id="detail" class="fas fa-arrow-right"></i>\n' +
                '    <p id="explanation">' + _json.explanation + '</p>\n' +
                '    <div class="pic"></div>\n' +
                '    <div class="social">\n' +
                '        <i id="facebook" class="fab fa-facebook-f"></i>\n' +
                '        <i id="twitter" class="fab fa-twitter"></i>\n' +
                '        <i id="instagram" class="fab fa-instagram"></i>\n' +
                '        <i id="github" class="fab fa-github"></i>\n' +
                '    </div>\n' +
                '    <button>\n' +
                '    </button>\n' +
                '</div>').appendTo('body');
            event.preventDefault();

            $("#dialog").dialog({
                width: 600,
                modal: true,
                close: function (event, ui) {
                    $("#dialog").remove();
                }
            });
        } //close click
    });
    tag.style.cssText = "margin: 0 auto; color: white; cursor:pointer;";
    _el.parentNode.insertBefore(tag, _el);
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
