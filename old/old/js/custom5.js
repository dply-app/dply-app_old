(function($){
  $( '.js-toggleBtn' ).on( 'click', function(){
    $( this ).next().slideToggle();
    $( this ).toggleClass('open');
  });
})(jQuery);

window.onload = function() {
  var _DOM = {main: document.querySelector('div.pop_modal') };
  var midnight = new Date();
  midnight.setHours(23,59,59);
  var now = Date.now(), idx;
  var timeLines = [0, 1630422000000];
    // Date.now로 공지를 없앨 타임 확인 후 입력
    // 첫 0은 유지해야 함(아래 switch문 참조)
  [
    'btn_close', 'btn', 'btn_aday','text_area','title_popup'
  ].forEach(selector => {
    _DOM[selector] = _DOM.main.querySelector('.' + selector);
  });
    
  /* _DOM.btn_close.onclick = function() {
    hide_modal();
  }; */

  _DOM.btn.onclick = function() {
    if (_DOM.btn_aday.checked) {
      document.cookie = 'cypopagree' + idx + '=1; expires=' + midnight.toUTCString();
    }
    hide_modal();
  };


  switch(true) {
    case now < timeLines[0]:
      break;
    case now < timeLines[1]:
      show_modal(0, timeLines[1]);
      break;
    case now < timeLines[2]:
      show_modal(1, timeLines[2]);
      break;
    default:
      titles = letters = undefined;
  }

  function show_modal(index, timeLine) {
    idx = index;
    if (document.cookie.split(';').some(function(item) {return item.trim().startsWith('cypopagree' + index + '=')})) {
      return;
    }
    _DOM.title_popup.insertAdjacentHTML('afterbegin', titles[index]);
    _DOM.text_area.insertAdjacentHTML('afterbegin', letters[index]);
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'scroll';
    _DOM.main.style.display = 'block';
      
    // Custom
    let date;
    let print_date;
    date = new Date()
    date.setTime(timeLine)
    print_date = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초 ${date.getMilliseconds()}ms`
    console.log(`${index}번 공지사항은 ${print_date}까지 노출됩니다.`)
  }

  function hide_modal() {
    document.body.style.position = '';
    document.body.style.overflowY = 'auto';
    _DOM.main.style.display = 'none';
  }
}
var titles = ['서버 장애로 인한 개발 차질 안내문', ''];
var letters = [
  `Dply.app에 대해 기대하고 계실 고객 여러분<br>
저는 Dply.app 개발진 SSKATE입니다.<br><br>

지난 몇 년간 저희 서비스는 오픈이 무기한 연기를 하여 오늘에 이르게 되어 고객 여러분들에게 큰 불편을 초래한 점 진심으로 사과의 말씀 드립니다.<br><br>

저희 서비스는 CEO인 Mireu의 작은 아이디어에서 시작하여 개발을 시작하였으나 개발에 어려움과 시장의 빠른 발달로 지금까지 연기가 되어 얼마 전에는 8월 20일까지 오픈하는 것으로 기한이 예정되기까지 하였습니다.<br><br>

저희는 지금도 빠른 서비스의 오픈을 위해 밤도 새고, 밥도 먹지 않으며 노력하여 오픈하고자 하였습니다.<br><br>

그러나 저희 서비스는<br>
첫째, 많은 트래픽을 감당 할 수 있어야 한다는 점<br>
둘째, 해킹 등의 공격에 피해를 줄여야 한다는 점<br>
셋째, 편리하고 금전적 손실을 줄이면서 많은 서비스를 유지해야 한다는 점 등으로 인해<br><br>
불가피하게 오픈이 연기되게 되었습니다.<br><br>

엎친 데 덮친 격으로 여러 중요 개발진들마저 팀을 하나둘 떠나면서 저희는 개발에 큰 어려움을 겪고 있습니다.<br><br>

그러나 “끝날 때까지 끝난 것이 아니다(It is not over, till it is over)”란 요기 베라 감독의 말처럼 저희는 끝까지 오픈을 위해 힘써오며 지금까지 개발을 이어나갔습니다.<br><br>

그리하여 현재 80%의 개발이 완료되고 대시보드 개발만이 남아있으며 곧 CBT를 앞두고 있었습니다.<br><br>

하지만 현재 개발을 진행하던 서버가 알 수 없는 원인으로 부트로더가 손상되어 서버를 사용할 수 없어져 복구 작업에 있습니다.<br><br>

최대한 추가 연기 없는 오픈을 위해 힘써 가던 중에 이런 문제가 발생한지라 저희도 데이터를 복구하는 등의 어려움을 버리고 부트로더라도 빠른 복구를 진행하고 있습니다.<br><br>

그러나 공격자가 지속적으로 공격을 하여 복구가 지연되어, 며칠 정도 연기가 될 가능성도 염두에 두고 있는 점 양해 부탁드립니다.<br><br>

Dply.app을 기다리고 계실 고객여러분!<br><br>

Dply.app 서비스는 지난 수년간 많은 우여곡절이 있었습니다. 그러나 아직 죽지 않고 끝까지 버티면서 오늘에 이르렀습니다. 여러분의 응원과 성원이 저희에게 가장 큰 힘이었고 이제 곧 “Dply.app” 서비스는 드디어 출발을 하게 될 것입니다.<br><br>

저희는 추가 연기 없이 오픈을 하기 위해 더욱더 힘을 쓰는 Sirius가 되도록 다시 한번 노력하겠습니다.<br><br>

여러분 진심으로 감사드립니다.<br><br>

2021.08.05 Dply.app 개발진 SSKATE<br><br><div style="border-top: 1px solid #ccc;"></div>

<br><br>
안녕하세요, Sirius 입니다.<br><br>

저희 서비스 오픈 일정에 관련하여 안내드립니다.<br><br>

저희 서비스는 8/20일 오전 오픈을 목표로 하고 개발 중이나 위 글과 같이 복구 작업에 지연이 생길 경우 8월 말까지 지연 될 수 있는점 양해 부탁드립니다.<br><br>

또한 서비스 개시가 될 경우 사전 예약(OBT 등록)만 가능하며 그 기간동안 사전에 신청하신 CBT 베타 테스트가 진행됩니다.<br><br>

자세한 공지사항 등은 Sirius 포럼을 참조하세요.<br><br>
<a href="https://discord.gg/UUkRNzTWzY" target="_blank">포럼 바로가기</a><br><br>

<div style="border-top: 1px solid #ccc;"></div>
<br><br>

위 내용을 읽으셨으면 확인을 클릭해주세요.
<br><br>
`,
    ``
];
//var titles = ['공지사항 1번 제목입니다.','공지사항 2번 제목입니다.'];
//var letters = [
//  `공지사항 1번 내용입니다.`,
//  `공지사항 2번 내용입니다.`
//];
//var titles = ['도토리 환불 종료 일정 안내','개인정보 이관 안내'];
//var letters = [
//  `안녕하세요, 사이좋은 사람들 싸이월드입니다.<br><br>
//
//  무더운 여름.<br>
//  싸이월드의 부활을 기다려주시는 3200만의 싸이월드 회원 여러분들께<br>
//  도토리 사용 및 환불 종료 일정에 대해 안내 말씀 드립니다.<br><br>
//
//  저희 싸이월드는<br>
//  지난 5월부터 싸이월드 홈페이지에서 기존 아이디를 기억하시는 회원분들께<br>
//  싸이월드의 아이디 입력 후, 본인인증을 통한 도토리 환불 신청을 진행 중에 있습니다.<br><br>
//
//  또한, 8월2일부터 시작되는 아이디찾기 자동화 서비스를 통해 실명인증의 과정을 거친 후,<br>
//  그 즉시 싸이월드가 복원한 회원님의 사진, 동영상, BGM, 댓글 수 외에 회원님의 도토리 수까지 확인해드립니다.<br><br>
//
//  새로운 싸이월드에서는 리뉴얼된 “도토리”를 선보일 예정이며,<br>
//  기존 도토리는 더이상 사용하실 수 없으므로 8월31일까지 환불신청을 꼭 해주시기 바랍니다.<br><br>
//
//  <span style="color: #ff7021;">기존 보유 도토리 환불 기간</span> :<br>~  2021. 8. 31 까지<br><br>
//
//  <span style="color: #ff7021;">지금 도토리 환불 신청하기</span> :<br><div><a href="https://refund.cyworld.com/view/form" target=_blank style="overflow-wrap: break-word;word-wrap: break-word;">https://refund.cyworld.com/view/form</a></div><br><br>
//
//  보다 나은 싸이월드 서비스를 위한 부득이한 조치이니 회원님의 소중한 자산인 도토리 환불을 신청해주세요!<br><br>
//
//  이번 도토리 환불 신청에 회원 여러분의 많은 참여바랍니다.<br><br>
//
//
//  2021. 7. 29.<br>
//  사이조은 사람들,<br>
//  싸이월드 팀 일동`,
//  `싸이월드 고객 여러분<br>
//  저는 ㈜싸이월드 대표이사 전제완입니다.<br><br>
//
//  지난 2년간 싸이월드 서비스가 잠정 중단을 하여 오늘에 이르게 되어 고객 여러분들에게 큰 불편을 초래한 점 진심으로 사과의 말씀드립니다.<br><br>
//
//  싸이월드 서비스는 1999년 한 벤처기업에서 서비스를 개시한 후 2002년 경영난으로 모그룹으로 인수되어 2011년 총 회원수 3,200만명에 달하는 국민 SNS로 자리잡았습니다. 그러나 미니홈피 등 웹기반으로 개발된 싸이월드 서비스는 모바일 환경으로의 전환이 늦어지고 Facebook, Twitter 등 외국 SNS와의 경쟁에 밀려 2011년부터 쇠퇴를 거듭하였고, 모그룹은 2014년 결국 싸이월드 서비스를 포기하게 됩니다. 이후 23명의 종업원들이 싸이월드를 모그룹으로부터 인수하여 작은 벤처로 서비스를 운영하던 중 경영난으로 인해 2016년 상반기에 서비스를 중단할 위기에 처했습니다.<br><br>
//
//  2016년 당시 저는 3,200만명의 고객님들이 지난 20년간 만들어 놓은 소소한 일상이 담긴 170억장의 사진, 1.5억개에 달하는 동영상, 5.3억개의 음원 등 실로 방대한 고객님들의 소중한 추억이 존재하고, 이 추억으로 인해 1천만명이 넘는 분들이 싸이월드를 떠나지 못하면서 간헐적으로 싸이월드 서비스에 여전히 접속하고 있는 사실을 확인하였습니다. 이러한 토종 SNS인 싸이월드가 서비스 중단이 되어 역사속으로 사라지는 것은 고객님들의 소중한 추억을 지켜드리지 못할 뿐만 아니라 우리나라 인터넷 발전에도 결코 바람직하지 않다는 생각으로 싸이월드 서비스를 인수하였습니다.<br><br>
//
//
//
//  그러나 싸이월드 서비스는<br>
//  첫째, 미니홈피, 미니미, 클럽 등 모든 핵심 서비스가 웹기반으로 개발이 되어 있어 이것을 모바일 환경에 최적화하여 새로 개발을 해야 한다는 점<br>
//  둘째, 서비스에 적용된 기술이 너무 낙후되어 최신 기술을 사용하여 전면 재개발을 해야 한다는 점<br>
//  셋째, 동영상 및 3D기반의 메타버스를 적용한 미니홈피, 미니미 등 싸이월드의 감성은 온전히 유지하되 새로운 트렌드를 포함하는 싸이월드의 서비스를 개발하여 보완해야한다는 점<br>
//  넷째, 인수 전 회사에서 관리상 방치되어 있는 방대한 고객님의 데이터를 완전히 복원하여 서비스할 수 있도록 준비해야 하는 점 등으로 인해<br><br>
//
//  모든 데이터를 복원하면서, “싸이월드 3.0” 서비스를 설계하고 개발을 진행하던 중에 마지막 개발을 위한 투자를 확보하지 못하였습니다. 2019년 임금체불 등 경영난을 겪으면서 100명에 달하는 직원들 모두 아쉬움을 뒤로 한 채 회사를 떠나고, 통신비를 내지 못하면서 결국 서비스가 중단되는 상황에 이르게 되었습니다.<br><br>
//
//  그러나 “끝날 때까지 끝난 것이 아니다(It is not over, till it is over)”란 요기베라 감독의 말처럼 임금체불로 인한 재판을 받으면서 1심에서 징역 1년 6개월의 실형을 선고받게 되었음에도 포기하지 않고 혼신의 힘을 다해 투자자를 찾아왔습니다. 그럼에도 싸이월드의 부활에 대한 회의적인 시각도 존재하고 특히 코로나로 인해 비상경영체제에서 수백억에 달하는 투자를 할 수 있는 인수자를 찾지 못하였으나 금년 초에 싸이월드의 가능성을 믿는 인수자를 찾을 수 있게 되었습니다.<br><br>
//
//  새로운 인수자는 ㈜싸이월드제트입니다.<br>
//  ㈜싸이월드제트는 2021년 8월2일부터 아이디찾기 등을 자동화하게 됩니다.<br><br>
//
//  우리나라 “개인정보보호법”에 의하면 싸이월드 서비스의 운영주체(법인)이 바뀌게 되면 고객님들의 개인정보 이관 동의를 받는 절차가 있습니다. 오늘부터 그 절차를 진행하게 됩니다.<br><br>
//
//
//  싸이월드 고객여러분!<br><br>
//
//  싸이월드 서비스는 지난 20년간 많은 우여곡절이 있었습니다. 그러나 아직 죽지 않고 끝까지 버티면서 오늘에 이르렀습니다. 3,200만명 한 분 한 분의  소중한 추억이 멀고도 험한 이 길에서 버틸 수 있는 가장 큰 힘이었고 이제 “싸이월드 모바일 서비스”로 새출발을 하게 될 것입니다.<br><br>
//
//  저는 ㈜싸이월드제트가 성공적으로 “싸이월드 모바일 서비스”의 개발을 마치면서 싸이월드의 멋진 모습으로 곧 여러분들 찾아갈 것이며 싸이월드는 부활하여 토종SNS로 예전의 명성을 다시 찾을 것이라 믿고 있습니다.<br><br>
//
//  싸이월드의 멋진 부활을 기대하면서 그간 미안함과 감사함을 뒤로 하고 여러분들에게 긴 작별인사를 합니다.<br><br>
//
//  여러분 진심으로 감사했습니다.<br><br>
//
//  2021.08.02 ㈜싸이월드 대표이사 전제완<br><br><div style="border-top: 1px solid #ccc;"></div>
//
//  <br><br>
//  안녕하세요, ㈜싸이월드입니다.<br><br>
//
//  “싸이월드서비스”의 영업 양도에 따른 개인정보의 이전 및 이용약관의 개정에 관한 안내 말씀드립니다.<br><br>
//
//  ㈜싸이월드는 “싸이월드서비스”의 경쟁력 강화와 전문성 제고를 위해 “싸이월드 서비스사업부문”(이하 “대상 사업”)을 ㈜싸이월드제트에게 영업 양도의 방식으로 이관할 예정이며, 대상 사업 이관은 2021년 8월 2일자로 이루어 집니다.<br>
//  영업이 양도됨에 따라 고객님들께서 이용하고 계신 “싸이월드서비스”는 기존과 동일한 방식으로 불편없이 계속 이용하실 수 있도록 대상 사업과 관련한 고객님의 개인정보가 ㈜싸이월드제트로 이전되며<br>
//  ㈜싸이월드제트는 기존과 동일한 범위에서만 고객님의 개인정보를 이용하고, 개인정보 보호법 및 정보통신망법이 규정하는 개인정보의 기술적, 관리적 보호조치를 준수하여 안전하게 보호할 예정입니다.<br><br>
//
//  개인정보 이전에 관한 상세한 내용은 아래를 참고하여 주시기 바랍니다.<br><br>
//
//  <dl class="lst_desc" style="display: flex; flex-flow: row wrap;border: 1px solid #ddd;">
//    <dt style="font-family: 'GmarketSans';font-size: 14px;color: #454545;background-color: #e8e8e8;border-bottom: 0;">이전 일자</dt>
//    <dd style="font-family: 'GmarketSans';display:block;font-size: 14px;color: #454545;background-color: #fff;border-bottom: 0;">2021년 8월 2일</dd>
//    <dt style="font-family: 'GmarketSans';display:block;font-size: 14px;color: #454545;background-color: #e8e8e8;border-bottom: 0;">이전 받는 자(법인명)</dt>
//    <dd style="font-family: 'GmarketSans';display:block;font-size: 14px;color: #454545;background-color: #fff;border-bottom: 0;">주식회사 싸이월드제트 (Cyworld Z CO.)</dd>
//    <dt style="font-family: 'GmarketSans';display:block;font-size: 14px;color: #454545;background-color: #e8e8e8;border-bottom: 0;">주소</dt>
//    <dd style="font-family: 'GmarketSans';display:block;font-size: 14px;color: #454545;background-color: #fff;border-bottom: 0;">서울특별시 강남구 논현로158길 29-1</dd>
//    <dt style="font-family: 'GmarketSans';display:block;font-size: 14px;color: #454545;background-color: #e8e8e8;border-bottom: 0;">온라인 문의 접수</dt>
//    <dd style="font-family: 'GmarketSans';display:block;font-size: 14px;color: #454545;background-color: #fff;border-bottom: 0;"><a href="mailto:help@cyworldhq.com">help@cyworldhq.com</a></dd>
//  </dl>
//
//  <br><br>
//  <strong>이의제기 및 문의</strong><br><br>
//
//  대상 사업 이관에 따른 개인정보의 이전을 원하지 아니하실 경우, 싸이월드 고객센터(1670-4242)를 통해 개인정보 수집 및 이용에 대한 동의 철회를 신청해주십시요.<br><br>
//
//  회원 탈퇴 및 동의 철회 시 싸이월드에 대한 개인정보가 이전되지 않으며 처리가 완료된 후에는 데이터가 복원되지 않습니다.<br><br>
//
//  <span style="text-decoration: underline;">또한 회원탈퇴를 하지 않으신 분들은 자동으로 모두 동의한 것으로 간주하여 서비스의 이관을 자동적으로 진행될 예정입니다.</span><br><br>
//
//  2021.8.2.<br><br>
//
//  (주) 싸이월드<br><br>
//
//  <div style="border-top: 1px solid #ccc;"></div>
//  <br><br>
//
//  도토리 환불은 2021. 8. 31 까지 신청 가능합니다.<br><br>
//
//  지금 도토리 환불 신청하기를 시작해주세요.<br><br>
//
//  <ul class="lst_help">
//    <li>도토리 환불 신청하기 : <span style="display: inline-block; word-break: break-all;"><a href="https://refund.cyworld.com/view/form" style="overflow-wrap: break-word;word-wrap: break-word;">https://refund.cyworld.com/view/form</a></span></li>
//  </ul>
//  <br><br>
//
//  <div style="border-top: 1px solid #ccc;"></div>
//  <br><br>
//
//  위 내용을 읽으셨으면 확인을 클릭해주세요.
//  <br><br>`
//];
