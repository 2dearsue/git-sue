
let Student = function (fullName, course, satisfaction) {
  this.fullName = fullName;
  this.course = course;
  this.satisfaction = satisfaction;

  this.interpretFeelings = function () {
    if (this.satisfaction > 80) {
      this.mood = `He/She found the course perfect.`;
    } else if (this.satisfaction >= 50) {
      this.mood = `He/she is content with the course overall.`;
    } else {
      this.mood = `Keeps complaining. Potential refund is coming.`;
    }
  }

}

let sue = new Student (`Susanne Schuett`, `PHP`, 92);
let bob = new Student (`Bob Andrews`, `Ruby`, 59);
let peter = new Student (`Peter Shaw`, `JS`, 84);
let eugen = new Student (`Jewgeny Kuhn`, `JS`, 68);
let mohLah = new Student (`Mohamad Lahham`, `Ruby`, 77);
let mohWa = new Student (`Mohammed Wahba`, `PHP`, 87);
let carmine = new Student (`Carmine Tambascia`, `JS`, 75);
let nour = new Student (`Nour Mustafa`, `Ruby`, 43);
let ali = new Student (`Ali Pudina`, `PHP`, 83);
let meir = new Student (`Meir Overferst`, `JS`, 99);

let studentsTogether = [sue, bob, peter, eugen, mohLah, mohWa, carmine, nour, ali, meir];
// every entry is an object!!!!

for (let student of studentsTogether) { // for ... in...  // is for object
  student.interpretFeelings();
}
