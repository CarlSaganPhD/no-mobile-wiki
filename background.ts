chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      const newUrl = details.url.replace("//m.wikipedia.org/", "//en.wikipedia.org/");
  
      return { redirectUrl: newUrl };
    },
    { urls: ["*://*.m.wikipedia.org/*"] },
    ["blocking"]
  );
  