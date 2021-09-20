//detecting button press:-
var numberOfDrumButtons= document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
 var buttonsInnerHTML=this.innerHTML;
 makesound(buttonsInnerHTML);
});
}
//detecting keypress:-
document.addEventListener("keypress",function(event){
 makesound(event.key);
});
function makesound(key){
  switch (key) {
    case "w":
    var audio=new Audio("sounds/soham1.ogg");
     audio.play();
     break;
     case "a":
     var audio=new Audio("sounds/soham2.ogg");
      audio.play();
      break;
      case "s":
      var audio=new Audio("sounds/soham3.ogg");
       audio.play();


        break;
        case "d":
        var audio=new Audio("sounds/soham4.ogg");
         audio.play();


          break;
          case "j":
          var audio=new Audio("sounds/soham5.ogg");
           audio.play();


            break;
            case "k":
            var audio=new Audio("sounds/snare.mp3");
             audio.play();


              break;
              case "l":
              var audio=new Audio("sounds/kick-bass.mp3");
               audio.play();


                break;
    default:
    console.log(key);

  }
}
