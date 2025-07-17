console.log("background");

chrome.tabs.onActivated.addListener((e) => {
  chrome.scripting.executeScript({
    target: { tabId: e.tabId },
    files: ["scripting/injected-script.js"],
  });

  chrome.scripting.insertCSS({
    target: { tabId: e.tabId },
    files: ["scripting/injected-style.css"],
  });
});
