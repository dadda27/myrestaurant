<?php
  include "./header.html";
?>

<html>

<head>

  <link rel="stylesheet" href="../styles/contactos.css" />
  <link rel="stylesheet" href="../styles/fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">

</head>

<body>

  <!--CONTACTS-->
  <div class="contactos-wrapper">

    <div class="contacto contacto-text">
      <div class="">
        <p>Address:</p>
        <p>Av. Lorem ipsum 2, 41008 Sevilla</p>
      </div>

      <div class="link-maps">
        <a href="https://goo.gl/maps/A48FGNZMkYyNhAMk7"><i class="fa fa-map-marker" aria-hidden="true"></i>
        <p>Map</p></a>
      </div>

      <div class="">
        <span>Phone:</span>
        <span>+8458 05158118</span>
      </div>
    </div>

    <div class="contacto" id="maps">
    </div>

    <div class="contacto facebook">
      <a href="#"><i class="fab fa-facebook-square"></i></a>
    </div>

    <div class="contacto instagram">
      <a href="#"><i class="fab fa-twitter"></i></a>
    </div>

    <div class="contacto X">
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>


  </div>
  <!--END CONTACTS-->




  <!--SCRIPTS-->

  <!--SCRIPT GOOGLE MAPS-->
  <script>
    function initMap() {
      var location = {lat: 37.389091, lng: -5.984459};
      var map = new google.maps.Map(document.getElementById("maps"), {
          zoom: 15,
          center: location
      });
      var marker = new google.maps.marker({
        position: location,
        map: map
      });
    }
  </script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=<replace-with-your-Google-Map_apy_key>&callback=initMap">
  </script>
  <!--END SCRIPT GOOGLE MAPS-->

  <!--END-SCRIPTS-->

</body>

<?php
  include "./footer.html";
?>

</html>
