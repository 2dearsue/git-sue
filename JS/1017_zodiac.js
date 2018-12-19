let Zodiac = function(sign, beginDate, endDate) {
  this.sign = sign;
  this.beginDate = beginDate;
  this.endDate = endDate;
} // constructor is typeOf function and big letter at beginning

let aries = new Zodiac(`Aries`, new Date(2020, 2, 21), new Date(2020, 3, 19));
let taurus = new Zodiac(`Taurus`, new Date(2020, 3, 20), new Date(2020, 4, 20));
let gemini = new Zodiac(`Gemini`, new Date(2020, 4, 21), new Date(2020, 5, 20));
let cancer = new Zodiac(`Cancer`, new Date(2020, 5, 21), new Date(2020, 6, 22));
let leo = new Zodiac(`Leo`, new Date(2020, 6, 21), new Date(2020, 7, 22));
let virgo = new Zodiac(`Virgo`, new Date(2020, 7, 23), new Date(2020, 8, 22));
let libra = new Zodiac(`Libra`, new Date(2020, 8, 23), new Date(2020, 9, 22));
let scorpio = new Zodiac(`Scorpio`, new Date(2020, 9, 23), new Date(2020, 10, 21));
let sagittarius = new Zodiac(`Sagittarius`, new Date(2020, 10, 22), new Date(2020, 11, 21));
let capricorn = new Zodiac(`Capricorn`, new Date(2020, 11, 22), new Date(2020, 0, 19));
let aquarius = new Zodiac(`Aquarius`, new Date(2020, 0, 20), new Date(2020, 1, 19));
let pisces = new Zodiac(`Pisces`, new Date(2020, 1, 20), new Date(2020, 2, 20));

// KEEP IN MIND THAT MONTHS GO FROM 0 TO 11 !!!!!!

allZodiacs = [aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces ];

let myBirthday = new Date (1988, 2, 23);
let suesBirthday = new Date (1981, 1, 19);

let showZodiac = function(birthday) {
  birthday.setYear(2020);

  for (let zodiac of allZodiacs) {
    if (birthday >= zodiac.beginDate && birthday <= zodiac.endDate) {
      console.log(`Your zodiac sign is ${zodiac.sign}`);
      return; // return is for functions, only inside functions.. break is for loops
    }
  }
}

showZodiac(myBirthday);
showZodiac(suesBirthday);

// LOOPS : continue = skip only this specific iteration (loop continues); still update the i though!!!!
//          break = exit the loop, this is the last iteration; stops here and jumps outside the loop;

// FUNCTIONS : return = exits the function and returns its value; only for functions!!!
//                      break the loop if you put it inside and break the function;
