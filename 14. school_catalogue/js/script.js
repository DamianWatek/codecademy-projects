// Main class School
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() { return this._name; }
  get level() { return this._level; }
  get numberOfStudents() { return this._numberOfStudents; }
  
	// Seeter check type numberOfStudents
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
    } else {
    	console.log('Invalid input: numberOfStudents must be set to a Number.');
    	}
  }
	
  // Method we check info about school
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level}.`)
  }
  // Static method 
  static pickSubstituteTeacher(substituteTeachers) {
    this.substituteTeachers = [];
    let randomIndex = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}
// Primary school class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy  = pickupPolicy;
  }
  get pickupPolicy() { return this._pickupPolicy; } 
}
// HighSchool Class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() { 
    console.log(sportsTeams);
  } 
}
  
  

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(lorraineHansbury);
console.log();
lorraineHansbury.quickFacts();
console.log();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
console.log();
console.log(alSmith);
console.log();
alSmith.quickFacts();
console.log(alSmith._sportsTeams);

























