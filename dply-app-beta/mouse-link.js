if ( document.addEventListener ) {
    document.addEventListener("mousemove",resultFun,false)
} else if ( document.attachEvent ) {
    document.attachEvent("onmousemove",resultFun)
} else {
    document.onmousemove = resultFun
}

    //  문서에서 마우스가 움직일때(mousemove) 마다 resultFun() 함수가 실행됩니다.

    //  x.clientX,Y 는 페이지에서 이벤트 발생한 X,Y 좌표를 가져옵니다.

function resultFun(x) {

    // let xY = x.clientX +  " * "  + x.clientY
    let positionLeft = x.clientX
    let positionTop = x.clientY
    
    // result  div 에 innerHTML 로 xY 변수를 적용 합니다.
    // document.getElementById('result').innerHTML = xYk
    //  result  div 의 position 위치를  positionLeft, Top 변수 값으로 style 적용해줍니다.
    // document.getElementById('result').style.left = positionLeft + "px"
    // document.getElementById('result').style.top = positionTop + "px"
    document.getElementById('shapeImg').style.position = "absolute"
    document.getElementById('shapeImg').style.top = -(positionTop / 40 - 55) + "px"
    document.getElementById('shapeImg').style.left = -(positionLeft / 40 + 5) + "px"

    document.getElementById('shapeImg2').style.position = "absolute"
    document.getElementById('shapeImg2').style.top = -(positionTop / 40 - 500) + "px"
    document.getElementById('shapeImg2').style.left = -(positionLeft / 40 - 350) + "px"
    // document.getElementById('shapeImg').animate(startMove)

}