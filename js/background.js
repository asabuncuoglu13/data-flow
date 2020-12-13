var modes = {
  educator: true,
  student: false
};

chrome.runtime.onInstalled.addListener(function ({ reason }) {
  if (reason === "install") {
    chrome.storage.sync.set({
      modes: modes,
      blockAds: true
    });
  }
});
