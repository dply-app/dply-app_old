<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-default/default.css">
</head>
<body>
  <?php
    $tag = urlencode($_POST['tag']);
    if(isset($_POST['h-captcha-response']) && !empty($_POST['h-captcha-response']))
    {
          $secret = '0x1f2cB520804D5ba5f5942Ff74bbF99f6d8283344';
          $verifyResponse = file_get_contents('https://hcaptcha.com/siteverify?secret='.$secret.'&response='.$_POST['h-captcha-response'].'&remoteip='.$_SERVER['REMOTE_ADDR']);
          $responseData = json_decode($verifyResponse);
          if($responseData->success)
          {
              $succMsg = 'Your request have submitted successfully.';
              //echo $succMsg;
              echo '<form action="https://stibee.com/api/v1.0/lists/eZJhb3ih1rJwsF6zBrFhcmVCDSNqkg==/public/subscribers" method="POST" accept-charset="utf-8" class="stb_form" name="stb_subscribe_form" id="stb_subscribe_form">';
                echo '<input type="hidden" name="name" id="name" value="'.$_POST['name'].'">';
                echo '<input type="hidden" name="nickname" id="nickname" value="'.$_POST['nickname'].'">';
                echo '<input type="hidden" name="email" id="email" value="'.$_POST['email'].'">';
                echo '<input type="hidden" name="tag" id="tag" value="'.$_POST['tag'].'">';
                echo '<input type="hidden" name="birth" id="birth" value="'.$_POST['birth'].'">';
                echo '<input type="hidden" name="phone" id="phone" value="'.$_POST['phone'].'">';
              echo '</form>';
              echo '<script type="text/javascript" src="https://s3.ap-northeast-2.amazonaws.com/resource.stibee.com/subscribe/stb_subscribe_form.js"></script>';
              echo "<script>window.addEventListener('load', () => {document.body.querySelector('#stb_subscribe_form').submit();});</script>";
          }
          else
          {
              $errMsg = 'Robot verification failed, please try again.';
              echo $errMsg;
              echo "<script>";
              echo "Swal.fire({icon: 'error', title: 'hCaptcha Error', html: 'hCaptcha 진행 중 오류가 발생하였습니다.<br>hCaptcha를 다시 진행해 주십시오.'})";
              echo ".then(() => {location.replace('/?restart=1&name=".$_POST['name']."&nickname=".$_POST['nickname']."&email=".$_POST['email']."&birth=".$_POST['birth']."&phone=".$_POST['phone']."&tag=".$tag."#ealry_access')});";
              echo "</script>";
          }
    } else {
      $errMsg = 'Robot verification failed, please try again.';
      echo "<script>";
      echo "Swal.fire({icon: 'error', title: 'hCaptcha Error', html: 'hCaptcha를 진행하지 않았습니다.<br>hCaptcha를 진행해 주십시오.'})";
      echo ".then(() => {location.replace('/?restart=1&name=".$_POST['name']."&nickname=".$_POST['nickname']."&email=".$_POST['email']."&birth=".$_POST['birth']."&phone=".$_POST['phone']."&tag=".$tag."#ealry_access')});";
      echo "</script>";
    }
  ?>

  <!--
  
  이름: <?php echo $_POST['name']; ?><br /><br/>

  닉네임: <?php echo $_POST['nickname']; ?><br /><br/>

  이메일: <?php echo $_POST['email']; ?><br /><br/>

  태그: <?php echo $_POST['tag']; ?><br /><br/>

  태그(ESCAPE): <?php echo $tag ?>

  생년월일: <?php echo $_POST['birth']; ?><br /><br/>

  휴대전화 번호: <?php echo $_POST['phone']; ?><br /><br/>
  
  -->
</body>
</html>