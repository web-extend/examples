console.log("background");

chrome.tabs.onActivated.addListener((e) => {
  chrome.scripting.executeScript({
    target: { tabId: e.tabId },
    files: ["static/js/injected-script.js"],
  });

  chrome.scripting.insertCSS({
    target: { tabId: e.tabId },
    files: ["static/css/injected-style.css"],
  });
});
