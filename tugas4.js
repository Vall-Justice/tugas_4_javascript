 // tugas 4

  
 let b = 157;
 let a = 182;
 let c = 170;
 
  // tinggi pertama
  if(a > b) {
    if(a > c) {
      console.log(a);
    } else {
      console.log(c);
    }
  } 
  
  else if(b > c) {
    if(b > a) {
      console.log(b);
    } else{
      console.log(c);
    }
  }
  
  // Tinggi kedua
  if( (a > b && a < c) || (a > c && a < b) ) {
    console.log(a);
  }
  else if ((b > a && b < c) || (b > c && b < a)) {
    console.log(b);
  } else {
    console.log(c);
  }
  
  
  // tinggi ketiga 
  if(a < b && a < c) {
    console.log(a);
  } else if(b < a && b < c) {
    console.log(b);
  } else {
    console.log(c);
  }
  