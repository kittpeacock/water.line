function cs_change_music(music)
   {
      
     document.getElementById("my-audio").pause();
     document.getElementById("my-audio").setAttribute('src', music);
     document.getElementById("my-audio").load();
     document.getElementById("my-audio").play();
     document.getElementById("my-audio").loop();
   }
   
function cs_pause_music(music) {
   document.getElementById("my-audio").pause();
}