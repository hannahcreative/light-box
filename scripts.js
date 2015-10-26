// step 1
// on click, capture ID of unqiue project box - use this, maybe data attributes

// step 2
//  map ID to data - data will have objects that store content for each of the projects  - each object will store content for specific project make sure each object has an ID as a value/property to connect with

// step 3
// populate lightbox container (sample div) with information - this can be done using vanilla JS or jQuery

// step 4
// close lightbox


//'un-hide' the lightbox div
function toggleLightBox() {
  $('.lightbox').toggle();
  $('.lightboxWrapper').toggle();
}

$(function() {
  // creating an object that contains child objects (these children contain the data for each project)
  var myList = {
    'project1': {
      title: "Project1 Title",
      desc: "Project1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'http://lorempixel.com/250/300/'
    },
    'project2': {
      title: "Project2 Title",
      desc: "Project2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'http://lorempixel.com/250/300/'
    },
    'project3': {
      title: "Project3 Title",
      desc: "Project3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'http://lorempixel.com/250/300/'
    },
    'project4': {
      title: "Project4 Title",
      desc: "Project4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'http://lorempixel.com/250/300/'
    }
  }; 

  // capturing the ID 
  var whatId;
  $('.box').click(function(event){
      whatId = this.id;
  
    // get project object 
    var currentProject = myList[whatId];
    // fill in img
    $('.lightboxImg').attr('src', currentProject.img);
    // fill in title  
    $('.projectTitle').text(currentProject.title);
    // fill in desc
    $('.projectDesc').text(currentProject.desc);
    // call function to hide the lightbox and wrapper
    toggleLightBox();
  });

  // use if statment, and event listener on the overlayouter - when someone clicks overlay outer make sure they didn't click the lighbox. on click of overlay outer check to see what was clicked (use e.target)
   // and if statement to check if they clicked on .lightboxWrapper directly, or something inside of it
  
  $('.lightboxWrapper').click(function(e){
    
    // turn the target element into a jQuery element
    // var clickedElement = $(e.target);

    // if (clickedElement.hasClass('lightboxWrapper')) {
    if (e.target.classList.contains('lightboxWrapper')) {
      console.log('success');
      toggleLightBox();
    }
  });
});



// Add in some kind of sorting function

// when someone clicks the filter for cheese button, 
// 1. select All the elements
// 2. Loop over the elements and for each element have an if statement that looks for matching catrogey do show or else hide