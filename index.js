function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  var str = "";
  
  for (let i = 0; i < musicians.length; i++) {
    str = musicians[i] + " plays " + instruments[i];
    arr.push(str);
  }
  
  return arr;
}


function johnLennonFacts (facts) {
    var arr = [];
    var str;

    let i = 0;

    while(i < facts.length){
        i++;
        str = facts[i] + "!!!";
        arr.push(str)

    }
    return arr;
}


function iLoveTheBeatles (num) {
  var myarr = [];
  var str = "";
  
  do{
    myarr.push("I Love the Beatles!");
    num++;
    
  }while(num < 15);
    return myarr;
}