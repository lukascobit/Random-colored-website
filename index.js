function ChangeColors(){

  //this is not a very good code but its working
  
    let letters = '0123456789ABCDEF';

    let RandomColor = '#';
    let RandomColor2 = '#';
    let RandomColor3 = '#';
    let RandomColor4 = '#';
    let RandomColor5 = '#';
    let RandomColor6 = '#';
    let RandomColor7 = '#';
    let RandomColor8 = '#';
    let RandomColor9 = '#';

    for (let i = 0; i < 6; i++) {
      
      RandomColor += letters[Math.floor(Math.random() * 16)];
    }
    for (let i = 0; i < 6; i++) {
      
      RandomColor2 += letters[Math.floor(Math.random() * 16)];
    }
    for (let i = 0; i < 6; i++) {
      
      RandomColor3 += letters[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
      
      RandomColor4 += letters[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
      
      RandomColor5 += letters[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
      
      RandomColor6 += letters[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
      
      RandomColor7 += letters[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
      
      RandomColor8 += letters[Math.floor(Math.random() * 16)];
    }
    for (let i = 0; i < 6; i++) {
      
      RandomColor9 += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("Body").style.backgroundColor = RandomColor;
    document.getElementById("R3").style.backgroundColor = RandomColor2;
    document.getElementById("R4").style.backgroundColor = RandomColor3;
    document.getElementById("R5").style.backgroundColor = RandomColor4;
    document.getElementById("R6").style.backgroundColor = RandomColor5;
    document.getElementById("R7").style.backgroundColor = RandomColor6;
    document.getElementById("R8").style.backgroundColor = RandomColor7;
    document.getElementById("R2").style.backgroundColor = RandomColor8;
    document.getElementById("R9").style.fill = RandomColor9;

}

