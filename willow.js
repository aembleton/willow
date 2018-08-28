var redirect_callback = function redirect(requestDetails) {
    return {redirectUrl: "https://outline.com/" + requestDetails.url};
}

function domainChanged(changes, area) {
  var newDomains = changes["domains"].newValue.split("\n")
  .map(domain => "*://*."+domain+"/*");
  console.log(newDomains);
  domains = newDomains;
  updateListener();
}

function updateListener() {
  browser.webRequest.onBeforeRequest.removeListener(redirect_callback);
  browser.webRequest.onBeforeRequest.addListener(
    redirect_callback,
    {urls: domains, types: ["main_frame"]},
    ["blocking"]
  );
}

var domains = ["*://*.grough.co.uk/*", "*://*.latimes.com/*"];
browser.storage.onChanged.addListener(domainChanged);
updateListener();