$(document).ready(function () {
  function POTD() {
    const $POTD_DIV = $('#pic-of-day');

    queryURL =
      'https://api.nasa.gov/planetary/apod?date=2020-12-13&api_key=YXG9udc8M5QLeqooH25qwm8pkJ7FE4wRikvXk2hL';

    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        var potd = data.url;
        var imgClass = $('<img>');

        imgClass.attr({
          src: potd,
          class: 'size',
          alt: 'NASA Photo of the Day',
        });
        $POTD_DIV.append(imgClass);
      });
  }

  POTD();
});
