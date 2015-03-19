/**
 * Created by Thanh on 3/10/2015.
 */

chrome.tabs.getAllInWindow(null, function(tabs) {
    tabs.forEach(function(tab) {
       myFunction(tab.title,tab.url,tab.icon);
    });
});

function myFunction(tabTitle,tabURL,tabIcon) {
    console.log(tabTitle);

    var newItemLink = document.createElement("a");
    var uList = document.getElementById("links");
    var newItem = document.createElement("li");
    newItemLink.setAttribute("id", "link")
    if(tabTitle.length > 20) tabTitle = tabTitle.substring(0,20);

    newItem.textContent = tabTitle;
    newItemLink.setAttribute("href",tabURL);
    newItemLink.setAttribute("background:url",tabIcon);
    /*not sure why this has not worked..
    also tried img src and applying both/either to newItem instead*/

    newItem.appendChild(newItemLink);
    uList.appendChild(newItem);
}





