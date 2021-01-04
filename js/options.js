const applyChanges = () => {
    var modes = document.querySelectorAll(".modes:checked");
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let mode = modes[0].value;
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                file: "js/content.js"
            },
            function () {
                chrome.tabs.sendMessage(tabs[0].id, {
                    mode: mode
                });
                setTimeout(() => {
                    window.close();
                }, 200);
            }
        );
    });
};

document.getElementById("applyButton").addEventListener("click", applyChanges);

chrome.storage.sync.get(["modes"], function (storage) {
    document.getElementsByName("modes").forEach(function (item) {
        if (storage.modes[item.value]) {
            item.checked = true;
            applyMode(item.value);
        }
    });
});

var radios = document.getElementsByName("modes");
for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
        applyMode(this.value);
    };
}

function applyMode(mode) {
    showModeText(mode);
    updateOptions(mode);
}

function updateOptions(mode) {
    if (mode === "student") {
        enableStudentMode();
    } else {
        enableTeacherMode();
    }
}

function enableTeacherMode() {

}

function enableStudentMode() {

}

function showModeText(mode) {
    if (mode === "student") {
        document.getElementById("modeText").innerText =
            "In Student Mode, only data cards appear without further detailed explanation.";
    } else if (mode === "educator") {
        document.getElementById("modeText").innerText =
            "In Educator Mode, data cards and detailed explanation appear together.";
    } else {
        document.getElementById("modeText").innerText =
            "There was a problem occurred";
    }
}