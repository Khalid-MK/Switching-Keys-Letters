chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(current_tab_info.url.startsWith("http")){
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log("Code Injected"))
        }
    })
})
