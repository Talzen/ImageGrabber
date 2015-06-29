
// Get on screen image
var screenImage = $("img");

var minImageWidth = 150;
var minImageHeight = 150;

var imagesSrc = [];
var maxImages = 50;
var index = 0;

screenImage.each(function() {
  
    if(index > maxImages){return false;}
    
    // Create new offscreen image to test
    var theImage = new Image();
    theImage.src = $(this).attr("src");

    // Get accurate measurements from that.
    var imageWidth = theImage.width;
    var imageHeight = theImage.height;
    
    if(imageWidth > minImageWidth && imageHeight > minImageHeight){
        
        imagesSrc.push(theImage.src);
        index++;
       
    }
});

localStorage["imagesSrc"] = JSON.stringify(imagesSrc);    // SAVE ALL THE VALID IMAGES SOURCE