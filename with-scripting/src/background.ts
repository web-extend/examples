console.log("background");
chrome.tabs.onActivated.addListener((e) => {
  chrome.scripting.executeScript({
    target: { tabId: e.tabId },
    files: ["injected-script.js"], // 或者用 func 注入函数
  });

  chrome.scripting.insertCSS({
    target: { tabId: e.tabId },
    files: ["injected-style.css"],
  });
});
