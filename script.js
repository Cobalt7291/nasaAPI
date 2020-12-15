
$(document).ready(function() {
     
function MarsPhoto() {

  const $Mars_DIV = $('#mars-photos')

  MarsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-12-13&page=2&api_key=YXG9udc8M5QLeqooH25qwm8pkJ7FE4wRikvXk2hL";
  fetch(MarsURL)
  .then((response) => response.json())
  .then((data) => {
    //var marPics = data.url
    var photos = data.photos;
    ;
    photos.forEach(photo => {
      var marsIMG = $('<img>');
      console.log(photo.img_src);
      marsIMG.attr({
        src: photo.img_src,
        alt: `Mars Image ${photo}`,
        class: 'mars-image'
      });
      $Mars_DIV.append(marsIMG);
    });

  })
}

function POTD() {
  
  const $POTD_DIV = $('#pic-of-day');
  // const logoHead = "https://openclipart.org/download/321582/alien-head-silhouette.svg"
  queryURL =
    'https://api.nasa.gov/planetary/apod?date=2020-11-11&api_key=YXG9udc8M5QLeqooH25qwm8pkJ7FE4wRikvXk2hL';

  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      
      var potd = data.url;
      var imgClass = $('<img>');
    
      imgClass.attr({
        src: potd,
        alt: 'NASA Photo of the Day',
      });
          $POTD_DIV.append(imgClass);
        })
         
}
POTD();
MarsPhoto();
});
