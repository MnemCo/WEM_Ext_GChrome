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
    var image = document.createElement("img");
    if(tabTitle.length > 20) tabTitle = tabTitle.substring(0,20);

    newItemLink.textContent = tabTitle;

    image.setAttribute("src",tabIcon);
    /*
     newItemLink.setAttribute("href",tabURL);
     newItemLink.setAttribute("id", "link");
     newItemLink.image(tabIcon);
    */



    /*not sure why this has not worked..
    also tried img src and applying both/either to newItem instead*/
    newItemLink.appendChild(image);
    newItem.appendChild(newItemLink);
    uList.appendChild(newItem);
}





