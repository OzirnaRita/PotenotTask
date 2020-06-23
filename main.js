
let button = document.querySelector('.button');
button.addEventListener('click', function(){
    document.querySelectorAll('.notEmpty').forEach(elem =>
      val(elem));
      
      //console.log(document.querySelectorAll('.invalid').length)
      countTang();
});

function val(elem){
    if(elem.value.length > 0){
           elem.classList.remove("invalid")
      }else{
        elem.classList.add("invalid")
      }
    }

//document.querySelectorAll('.notEmpty').forEach(elem =>
 //   elem.addEventListener('click', val(elem)));

function countTang(){
  let x1 = Number(document.getElementById('firstPointX').value);
  let y1 = Number(document.getElementById('firstPointY').value);
  let x2 = Number(document.getElementById('secondPointX').value);
  let y2 = Number(document.getElementById('secondPointY').value);
  let x3 = Number(document.getElementById('thirdPointX').value);
  let y3 = Number(document.getElementById('thirdPointY').value);
  let x4 = Number(document.getElementById('fourthPointX').value);
  let y4 = Number(document.getElementById('fourthPointY').value);

  let b1deg = Number(document.getElementById('betaFirstCornerDegr').value);
  let b1min = Number(document.getElementById('betaFirstCornerMin').value);
  let b1sec = Number(document.getElementById('betaFirstCornerSec').value);
  
  let b2deg = Number(document.getElementById('betaSecondCornerDegr').value);
  let b2min = Number(document.getElementById('betaSecondCornerMin').value);
  let b2sec = Number(document.getElementById('betaSecondCornerSec').value);

  let b3deg = Number(document.getElementById('betaThirdCornerDegr').value);
  let b3min = Number(document.getElementById('betaThirdCornerMin').value);
  let b3sec = Number(document.getElementById('betaThirdCornerSec').value);

  let B1deg = (b1deg + (b1min / 60) + (b1sec / 3600));
  let B2deg = (b2deg + (b2min / 60) + (b2sec / 3600));
  let B3deg = (b3deg + (b3min / 60) + (b3sec / 3600));

  let deltY = (((y2 - y1) * (1/Math.tan(B1deg * Math.PI/180)).toFixed(7)) + ((y1 - y3) * (1/Math.tan(B2deg * Math.PI/180)).toFixed(7)) - x2 + x3).toFixed(2);
  let deltX = (((x2 - x1) * (1/Math.tan(B1deg * Math.PI/180)).toFixed(7)) + ((x1 - x3) * (1/Math.tan(B2deg * Math.PI/180)).toFixed(7)) + y2 - y3).toFixed(2);
  
  let tgAlpha1P = (deltY / deltX).toFixed(7);

  let at = (Math.atan(tgAlpha1P) * 180/Math.PI);
  if(at < 0){
    at = at + 360;
  }else if(at > 360){
    at = at - 360;
  }
  
  let cornSec = at * 3600;
  let res = secToDegMinSec(cornSec);
  let alpha1p = res.degRes + '°' + res.minRes + "'" + res.secRes + '"';

  let res1 = secToDegMinSec(cornSec + (B1deg * 3600));
  let alpha2p = res1.degRes + '°' + res1.minRes + "'" + res1.secRes + '"';
  let res2 = secToDegMinSec(cornSec + (B2deg * 3600));
  let alpha3p = res2.degRes + '°' + res2.minRes + "'" + res2.secRes + '"';
  let res3 = secToDegMinSec(cornSec + (B3deg * 3600));
  let alpha4p = res3.degRes + '°' + res3.minRes + "'" + res3.secRes + '"';

  let tgAlpha2P = (Math.tan(degMinSectoRad(res1.degRes,res1.minRes,res1.secRes))).toFixed(7);
  let tgAlpha3P = (Math.tan(degMinSectoRad(res2.degRes,res2.minRes,res2.secRes))).toFixed(7);
  let tgAlpha4P = (Math.tan(degMinSectoRad(res3.degRes,res3.minRes,res3.secRes))).toFixed(7);
  
  let xP = ((x1 * tgAlpha1P) - (x2 * tgAlpha2P) + y2 - y1)/(tgAlpha1P - tgAlpha2P);
  let xP1 = ((x3 * tgAlpha3P) - (x4 * tgAlpha4P) + y4 - y3)/(tgAlpha3P - tgAlpha4P);
  //console.log(xP);
  //console.log(xP1);
  //console.log((xP + xP1)/2);

  let yp11 = y1 + (xP - x1) * tgAlpha1P;
  console.log(yp11);
  let yp12 = y2 + (xP - x2) * tgAlpha2P;


  let yp21 = y3 + (xP1 - x3) * tgAlpha3P;
  console.log(yp21);
  let yp22 = y4 + (xP1 - x4) * tgAlpha4P;
 
 
  document.getElementById('y1').innerHTML = y1.toFixed(2);
  document.getElementById('x1').innerHTML = x1.toFixed(2);
  document.getElementById('y2').innerHTML = y2.toFixed(2);
  document.getElementById('x2').innerHTML = x2.toFixed(2);
  document.getElementById('y3').innerHTML = y3.toFixed(2);
  document.getElementById('x3').innerHTML = x3.toFixed(2);
  document.getElementById('y4').innerHTML = y4.toFixed(2);
  document.getElementById('x4').innerHTML = x4.toFixed(2);

  document.getElementById('yMin21').innerHTML = (y2 - y1).toFixed(2);
  document.getElementById('xMin21').innerHTML = (x2 - x1).toFixed(2);
  document.getElementById('yMin13').innerHTML = (y1 - y3).toFixed(2);
  document.getElementById('xMin13').innerHTML = (x1 - x3).toFixed(2);

  document.getElementById('beta1').innerHTML = b1deg + '°' + b1min + "'" + b1sec + '"'; 
  document.querySelectorAll('.beta2').forEach(elem => {
   elem.innerHTML = b2deg + '°' + b2min + "'" + b2sec + '"'}); 
  document.getElementById('beta3').innerHTML = b3deg + '°' + b3min + "'" + b3sec + '"'; 
  document.getElementById('ctgBeta1').innerHTML = (1/Math.tan(B1deg * Math.PI/180)).toFixed(7);
  document.getElementById('ctgBeta2').innerHTML = (1/Math.tan(B2deg * Math.PI/180)).toFixed(7);
  document.getElementById('deltY').innerHTML = deltY;
  document.getElementById('deltX').innerHTML = deltX;
  document.getElementById('tgAlpha1p').innerHTML = tgAlpha1P;
  document.querySelectorAll('.alpha1p').forEach(elem => {
      elem.innerHTML = alpha1p;
  });
  document.getElementById('tgAlpha2p').innerHTML = tgAlpha2P;
  document.getElementById('tgAlpha3p').innerHTML = tgAlpha3P;
  document.getElementById('tgAlpha4p').innerHTML = tgAlpha4P;
  document.getElementById('alpha2p').innerHTML = alpha2p;
  document.getElementById('alpha3p').innerHTML = alpha3p;
  document.getElementById('alpha4p').innerHTML = alpha4p;


}       

function degMinSectoSec(deg,min,sec){
  let secRes = (deg * 3600) + (min * 60) + sec;
  return(secRes);
};

function degMinSectoRad(deg,min,sec){
  let rad = (deg + (min / 60) + (sec / 3600)) * Math.PI / 180;
  return rad;
};

function secToDegMinSec(sec){
  if(sec > 1296000){
    sec = sec - 1296000;
  }
  let degRes = Math.trunc(sec/3600);
  let minRes = Math.trunc((sec/3600 - degRes) * 60);
  let secRes = Math.round((((sec/3600 - degRes) * 60) - minRes) * 60);

  if(secRes == 60){
    minRes = minRes + 1;
    secRes = 0; 
    if(minRes == 60){
      degRes = degRes + 1;
      minRes = 0;
    }
  }
  return({degRes, minRes, secRes});
}

