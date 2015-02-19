var audioCtx = new webkitAudioContext();
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator.connect(gainNode);
oscillator.start(0);

function startaudio()

{
	
	gainNode.connect(audioCtx.destination);
	var now = audioCtx.currentTime;
 	gainNode.gain.setValueAtTime(gainNode.gain.value, now);
	var wavetype = document.getElementById("wavetypes").selectedIndex;
	oscillator.type = document.getElementsByTagName("option")[wavetype].value;
	gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.1);

}


function stopaudio()
{
   var now = audioCtx.currentTime;
   gainNode.gain.cancelScheduledValues(now);
   gainNode.gain.setValueAtTime(gainNode.gain.value, now);
   gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 1.0);
}

function changeFrequency(val)
{
   oscillator.frequency.value = val;
   document.getElementById('Hz').value=val;
}

function changeVolume(volume)
{
  var now = audioCtx.currentTime;
  gainNode.gain.setValueAtTime(volume, now);
}

function changeeffect()
{
var now = audioCtx.currentTime;
var freq= document.getElementById('frequency').value;
var vol=document.getElementById('volume').value;
var count = 4096;
var values = new Float32Array(count);
for (var i = 0; i < count; i++) {
  var p = (i / count)*freq;
  values[i] = 1 + (Math.sin(p));//Adding sine wave 
}

gainNode.gain.setValueCurveAtTime(values, audioCtx.currentTime, now);
}

function reload() {
    location.reload();
}