// step 1
// on click, capture ID of unqiue project box - use this, maybe data attributes

// step 2
//  map ID to data - data will have objects that store content for each of the projects  - each object will store content for specific project make sure each object has an ID as a value/property to connect with

// step 3
// populate lightbox container (sample div) with information - this can be done using vanilla JS or jQuery

// step 4
// close lightbox

$(function() {
  // creating an object that contains child objects (these children contain the data for each project)
  var myList = {
    'project1': {
      title: "Project1 Title",
      desc: "Project1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'http://placehold.it/350x150'
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
  });
});

