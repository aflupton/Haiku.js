import { Haiku } from './../src/haiku.js';

// describe('Haiku', function() {
//   it('should check to see if the poem contains 3 lines',function() {
//     var newHaiku = new Haiku("This is a Haiku", "This has all five syllables", "Else not a Haiku");
//     console.log(newHaiku);
//     console.log(newHaiku.line1);
//     expect(newHaiku.line1).toEqual("This is a Haiku");
//     expect(newHaiku.line2).toEqual("This has all five syllables");
//     expect(newHaiku.line3).toEqual("Else not a Haiku");
//     expect(newHaiku.checkLines()).toEqual("Yes");
//   });
// });

describe('Haiku', function()
{
  it('should remove punctuation from a group of words', function(){
    let line1;
    let line2;
    let line3;
    let count=0;
    let newHaiku = new Haiku("Punctuation gone.", "Removes commas, other stuff?", "This is now naked!");
    console.log(newHaiku.line1, newHaiku.line2, newHaiku.line3);
    expect(newHaiku.removePunc()).toEqual("punctuation gone");
  });
});
describe('Haiku', function()
{
   it('should seperate prefixes and suffixes and add 1 to count of syllable', function(){
     let line1;
     let line2;
     let line3;
     let count=0;
     let newHaiku = new Haiku("prefix are leaving", "unbelievable program", "sleeping unheard of");
     expect(newHaiku.preSufSep().toEqual("prefixes and suffixes removed"));
   });
});
