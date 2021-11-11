let play = false;

function hinoPP(){
    if(!play){
        document.getElementById('hino').play();
        play = true;
    }else{
        document.getElementById('hino').pause();
        play = false;
    }
}