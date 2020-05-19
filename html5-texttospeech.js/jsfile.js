
function speak(obj) {
  // Get the parameter values from the input sliders
  
  var r = parseFloat(document.getElementById('rate').value);
  var p = parseFloat(document.getElementById('pitch').value);
  var v = parseFloat(document.getElementById('volume').value);
  
  // Note: Function calls can be perfromed individually or chained together as demonstrated below
  
  $(obj).articulate('rate',r).articulate('pitch',p).articulate('volume',v).articulate('speak');
};

function readHighlight() {
    // Get the parameter values from the input sliders
    var r = parseFloat(document.getElementById('rate').value);
    var p = parseFloat(document.getElementById('pitch').value);
    var v = parseFloat(document.getElementById('volume').value);

    a =  window.getSelection().toString();
    alert(a);

    $("THis is a text").articulate('rate',r).articulate('pitch',p).articulate('volume',v).articulate('speak');
  };

function pause() {
  $().articulate('pause');
};

function resume() {
  $().articulate('resume');
};

function stop() {
  $().articulate('stop');
};

// update the value to the right of the input sliders
  
function update(obj,value) {
  var n = parseFloat(value).toFixed(1)
  $(obj).parent().find('span').text(n);
};
