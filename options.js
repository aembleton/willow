function saveOptions(e) {
    browser.storage.local.set({
      domains: document.querySelector("#domains").value
    });
    e.preventDefault();
  }
  
  function restoreOptions() { 
    var gettingItem = browser.storage.local.get('domains');
    gettingItem.then((res) => {
      document.querySelector("#domains").value = res.domains || 'grough.co.uk\nlatimes.com';
    });
  }
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);