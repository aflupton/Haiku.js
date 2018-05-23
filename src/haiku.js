export class Haiku  {
  constructor(line1, line2, line3, count) {
    this.line1=line1.toLowerCase();
    this.line2=line2.toLowerCase();
    this.line3=line3.toLowerCase();
    this.count=0;

  }
  // checkLines() {
  //   let line1="";
  //   let line2="";
  //   let line3="";
  //   if (line1 != null && line1 != null && line1 != null) {
  //     console.log("made it to return");
  //     return("Yes");
  //   }
  // }
  removePunc(){
    let spaceReg = /[s+]/g;
    let line1="li@#$%$# %*&ne1";
    console.log("Reached removePunc()");
    let line2="This#$%$% #is *&(*&a> ><><haiku)";
    let line3="$#%$It(*& has(*&*( seventeen%$^ %syllables)))";
    let count = 0;
    if(line1 != null && line2 != null && line3 != null) {
      console.log("Reached if statement");
      for(var i = 0; i < line2.length; i++) {
        console.log("Reached for statement" + " " + line1 + " " + line1.length);
        line1 = line1.replace(/[1234567890!@#$%^&*()_+-=<>,.?'"`~/`]/g, "").split([" ", line1.length]);
        console.log(line1)
        line2 = line2.replace(/[1234567890!@#$%^&*()_+-=<>,.?'"`~/`]/g, "").split([" ", line2.length]);
        line3 = line3.replace(/[1234567890!@#$%^&*()_+-=<>,.?'"`~/`]/g, "").split([" ", line3.length]);
      }
      console.log("Reached end of test:" + " " + line1 + " " + line2 + " " + line3);
      return("punctuation gone");
    }
  }
  preSufSep(){
    let line1="";
    let line2="";
    let line3="";
    let count=0;
    if(line1 != null && line2 != null && line3 != null){
    console.log(("str1,str2,str3,str4".match(/,/g) || []).length)
    line=line1.match(new RegExp("un","pre")) || []).length);//g)
  }

  }
}

class Syllables {
  constructor () {

  }
}
