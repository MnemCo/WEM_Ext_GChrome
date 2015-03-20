/**
 * Created by Thanh on 3/10/2015.
 */

chrome.tabs.getAllInWindow(null, function(tabs) {
    tabs.forEach(function(tab) {
       myFunction(tab.title,tab.url,tab.favIconUrl);
    });
});

function myFunction(tabTitle,tabURL,tabIcon) {
    /*console.log(tabTitle);*/

    var uList = document.getElementById("links");
    var newItem = document.createElement("li");
    var newItemLink = document.createElement("a");
    var favicon = document.createElement("img");
    if(tabTitle.length > 20) tabTitle = tabTitle.substring(0,20);

    newItemLink.textContent = tabTitle;

    favicon.setAttribute("src",tabIcon);
    favicon.setAttribute("id", "link");
    newItemLink.setAttribute("href",tabURL);

    newItemLink.appendChild(favicon);
    newItem.appendChild(newItemLink);
    uList.appendChild(newItem);
}





