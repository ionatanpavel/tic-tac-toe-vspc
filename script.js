var atr = 1, vec = [-1, -1, -1,-1, -1, -1,-1, -1, -1], wX = 0, w0 = 0, limit = 4;
var position = -1;

function hideTemp() {
  duplicateShowHT();
  setTimeout(duplicateHideHT, 350);
}

function PCMoveAux(){
  if (position == 0) {
    PCassigncell1();
  }
  if (position == 1) {
    PCassigncell2();
  }
  if (position == 2) {
    PCassigncell3();
  }
  if (position == 3) {
    PCassigncell4();
  }
  if (position == 4) {
    PCassigncell5();
  }
  if (position == 5) {
    PCassigncell6();
  }
  if (position == 6) {
    PCassigncell7();
  }
  if (position == 7) {
    PCassigncell8();
  }
  if (position == 8) {
    PCassigncell9();
  }
}

function getSuitablePosition() {
  var pos = tryWin0();
  if (pos != -1) {
    return pos;
  }
  else {
    pos = tryTangleX();
    if (pos != -1) {
      return pos;
    }
    else {
      var vecAux = [], i;
      for (i = 0; i <= 8; i ++) {
        if (vec[i] == -1) {
          vecAux.push(i);
        }
      }
      var rand = getRandomIntInclusive(0, vecAux.length - 1);
      return vecAux[rand];
    }
  }

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function countCompleted() {
  var i, c = 0;
  for (i = 0; i <= 8; i ++) {
    if (vec[i] == -1) {
      c ++;
    }
  }
  return 9 - c;
}



function randomReset() {
  var i;
  for (i = 0; i <= 8; i ++)  {
    vec[i] = -1;
  }
  atr = 1;
  wX = 0;
  w0 = 0;
  limit = 4;
    document.getElementById('cell1').innerHTML = '';
    document.getElementById('cell2').innerHTML = '';
    document.getElementById('cell3').innerHTML = '';
    document.getElementById('cell4').innerHTML = '';
    document.getElementById('cell5').innerHTML = '';
    document.getElementById('cell6').innerHTML = '';
    document.getElementById('cell7').innerHTML = '';
    document.getElementById('cell8').innerHTML = '';
    document.getElementById('cell9').innerHTML = '';
}

function check() {
  var ok = 1;
  var sum = rowsCheck() + colsCheck() + diagPrincCheck() + diagSecCheck();
  var a = allCheck();
  if (sum == 0 && a == 1) {
    duplicateShow();

    showDraw();
    ok = 0;
    setTimeout(reset, 0);
  }
  if (sum != 0) {
    if (wX == 1) {
      duplicateShow();

      showX();
      ok = 0;
      setTimeout(reset, 0);
    }
    if (w0 == 1) {
      duplicateShow();

      show0();
      ok = 0;
      setTimeout(reset, 0);
    }
  }
  return ok;
}

function duplicateShowHT() {
  var x = document.getElementsByClassName('text1');
  for (var i = 0; i < x.length; i ++)
    x[i].style.display = 'block';
}
function duplicateHideHT() {
  var x = document.getElementsByClassName('text1');
  for (var i = 0; i < x.length; i ++)
    x[i].style.display = 'none';
}

function duplicateShow() {
  var x = document.getElementsByClassName('text2');
  for (var i = 0; i < x.length; i ++)
    x[i].style.display = 'block';
}
function duplicateHide() {
  var x = document.getElementsByClassName('text2');
  for (var i = 0; i < x.length; i ++)
    x[i].style.display = 'none';
}

function rowsCheck() {
  var i, ok = 0;
  for (i = 0; i <= 6; i += 3) {
    var y = vec[i];
    if (y == vec[i + 1] && y == vec[i + 2] && y  != -1) {
      ok = 1;
      if (ok == 1) {
        if (y == 1) {
          wX = 1;
          limit = 0;
        }
        else {
          w0 = 1;
        }
      }
      }
    }
    return ok;
}

function colsCheck() {
  var i, ok = 0;
  for (i = 0; i <= 2; i += 1) {
    y = vec[i];
    if (y == vec[i + 3] && y == vec[i + 6] && y  != -1) {
      ok = 1;
      if (ok == 1) {
        if (y == 1) {
          wX = 1;
          limit = 0;
        }
        else {
          w0 = 1;
        }
      }

    }
  }
  return ok;
}

function allCheck() {
  var i, ok = 1;
  for (i = 0; i <= 8; i += 1) {
    if (vec[i] == -1)
      ok = 0;
    }
    return ok;
}

function diagPrincCheck() {
  var ok = 0;
  if (vec[0] == vec[4] && vec[0] == vec[8] && vec[0] != -1)
    ok = 1;
  if (ok == 1) {
    if (vec[0] == 1) {
      wX = 1;
      limit = 0;
    }
    else {
      w0 = 1;
    }
  }
  return ok;
}

function diagSecCheck() {
  var ok = 0;
  if (vec[2] == vec[4] && vec[2] == vec[6] && vec[2] != -1)
    ok = 1;
  if (ok == 1) {
    if (vec[2] == 1) {
      wX = 1;
      limit = 0;
    }
    else {
      w0 = 1;
    }
  }
 return ok;
}


function reset() {
setTimeout(duplicateHide, 3000);
  var i;
  for (i = 0; i <= 8; i ++)  {
    vec[i] = -1;
  }
  atr = 1;
  wX = 0;
  w0 = 0;
  limit = 4;
  setTimeout(function(){
    document.getElementById('cell1').innerHTML = '';
    document.getElementById('cell2').innerHTML = '';
    document.getElementById('cell3').innerHTML = '';
    document.getElementById('cell4').innerHTML = '';
    document.getElementById('cell5').innerHTML = '';
    document.getElementById('cell6').innerHTML = '';
    document.getElementById('cell7').innerHTML = '';
    document.getElementById('cell8').innerHTML = '';
    document.getElementById('cell9').innerHTML = '';
  }, 3000);
}

function slideDownX() {
  $(document).ready(function(){
    $("#winnX").slideDown("fast");
  });
}

function slideUpX() {
  $(document).ready(function(){
    $("#winnX").slideUp("fast");
  });
}

function showX() {
  slideDownX();
  setTimeout(slideUpX, 3000);
}

function slideDown0() {
  $(document).ready(function(){
    $("#winn0").slideDown("fast");
  });
}

function slideUp0() {
  $(document).ready(function(){
    $("#winn0").slideUp("fast");
  });
}

function show0() {
  slideDown0();
  setTimeout(slideUp0, 3000);
}

function slideDownDraw() {
  $(document).ready(function(){
    $("#winnDraw").slideDown("fast");
  });
}

function slideUpDraw() {
  $(document).ready(function(){
    $("#winnDraw").slideUp("fast");
  });
}

function showDraw() {
  slideDownDraw();
  setTimeout(slideUpDraw, 3000);
}

function tryTangleX() {
  var i;
    var nr = getRandomIntInclusive(1, 10);
    if (nr >= 5) {
      if (vec[0] == -1 && vec[4] == 1 && vec[8] == 1) {
        return 0;
      }
      if (vec[0] == 1 && vec[4] == -1 && vec[8] == 1) {
        return 4;
      }
      if (vec[0] == 1 && vec[4] == 1 && vec[8] == -1) {
        return 8;
     }
    }
    nr = getRandomIntInclusive(1, 10);
      if (nr >= 5) {
      if (vec[2] == -1 && vec[4] == 1 && vec[6] == 1) {
        return 2;
      }
      if (vec[2] == 1 && vec[4] == -1 && vec[6] == 1) {
        return 4;
      }
      if (vec[2] == 1 && vec[4] == 1 && vec[6] == -1) {
        return 6;
      }
    }
  nr = getRandomIntInclusive(1, 10);
  if (nr >= 5)  {
      for (i = 0; i <= 6; i += 3) {
        if (vec[i] == -1 && vec[i + 1] == 1 && vec[i + 2] == 1) {
          return i;
        }
        if (vec[i] == 1 && vec[i + 1] == -1 && vec[i + 2] == 1) {
          return i + 1;
        }
        if (vec[i] == 1 && vec[i + 1] == 1 && vec[i + 2] == -1) {
          return i + 2;
        }
      }
    }
  nr = getRandomIntInclusive(1, 10);
    if (nr >= 5) {
      for (i = 0; i <= 2; i ++) {
        if (vec[i] == -1 && vec[i + 3] == 1 && vec[i + 6] == 1) {
          return i;
        }
        if (vec[i] == 1 && vec[i + 3] == -1 && vec[i + 6] == 1) {
          return i + 3;
        }
        if (vec[i] == 1 && vec[i + 3] == 1 && vec[i + 6] == -1) {
          return i + 6;
        }
      }
   }
  return -1;
}



function tryWin0() {
  var i;
      if (vec[0] == -1 && vec[4] == 0 && vec[8] == 0) {
        return 0;
      }
      if (vec[0] == 0 && vec[4] == -1 && vec[8] == 0) {
        return 4;
      }
      if (vec[0] == 0 && vec[4] == 0 && vec[8] == -1) {
        return 8;
      }
      if (vec[2] == -1 && vec[4] == 0 && vec[6] == 0) {
        return 2;
      }
      if (vec[2] == 0 && vec[4] == -1 && vec[6] == 0) {
        return 4;
      }
      if (vec[2] == 0 && vec[4] == 0 && vec[6] == -1) {
        return 6;
      }
      for (i = 0; i <= 6; i += 3) {
        if (vec[i] == -1 && vec[i + 1] == 0 && vec[i + 2] == 0) {
          return i;
        }
        if (vec[i] == 0 && vec[i + 1] == -1 && vec[i + 2] == 0) {
          return i + 1;
        }
        if (vec[i] == 0 && vec[i + 1] == 0 && vec[i + 2] == -1) {
          return i + 2;
        }
      }
      for (i = 0; i <= 2; i ++) {
        if (vec[i] == -1 && vec[i + 3] == 0 && vec[i + 6] == 0) {
          return i;
        }
        if (vec[i] == 0 && vec[i + 3] == -1 && vec[i + 6] == 0) {
          return i + 3;
        }
        if (vec[i] == 0 && vec[i + 3] == 0 && vec[i + 6] == -1) {
          return i + 6;
        }
      }
  return -1;
}

function assigncell1() {
  if (vec[0] == -1) {
  var x = document.getElementById('cell1');
  x.innerHTML = 'X';
  vec[0] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}
function assigncell2() {
  if (vec[1] == -1) {
  var x = document.getElementById('cell2');
  x.innerHTML = 'X';
  vec[1] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}
function assigncell3() {
  if (vec[2] == -1) {
  var x = document.getElementById('cell3');
  x.innerHTML = 'X';
  vec[2] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}
function assigncell4() {
  if (vec[3] == -1) {
  var x = document.getElementById('cell4');
  x.innerHTML = 'X';
  vec[3] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}
function assigncell5() {
  if (vec[4] == -1) {
  var x = document.getElementById('cell5');
  x.innerHTML = 'X';
  vec[4] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}
function assigncell6() {
  if (vec[5] == -1) {
  var x = document.getElementById('cell6');
  x.innerHTML = 'X';
  vec[5] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}
function assigncell7() {
  if (vec[6] == -1) {
  var x = document.getElementById('cell7');
  x.innerHTML = 'X';
  vec[6] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}
function assigncell8() {
  if (vec[7] == -1) {
  var x = document.getElementById('cell8');
  x.innerHTML = 'X';
  vec[7] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}
function assigncell9() {
  if (vec[8] == -1) {
  var x = document.getElementById('cell9');
  x.innerHTML = 'X';
  vec[8] = 1;
  hideTemp();
  check();
  if (limit != 0) {
    limit --;
    position = getSuitablePosition();
    setTimeout(PCMoveAux, 350);
  }
 }
}


function PCassigncell1() {
  if (vec[0] == -1) {
  var x = document.getElementById('cell1');
  x.innerHTML = '0';
  vec[0] = 0;
  check();

 }
}
function PCassigncell2() {
  if (vec[1] == -1) {
  var x = document.getElementById('cell2');
  x.innerHTML = '0';
  vec[1] = 0;
  check();


 }
}
function PCassigncell3() {
  if (vec[2] == -1) {
  var x = document.getElementById('cell3');
  x.innerHTML = '0';
  vec[2] = 0;
  check();


 }
}
function PCassigncell4() {
  if (vec[3] == -1) {
  var x = document.getElementById('cell4');
  x.innerHTML = '0';
  vec[3] = 0;
  check();

 }
}
function PCassigncell5() {
  if (vec[4] == -1) {
  var x = document.getElementById('cell5');
  x.innerHTML = '0';
  vec[4] = 0;
  check();
 }
}
function PCassigncell6() {
  if (vec[5] == -1) {
  var x = document.getElementById('cell6');
  x.innerHTML = '0';
  vec[5] = 0;
  check();
 }
}
function PCassigncell7() {
  if (vec[6] == -1) {
  var x = document.getElementById('cell7');
  x.innerHTML = '0';
  vec[6] = 0;
  check();
 }
}
function PCassigncell8() {
  if (vec[7] == -1) {
  var x = document.getElementById('cell8');
  x.innerHTML = '0';
  vec[7] = 0;
  check();
 }
}
function PCassigncell9() {
  if (vec[8] == -1) {
  var x = document.getElementById('cell9');
  x.innerHTML = '0';
  vec[8] = 0;
  check();
 }
}
