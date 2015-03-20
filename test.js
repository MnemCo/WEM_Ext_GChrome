/**
 * Created by Thanh on 3/10/2015.
 */

chrome.tabs.query({}, function(tabs) {tabs.forEach(function(tab) {myFunction(tab.title,tab.url,tab.favIconUrl);});});

function myFunction(tabTitle,tabURL,tabIcon) {
    /*console.log(tabTitle);*/
    var uList = document.getElementById("list");
    var newItem = document.createElement("li");
    var newItemLink = document.createElement("a");
    var favicon = document.createElement("img");
    if(tabTitle.length > 70) tabTitle = tabTitle.substring(0,70);

    newItem.setAttribute("id", "listItem");
    newItemLink.textContent = tabTitle;

    favicon.setAttribute("src",tabIcon);
    favicon.setAttribute("id", "favicons");
    newItemLink.setAttribute("href",tabURL);
    newItemLink.setAttribute("id", "link");

   newItemLink.appendChild(favicon);
    newItem.appendChild(newItemLink);
    uList.appendChild(newItem);
}





