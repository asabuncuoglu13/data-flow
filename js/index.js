chrome.storage.sync.get(["blockAds"], function (storage) {
    if (storage.blockAds) {
        enableBlockAds();
    }
});


var getLoginStatus = () => {
    return document.getElementById("avatar-btn") !== null;
};


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

var prepareTagContent = (_json) => {
    var tag = document.createElement("div");
    tag.innerHTML = _json.question;
    $(function () {
        tag.onclick = function (event) {
            $('<div id="dialog" class="card">\n' +
                '    <h2 id="title">' + _json.title + '</h2>\n' +
                '    <i id="detail" class="fas fa-arrow-right"></i>\n' +
                '    <p id="explanation">' + _json.explanation + '</p>\n' +
                '    <div class="pic ' + _json.style + '"></div>\n' +
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
    tag.className = "link";
    return tag;
};

var bindPopUpBeforeElement = (_el, _json) => {
    _el.parentNode.insertBefore(prepareTagContent(_json), _el);
};

var bindPopUpInsideElement = (_el, _json) => {
    _el.innerHTML = prepareTagContent(_json);
};