// /** Question 1: (1000 Points ⭐️)
//  * 1. write a class of `Person`, give it the following properties
//  * - firstName: String
//  * - lastName: String
//  * - gender: String
//  * - birthYear: Number
//  *
//  * 2. Add the constructor that initializes all properties
//  *
//  * 3. Add the following methods
//  *
//  *
//  * + printName(), that print the persons full name  (first name and last name)
//  *
//  * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
//  *   and returns the age of the person
//  *
//  * after you are done with the class, create at least 3 objects of type Person.
//  * print every person's name using the method printName of each object
//  * print out the sum of their ages using calculateAge() method
//  */
class Person {
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  printName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  calculateAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

const person1 = new Person("Meshari", "Alrashidi", "male", 1987);
const person2 = new Person("Mariam", "Omar", "female", 1994);
const person3 = new Person("Jana", "Omar", "female", 2020);

person1.printName();
person2.printName();
person3.printName();

const currentYear = 2023;

const sumOfAges =
  person1.calculateAge(currentYear) +
  person2.calculateAge(currentYear) +
  person3.calculateAge(currentYear);

console.log(`The sum of persons ages is ${sumOfAges}`);

// /** (Question 2): (15000 Points)
//  * 1. Write a class `Movie`, give it the following properties
//  * - title
//  * - duration (in minutes)
//  * - genre
//  * - [rating]
//  *
//  * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
//  *
//  * 3. and the following the methods
//  * + rate(rating),
//  *      That adds a new rating to the rating array.
//  *      Rating should be restricted to be greater than 0 and less than 10.
//  *      This function will be used to make a single rating for the movie.
//  * + averageRating(),
//  *      That calculates the average of the rating array.
//  *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
//  *      the average equation: average = sumOfValues / countOfValues
//  *      (*BONUS*): use the method reduce to calculate the average
//  */

class Movie {
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
    this.rating = [];
  }

  rate(rating) {
    if (rating > 0 && rating < 10) {
      this.rating.push(rating);
    }
  }

  averageRating() {
    if (this.rating.length === 0) {
      return 0;
    }
    const sumOfValues = this.rating.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sumOfValues / this.rating.length;
  }
}

const movie = new Movie("The Godfather", 99, "Crime");

movie.rate(9);
movie.rate(10);
movie.rate(8);

console.log(movie.averageRating());

// /** (Question 3): (1000 Points)
//  * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
//  * - movies: array of `Movie`
//  *
//  * 2. Add the following methods
//  * + addMovie(movie), that adds a movie to the actors movies
//  * +
//  */

// // write the class here

// class Actor extends Person {
//   constructor(firstName, lastName, age, gender) {
//     super(firstName, lastName, age, gender);
//     this.movies = [];
//   }

//   addMovie(movie) {
//     if (movie instanceof Movie) {
//       this.movies.push(movie);
//     } else {
//       console.log("Invalid movie object");
//     }
//   }
// }

// const actor = new Actor("Tom", "Hanks", 65, "Male");

// const movie = new Movie("Forrest Gump", 142, "Drama");
// actor.addMovie(movie);

// console.log(actor.movies); // output: [Movie { title: "Forrest Gump", duration: 142, genre: "Drama", rating: [] }]

class Actor extends Person {
  constructor(firstName, lastName, age, gender) {
    super(firstName, lastName, age, gender);
    this.movies = [];
  }

  addMovie(movie) {
    if (movie instanceof Movie) {
      this.movies.push(movie);
    } else {
      console.log("Invalid argument: must be a Movie instance");
    }
  }
}

const actor = new Actor("Tom", "Hanks", 65, "Male");

const movie1 = new Movie("Forrest Gump", 142, "Drama");
actor.addMovie(movie1);

console.log(actor.movies);
