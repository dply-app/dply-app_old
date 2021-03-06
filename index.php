<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dply.app - Main </title>
  <link rel="shortcut icon" href="/static/image/favicon.png" type="image/x-icon">
  <!-- Bootstrap , fonts & icons  -->
  <link rel="stylesheet" href="/static/css/bootstrap.css">
  <link rel="stylesheet" href="/static/fonts/icon-font/css/style.css">
  <link rel="stylesheet" href="/static/fonts/typography-font/typo.css">
  <link rel="stylesheet" href="/static/fonts/fontawesome-5/css/all.css">
  <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <!-- Plugin'stylesheets  -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-default/default.css">
  <link rel="stylesheet" href="/static/plugins/aos/aos.min.css">
  <link rel="stylesheet" href="/static/plugins/fancybox/jquery.fancybox.min.css">
  <link rel="stylesheet" href="/static/plugins/nice-select/nice-select.min.css">
  <link rel="stylesheet" href="/static/plugins/slick/slick.min.css">
  <!-- Vendor stylesheets  -->
  <link rel="stylesheet" href="/static/css/main.css">
  <!-- Custom stylesheet -->
  <link rel="stylesheet" href="/static/css/fonts.css">
</head>

<body data-theme-mode-panel-active data-theme="light" style="font-family: 'Mazzard H';">
  <div class="site-wrapper overflow-hidden position-relative">
    <!-- Site Header -->
    <!-- Preloader -->
    <!-- <div id="loading">
    <div class="preloader">
     <img src="/static/image/preloader.gif" alt="preloader">
   </div>
   </div>    -->
    <!--Site Header Area -->
    <header class="site-header site-header--menu-right sticky-menu-bg dark-mode-texts site-header--absolute site-header--sticky">
      <div class="container">
        <nav class="navbar site-navbar">
          <!-- Brand Logo-->
          <div class="brand-logo">
            <a href="#">
              <!-- light version logo (logo must be black)-->
              <h4 alt="" class="light-version-logo" style="color: #000;">Dply.app</h4>
              <!-- <img src="/static/image/logo/logo-black.png" alt="" class="light-version-logo"> -->
              <!-- Dark version logo (logo must be White)-->
              <h4 alt="" class="dark-version-logo" style="color: #fff;">Dply.app</h4>
              <!-- <img src="/static/image/logo/logo-white.png" alt="" class="dark-version-logo"> -->
            </a>
          </div>
          <div class="menu-block-wrapper">
            <div class="menu-overlay"></div>
            <nav class="menu-block" id="append-menu-header">
              <div class="mobile-menu-head">
                <div class="go-back">
                  <i class="fa fa-angle-left"></i>
                </div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
              </div>
              <ul class="site-menu-main">
                <!-- <li class="nav-item nav-item-has-children">
                  <a href="#" class="nav-link-item drop-trigger">Pages <i class="fas fa-angle-down"></i>
                  </a>
                  <ul class="sub-menu" id="submenu-9">
                    <li class="sub-menu--item">
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li class="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" class="drop-trigger">Utility<i class="fas fa-angle-down"></i>
                      </a>
                      <ul class="sub-menu" id="submenu-15">
                        <li class="sub-menu--item">
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="terms-conditions.html">Terms & Conditions</a>
                        </li>
                        <li class="sub-menu--item">
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li> -->
                <li class="nav-item">
                  <a href="faq" class="nav-link-item">FAQ</a>
                </li>
                <li class="nav-item">
                  <a href="https://github.com/dply-app" target="_blank" class="nav-link-item">GitHub</a>
                </li>
                <li class="nav-item">
                  <a href="discord" target="_blank" class="nav-link-item">Support</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header-btn sign-in-header-btn-1 ms-auto d-none d-xs-inline-flex">
            <a class="btn download-trail-btn btn focus-reset" href="#ealry_access">
              ?????? ??????
            </a>
          </div>
          <!-- mobile menu trigger -->
          <div class="mobile-menu-trigger">
            <span></span>
          </div>
          <!--/.Mobile Menu Hamburger Ends-->
        </nav>
      </div>
    </header>
    <!-- navbar- -->
    <!-- Hero Area -->
    <div class="hero-area-l3 background-property" style="background: url(/static/image/landing-3/hero-bg.png);">
      <div class="hero-l3-shape-1 d-none d-lg-block" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
        <img class="horizontal-move" src="/static/image/landing-3/banner-shape-1.png" alt="image">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="offset-xxl-7 col-xxl-5 offset-xl-6 col-xl-6 offset-lg-4 col-lg-8 col-md-10" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <div class="banner-content">
              <div class="hero-l3-shape-2 d-none d-md-block" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                <img class="vertical-move" src="/static/image/landing-3/banner-shape-2.png" alt="image">
              </div>
              <div class="content">
                <h2>Dply.app?????? ????????? ???????????? ???????????? ????????? ?????????!</h2>
                <p>Dply.app??? ???????????? ?????? ????????? ???????????? ?????? ???????????? ???????????? ???????????? ??????????????????.</p>
              </div>
              <div class="hero-l3-btn-group">
                <a href="#ealry_access" class="btn focus-reset btn-style-04 lets-talk-btn">?????? ??????</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Features Area -->
    <div class="feature-area-l3">
      <div class="container">
        <div class="row feature-l3-1-items justify-content-center">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <div class="feature-card d-flex">
              <div class="number">
                <span>01</span>
              </div>
              <div class="content">
                <h4>????????? ??????</h4>
                <p>????????? ??????????????? ?????? ????????? ???????????? ??? ?????? Host Panel ???????????? ???????????????. </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <div class="feature-card d-flex">
              <div class="number">
                <span>02</span>
              </div>
              <div class="content">
                <h4>????????? ?????????</h4>
                <p>?????? ?????? ?????? ?????? ??? ????????? ?????? ????????? ???????????????.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
            <div class="feature-card d-flex">
              <div class="number">
                <span>03</span>
              </div>
              <div class="content">
                <h4>????????? ????????????</h4>
                <p>????????? ???????????? ???????????? ????????? ??? ????????????. <a href="faq">?????? ??????</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content Area-1  -->
    <div class="content-are-l3-1">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-5 col-md-10" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
            <div class="content-are-l3-1-content section__heading text-center text-lg-start">
              <h2>?????????, ??????, ?????????. </h2>
              <p>?????? ?????? ????????? ????????? ???????????? ???????????? ??? ??? ?????? Dply.app??? ???????????? ?????????! </p>
              <a href="#ealry_access" class="btn btn-style-04 focus-reset lets-talk-btn">?????? ??????</a>
            </div>
          </div>
          <div class="offset-lg-2 col-lg-5 col-md-8" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
            <div class="content-l3-1-counter-area">
              <div class="content-l3-1-image ">
                <img class="w-100 d-none d-md-block" src="/static/image/landing-3/counter-img.png" alt="img">
                <!-- <div class="counter-box-l3 text-center text-md-start">
                  <div class="counter-items">
                    <div class="counter-content">
                      <h2><span class="counter">100</span>+</h2>
                      <p>Dply??? ???????????? ?????????</p>
                    </div
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php
      require('register/register.php');
    ?>
    <!-- Footer Area -->
    <!-- <footer class="footer-area-l3 position-relative">
      <div class="container">
        <div class="row justify-content-center footer-l3-area-items">
          <div class="col-xl-4 col-lg-4 col-sm-9">
            <div class="footer-content-l3 text-sm-center text-lg-start">
              <a href="#"><h4 style="color: #000;">Dply.app</h4></a><br/>
              <p>Copyright &copy; 2021 Dply.app, All Rights Reserved.</p>
            </div>
            </div>
          </div>
      </div>
    </footer> -->
  </div>
  <!-- Vendor Scripts -->
  <script src="/static/js/vendor.min.js"></script>
  <!-- Plugin's Scripts -->
  <link rel="stylesheet" href="/static/plugins/jquery-ui/jquery-ui.css">
  <script src="/static/plugins/jquery-ui/jquery-ui.js"></script>
  <script src="/static/plugins/fancybox/jquery.fancybox.min.js"></script>
  <script src="/static/plugins/nice-select/jquery.nice-select.min.js"></script>
  <script src="/static/plugins/aos/aos.min.js"></script>
  <script src="/static/plugins/slick/slick.min.js"></script>
  <script src="https://porjoton.netlify.app/mekanic/js/waypoints.min.js"></script>
  <script src="/static/plugins/counter-up/jquery.counterup.min.js"></script>
  <script src="/static/plugins/isotope/isotope.pkgd.min.js"></script>
  <script src="/static/plugins/isotope/packery.pkgd.min.js"></script>
  <script src="/static/plugins/isotope/image.loaded.js"></script>
  <script src="/static/plugins/menu/menu.js"></script>
  <!-- Activation Script -->
  <script src="/static/js/custom.js"></script>
  <script src="/static/js/scripts.js"></script>
  <script src='https://www.hCaptcha.com/1/api.js' async defer></script>
  <script>$("#birth").datepicker();</script>
</body>

</html>