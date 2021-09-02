
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dply.app - 개인정보 처리방침</title>
    <script src="/static/plugins/jquery/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
    <!-- Style -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

        * {margin: 0; padding: 0; box-sizing: border-box;}

        body {
            font-family: 'Noto Sans KR', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        body::before {
            content: "";
            position: absolute; z-index: 1;
            top: 0; right: 0; bottom: 0; left: 0;
        }

        .login-form {position: relative; z-index: 2;}
        .login-form h1 {
            font-size: 32px; color: #000;
            text-align: center;
            margin-bottom: 60px;
        }
        .login-form h3 {
            color: #000;
            text-align: center;
            margin-bottom: 60px;
        }
        
        iframe {
                width: 100vw; height: 70vh;
                border: 0;
                padding: 0 25px 0 25px;
                margin-top: 25px;
        }
    </style>
</head>
<body style="background-color: transparent;">
    <section class="login-form">
        <h1 id="title">개인정보처리방침</h1>
        <div style="text-align: center;">
            <div class="btn-group">
                <button type="button" id="dropdown" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    2021. 08. 01
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" onclick="change('2021', '08', '01');" style="cursor: pointer;">2021. 08. 01</a>
                    <!-- <div class="dropdown-divider"></div> -->
                </div>
            </div>
        </div>
        <iframe src="origin/20210801.html" id="iframe" name="policy" frameborder="0"></iframe>
    </section>

    <script>
        var change = (y, m, d) => {
            $("#dropdown").html(` ${y}. ${m}. ${d} `)
            policy.location.replace(`origin/${y}${m}${d}.html`);
        }
    </script>
</body>
</html>