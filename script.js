let drop = document.getElementById('drop')
let lies = document.getElementById('cor')
let ck = 0;


function atv(){
    if(ck == 1){
        lies.style.background = 'none';
        drop.style.display = 'none';
        ck = 0;
      }
      else{
        lies.style.background = '#fdd4d4';
        drop.style.display = 'flex';
        ck = 1;
      }
}

