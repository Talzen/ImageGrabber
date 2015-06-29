
rootFolderID = "";

document.addEventListener('DOMContentLoaded', function () {


    chrome.browserAction.onClicked.addListener(function (tab) {

        chrome.bookmarks.search({title: "GreatPics"}, function (bookmark) {

       
            if (bookmark.length === 0) {

                chrome.bookmarks.create({parentId: "1", title: 'GreatPics'}, function (node) {

                    rootFolderID = node.id;
                    addPic(node.id);
                });
            }
            else { addPic(rootFolderID);
            }   
        });

        function addPic(parentID) {
      
            chrome.bookmarks.create({parentId: parentID, title: tab.url}, function(nodeChild) {
                
                var images = 15;
                chrome.bookmarks.create({parentId: nodeChild.id, url: tab.url}, function(){
                    
                        var opt = {
                            type: "basic",
                            title: "Deploy",
                            message: "Grabber Complete With "+images+" Images",
                            iconUrl: "images/icon.png"
                        };
                        chrome.notifications.create("", opt, function () {
                        });
                    
                });
                
                
               
            });
        }

    });

//chrome.browserAction.disable(1);

}, false);
