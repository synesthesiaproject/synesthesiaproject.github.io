// JavaScript Document

var audio = new Audio();

<!--BUTTONS-->
document.querySelector('#yellow').addEventListener(
  'click',
  makeAudioHandler('soundbutton/yellow.mp3')
);
document.querySelector('#black').addEventListener(
  'click',
  makeAudioHandler('soundbutton/black.mp3')
);
 document.querySelector('#grey').addEventListener(
  'click',
  makeAudioHandler('soundbutton/grey.mp3')
);
document.querySelector('#red').addEventListener(
  'click',
  makeAudioHandler('soundbutton/red.mp3')
);
document.querySelector('#blue').addEventListener(
  'click',
  makeAudioHandler('soundbutton/darkblue.mp3')
);
document.querySelector('#white').addEventListener(
  'click',
  makeAudioHandler('soundbutton/white.mp3')
);
document.querySelector('#burgundy').addEventListener(
  'click',
  makeAudioHandler('soundbutton/burgundy.mp3')
);

<!--1-->

document.querySelector('#white1').addEventListener(
  'mouseover',
  makeAudioHandler('1/white1.mp3')
);
document.querySelector('#white1').addEventListener(
  'mouseout',
  makeOutHandler()
);

document.querySelector('#white1a').addEventListener(
  'mouseover',
  makeAudioHandler('1/white1.mp3')
);
document.querySelector('#white1a').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#white1b').addEventListener(
  'mouseover',
  makeAudioHandler('1/white1.mp3')
);
document.querySelector('#white1b').addEventListener(
  'mouseout',
  makeOutHandler()
);

document.querySelector('#black1').addEventListener(
  'mouseover',
  makeAudioHandler('1/black1.mp3')
);
document.querySelector('#black1').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#song1').addEventListener(
  'mouseover',
  makeAudioHandler('1/song1.mp3')
);
document.querySelector('#song1').addEventListener(
  'mouseout',
  makeOutHandler()
);

<!--2-->
document.querySelector('#yellow2').addEventListener(
  'mouseover',
  makeAudioHandler('2/yellow2.mp3')
);

document.querySelector('#yellow2').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#yellow2a').addEventListener(
  'mouseover',
  makeAudioHandler('2/yellow2.mp3')
);

document.querySelector('#yellow2a').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#burgundy2').addEventListener(
  'mouseover',
  makeAudioHandler('2/burgundy2.mp3')
);

document.querySelector('#burgundy2').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#darkblue2').addEventListener(
  'mouseover',
  makeAudioHandler('2/darkblue2.mp3')
);

document.querySelector('#darkblue2').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#darkblue2a').addEventListener(
  'mouseover',
  makeAudioHandler('2/darkblue2.mp3')
);

document.querySelector('#darkblue2a').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#darkblue2b').addEventListener(
  'mouseover',
  makeAudioHandler('2/darkblue2.mp3')
);

document.querySelector('#darkblue2b').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#white2').addEventListener(
  'mouseover',
  makeAudioHandler('2/white2.mp3')
);

document.querySelector('#white2').addEventListener(
  'mouseout',
  makeOutHandler()
); 
document.querySelector('#white2a').addEventListener(
  'mouseover',
  makeAudioHandler('2/white2.mp3')
);

document.querySelector('#white2a').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#lightblue2').addEventListener(
  'mouseover',
  makeAudioHandler('2/lightblue2.mp3')
);

document.querySelector('#lightblue2').addEventListener(
  'mouseout',
  makeOutHandler()
); 
document.querySelector('#song2').addEventListener(
  'mouseover',
  makeAudioHandler('2/song2.mp3')
);

document.querySelector('#song2').addEventListener(
  'mouseout',
  makeOutHandler()
); 

<!--3-->
document.querySelector('#white3').addEventListener(
  'mouseover',
  makeAudioHandler('3/white3.mp3')
);
document.querySelector('#white3').addEventListener(
  'mouseout',
  makeOutHandler()
);

document.querySelector('#darkblue3').addEventListener(
  'mouseover',
  makeAudioHandler('3/darkblue3.mp3')
);
document.querySelector('#darkblue3').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#red3').addEventListener(
  'mouseover',
  makeAudioHandler('3/red3.mp3')
);
document.querySelector('#red3').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#yellow3').addEventListener(
  'mouseover',
  makeAudioHandler('3/yellow3.mp3')
);
document.querySelector('#yellow3').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#song3').addEventListener(
  'mouseover',
  makeAudioHandler('3/song3.mp3')
);
document.querySelector('#song3').addEventListener(
  'mouseout',
  makeOutHandler()
);

<!--4-->
document.querySelector('#red4').addEventListener(
  'mouseover',
  makeAudioHandler('4/red4.mp3')
);

document.querySelector('#red4').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#red4a').addEventListener(
  'mouseover',
  makeAudioHandler('4/red4.mp3')
);

document.querySelector('#red4a').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#red4b').addEventListener(
  'mouseover',
  makeAudioHandler('4/red4.mp3')
);

document.querySelector('#red4b').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#red4c').addEventListener(
  'mouseover',
  makeAudioHandler('4/red4.mp3')
);

document.querySelector('#red4c').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#red4d').addEventListener(
  'mouseover',
  makeAudioHandler('4/red4.mp3')
);

document.querySelector('#red4d').addEventListener(
  'mouseout',
  makeOutHandler()
); 
 
document.querySelector('#black4').addEventListener(
  'mouseover',
  makeAudioHandler('4/black4.mp3')
);

document.querySelector('#black4').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#black4b').addEventListener(
  'mouseover',
  makeAudioHandler('4/black4.mp3')
);

document.querySelector('#black4b').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#black4c').addEventListener(
  'mouseover',
  makeAudioHandler('4/black4.mp3')
);

document.querySelector('#black4c').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#black4d').addEventListener(
  'mouseover',
  makeAudioHandler('4/black4.mp3')
);

document.querySelector('#black4d').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#black4e').addEventListener(
  'mouseover',
  makeAudioHandler('4/black4.mp3')
);

document.querySelector('#black4e').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#white4').addEventListener(
  'mouseover',
  makeAudioHandler('4/white4.mp3')
);

document.querySelector('#white4').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#white4a').addEventListener(
  'mouseover',
  makeAudioHandler('4/white4.mp3')
);

document.querySelector('#white4a').addEventListener(
  'mouseout',
  makeOutHandler()
); 
 
document.querySelector('#song4').addEventListener(
  'mouseover',
  makeAudioHandler('4/song4.mp3')
);
document.querySelector('#song4').addEventListener(
  'mouseout',
  makeOutHandler()
); 

<!--5-->

document.querySelector('#black5').addEventListener(
  'mouseover',
  makeAudioHandler('5/black5.mp3')
);

document.querySelector('#black5').addEventListener(
  'mouseout',
  makeOutHandler()
);  

<!--6-->
document.querySelector('#darkblue6').addEventListener(
  'mouseover',
  makeAudioHandler('6/darkblue6.mp3')
);

document.querySelector('#darkblue6').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#white6').addEventListener(
  'mouseover',
  makeAudioHandler('6/white6.mp3')
);

document.querySelector('#white6').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#lightblue6').addEventListener(
  'mouseover',
  makeAudioHandler('6/lightblue6.mp3')
);

document.querySelector('#lightblue6').addEventListener(
  'mouseout',
  makeOutHandler()
);  

document.querySelector('#song6').addEventListener(
  'mouseover',
  makeAudioHandler('6/song6.mp3')
);

document.querySelector('#song6').addEventListener(
  'mouseout',
  makeOutHandler()
);  

<!--7-->
document.querySelector('#red7').addEventListener(
  'mouseover',
  makeAudioHandler('7/red7.mp3')
);
document.querySelector('#red7').addEventListener(
  'mouseout',
  makeOutHandler()
); 

document.querySelector('#white7').addEventListener(
  'mouseover',
  makeAudioHandler('7/white7.mp3')
);
document.querySelector('#white7').addEventListener(
  'mouseout',
  makeOutHandler()
);  
document.querySelector('#white7a').addEventListener(
  'mouseover',
  makeAudioHandler('7/white7.mp3')
);
document.querySelector('#white7a').addEventListener(
  'mouseout',
  makeOutHandler()
); 
document.querySelector('#black7').addEventListener(
  'mouseover',
  makeAudioHandler('7/black7.mp3')
);
document.querySelector('#black7').addEventListener(
  'mouseout',
  makeOutHandler()
); 

document.querySelector('#song7').addEventListener(
  'mouseover',
  makeAudioHandler('7/song7.mp3')
);
document.querySelector('#song7').addEventListener(
  'mouseout',
  makeOutHandler()
); 
document.querySelector('#song7a').addEventListener(
  'mouseover',
  makeAudioHandler('7/song7.mp3')
);
document.querySelector('#song7a').addEventListener(
  'mouseout',
  makeOutHandler()
); 

<!--9-->
document.querySelector('#yellow9').addEventListener(
  'mouseover',
  makeAudioHandler('9/yellow9.mp3')
);
document.querySelector('#yellow9').addEventListener(
  'mouseout',
  makeOutHandler()
); 
 
document.querySelector('#yellow9a').addEventListener(
  'mouseover',
  makeAudioHandler('9/yellow9.mp3')
);
document.querySelector('#yellow9a').addEventListener(
  'mouseout',
  makeOutHandler()
); 

document.querySelector('#darkblue9').addEventListener(
  'mouseover',
  makeAudioHandler('9/darkblue9.mp3')
);
document.querySelector('#darkblue9').addEventListener(
  'mouseout',
  makeOutHandler()
); 

document.querySelector('#darkblue9a').addEventListener(
  'mouseover',
  makeAudioHandler('9/darkblue9.mp3')
);
document.querySelector('#darkblue9a').addEventListener(
  'mouseout',
  makeOutHandler()
); 
document.querySelector('#burgundy9').addEventListener(
  'mouseover',
  makeAudioHandler('9/burgundy9.mp3')
);
document.querySelector('#burgundy9').addEventListener(
  'mouseout',
  makeOutHandler()
); 
document.querySelector('#song9').addEventListener(
  'mouseover',
  makeAudioHandler('9/song9.mp3')
);
document.querySelector('#song9').addEventListener(
  'mouseout',
  makeOutHandler()
); 

<!--10-->

document.querySelector('#black10').addEventListener(
  'mouseover',
  makeAudioHandler('10/black10.mp3')
);
document.querySelector('#black10').addEventListener(
  'mouseout',
  makeOutHandler()
); 

document.querySelector('#black10a').addEventListener(
  'mouseover',
  makeAudioHandler('10/black10.mp3')
);
document.querySelector('#black10a').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#black10b').addEventListener(
  'mouseover',
  makeAudioHandler('10/black10.mp3')
);
document.querySelector('#black10b').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#red10').addEventListener(
  'mouseover',
  makeAudioHandler('10/red10.mp3')
);
document.querySelector('#red10').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#red10b').addEventListener(
  'mouseover',
  makeAudioHandler('10/red10.mp3')
);
document.querySelector('#red10b').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#red10c').addEventListener(
  'mouseover',
  makeAudioHandler('10/red10.mp3')
);
document.querySelector('#red10c').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#red10d').addEventListener(
  'mouseover',
  makeAudioHandler('10/red10.mp3')
);
document.querySelector('#red10d').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#song10').addEventListener(
  'mouseover',
  makeAudioHandler('10/song10.mp3')
);
document.querySelector('#song10').addEventListener(
  'mouseout',
  makeOutHandler()
);

<!--11-->

document.querySelector('#black11').addEventListener(
  'mouseover',
  makeAudioHandler('11/black11.mp3')
);
document.querySelector('#black11').addEventListener(
  'mouseout',
  makeOutHandler()
); 

document.querySelector('#black11a').addEventListener(
  'mouseover',
  makeAudioHandler('11/black11.mp3')
);
document.querySelector('#black11a').addEventListener(
  'mouseout',
  makeOutHandler()
); 

document.querySelector('#white11').addEventListener(
  'mouseover',
  makeAudioHandler('11/white11.mp3')
);
document.querySelector('#white11').addEventListener(
  'mouseout',
  makeOutHandler()
); 
document.querySelector('#white11a').addEventListener(
  'mouseover',
  makeAudioHandler('11/white11.mp3')
);
document.querySelector('#white11a').addEventListener(
  'mouseout',
  makeOutHandler()
); 
document.querySelector('#song11').addEventListener(
  'mouseover',
  makeAudioHandler('11/song11.mp3')
);
document.querySelector('#song11').addEventListener(
  'mouseout',
  makeOutHandler()
); 

<!--12-->


document.querySelector('#lightblue12').addEventListener(
  'mouseover',
  makeAudioHandler('12/lightblue12.mp3')
);
document.querySelector('#lightblue12').addEventListener(
  'mouseout',
  makeOutHandler()
);

document.querySelector('#lightblue12a').addEventListener(
  'mouseover',
  makeAudioHandler('12/lightblue12a.mp3')
);
document.querySelector('#lightblue12a').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#lightblue12b').addEventListener(
  'mouseover',
  makeAudioHandler('12/lightblue12a.mp3')
);
document.querySelector('#lightblue12b').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#lightblue12c').addEventListener(
  'mouseover',
  makeAudioHandler('12/lightblue12a.mp3')
);
document.querySelector('#lightblue12c').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#darkblue12').addEventListener(
  'mouseover',
  makeAudioHandler('12/darkblue12.mp3')
);
document.querySelector('#darkblue12').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#darkblue12b').addEventListener(
  'mouseover',
  makeAudioHandler('12/darkblue12b.mp3')
);
document.querySelector('#darkblue12b').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#darkblue12a').addEventListener(
  'mouseover',
  makeAudioHandler('12/darkblue12b.mp3')
);
document.querySelector('#darkblue12a').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#burgundy12').addEventListener(
  'mouseover',
  makeAudioHandler('12/burgundy12.mp3')
);
document.querySelector('#burgundy12').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#song12a').addEventListener(
  'mouseover',
  makeAudioHandler('12/song12a.mp3')
);
document.querySelector('#song12a').addEventListener(
  'mouseout',
  makeOutHandler()
);
document.querySelector('#song12').addEventListener(
  'mouseover',
  makeAudioHandler('12/song12.mp3')
);
document.querySelector('#song12').addEventListener(
  'mouseout',
  makeOutHandler()
);

document.querySelector('#question').addEventListener(
  'mouseover',
 function (event) { 
	event.preventDefault();
	document.querySelector('.instructions').style.display = 'block';
 });
document.querySelector('#question').addEventListener(
  'mouseout',
  function (event) { 
	event.preventDefault();
	document.querySelector('.instructions').style.display = 'none';
 });
 
 document.querySelector('#mute').addEventListener(
  'click',
  function (event) {
  event.preventDefault();
  if (audio.volume !== 0) {
     audio.volume = 0;
	 event.target.src = 'images/mute1.png';
  } else {
     audio.volume = 1;
	 event.target.src = 'images/mute.png';
  } 
  });

//Audiohandler is a separate script that helps us to start and stop music when we click the buttons//
function makeAudioHandler (audioSource) {
  return function (event) {
    // if no source was set previously
    // or if the source is not current sound
    if (!audio.src || audio.src.indexOf(audioSource) === -1) {
      audio.src = audioSource;
      audio.play();
    }
    // if already playing this sound
    else if (audio.src.indexOf(audioSource) !== -1) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    event.preventDefault();
  };
}
// this function creates a handler for mouseout event
// in order to stop playing audio when respective area 
// is not hovered any more
function makeOutHandler () {
  return function () {
    audio.pause();
  };
}
