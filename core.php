<?php
  if ($_GET['page']) {
    $page = $_GET['page'];
  } else {
    $page = 'main';
  }
?>

<?php
  if ($page) {
    // echo 'pages/'.$page.'.php';
    include('pages/'.$page.'.php');
  } else {
      // echo 'page/main.php';
      include('pages/main.php');
  }
?>