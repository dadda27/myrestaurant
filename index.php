<?php
  include "./fixed_pages/header.html";
?>

<!DOCTYPE html>
<html>

<head>

  <link rel="stylesheet" href="styles/main.css" />
  <link rel="stylesheet" href="styles/fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">

</head>

<body>

  <!--Start images Carousel-->
  <section>

    <div class="carousel-wrapper">
      <div class="imgs">

        <div class="img img0" id="lastclone">

        </div>
        <div class="img img1">

        </div>
        <div class="img img2">

        </div>
        <div class="img img3">

        </div>
        <div class="img img4">
<!-- Add here other img blocks
        </div>
        <div class=" img img5">

        </div>
        <div class="img img6">

        </div>
        <div class="img img7">

        </div>
        <div class="img img8">
-->
        </div>
        <div class="img img9" id="firstclone">

        </div>
      </div>

    <!--carousel arrows-->
    </div>
    <div class="arrows">
      <div class="arrow left-arrow">
        <i class="fas fa-angle-left"></i>
      </div>
      <div class="arrow right-arrow">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>

    <span class="carousel-message">
      <H1>Motivational message..<br> Eat well!!</H1>
    </span>

  </section>

  <!--lower carousel section-->
  <section>
    <div class="welcome-wrapper">
      <div class="welcome">

        <h1>INTERNATIONAL COUSINE</h1>

      </div>
    </div>
  </section>

  <!--background fixed last section with image-->
  <section>
    <div class="after-welcome-wrapper">
      <div class="after-welcome">

        <h1>More Food</h1>

      </div>
    </div>
  </section>

  <!Carousel Script>
  <script src="/js/main.js"></script>

</body>


<?php
  include "fixed_pages/footer.html";
?>

</html>
