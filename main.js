//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.

//console.log("Question 1");
//console.log(yourAnswer);

console.log("Question 1");

var me = 
{
	name: "Tommy",
	denver: "Denver",
	title: "Sefl Employed",
}

console.log(me);

//{ name: 'Tommy', denver: 'Denver', title: 'Sefl Employed' }

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                               family: ['Joan', 'Kyle', 'Hank'] }

console.log("Question 2");

var me = 
{
	name: "Tommy",
	denver: "Denver",
	title: "Sefl Employed",
}

me.family = ["Jeanne", "Gary", "Michael"];

console.log(me);

//{ name: 'Tommy', denver: 'Denver', title: 'Sefl Employed', family: [ 'Jeanne', 'Gary', 'Michael' ] }


// 3. Using the "me" object, use two different methods of accessing your city.

console.log("Question 3");

console.log(me.city);

console.log(me["city"]);

//Denver
//Denver

// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                        }
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinneChoice array)

console.log(invitees.adults[0].dinnerChoice);

//[ 'salad', 'beef', 'ice cream' ]

// 5. Access Pablo's table number.

console.log("Question 5");

console.log(invitees.children[1].table);

//4

// 6. Access Lauren's seating specialConsideration.

console.log("Question 6");

console.log(invitees.adults[2].specialConsiderations.allergies);

//melon

// 7. Access Billy's dessert choice (this will be the third item in his dinneChoice array)

console.log("Question 7");

console.log(invitees.adults[1].dinnerChoice[2]);

//sorbet

// 8. Access Ada's allergies.

console.log("Question 8");

console.log(invitees.children[2].allergies[0]);

//boys

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

console.log("Question 9");

console.log("Lauren's appetizer is " + invitees.adults[2].dinnerChoice[0] + ". She will be eating " + invitees.adults[2].dinnerChoice[1] + " for dinner, and has selected " + invitees.adults[2].dinnerChoice[2] + " as her dessert.");

//Lauren's appetizer is soup. She will be eating chicken for dinner, and has selected ice cream as her dessert.

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

console.log("Question 10");

var jsWorkshop = {};

console.log(jsWorkshop);

//{}

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

console.log("Question 11");

jsWorkshop.classMates = ["Rick", "Emran", "Waldo", "Samantha", "Tommy"];

console.log(jsWorkshop.classMates);

//[ 'Rick', 'Emran', 'Waldo', 'Samantha', 'Tommy' ]

// 12. Acesss the third classmate in your "jsWorkshop" object.

console.log("Question 12");

console.log(jsWorkshop.classMates[2]);

//Waldo

// 13. Get the length of the fourth classmate's name.

console.log("Question 13");

console.log(jsWorkshop.classMates[3].length);

//8

// 14. Clear the classmates value.

console.log("Question 14");

delete jsWorkshop.classMates;

console.log(jsWorkshop.classMates);

//undefined

// 15. Create an emtpy array called "books".
// Create three objects that contain book titles, their author, and number of pages.
// Insert the three objects into the "books" array.
// (Feel free to make up the titles. And the authors. Have fun. No pressure.)
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
// Final desired result:
    var books = [{youHadMeAtWoof: {title: "You Had Me at Woof",
                                  author: "Julie Klum",
                                  pages: 207
                                  },
                   theCatcherInTheRye: {
                                  title: "The Catcher in the Rye",
                                  author: "JD Salinger",
                                  pages: 214
                                  },
                   bangkokHaunts: {
                                  title: "Bangkok Haunts",
                                  author: "John Burdett",
                                  pages: 569,
                                  }
                }]

console.log("Question 15");

var books = [];

var book1 = {youHadMeAtWoof:
{
	title: "You Had Me at Woof",
	author: "Julie Klum",
	pages: 207
}}

var book2 = {theCatcherInTheRye:
{
	title: "The Catcher in the Rye",
	author: "JD Salinger",
	pages: 214
}}

var book3 = {bangkokHaunts:
{
	title: "Bangkok Haunts",
	author: "John Burdett",
	pages: 569
}}

books.push(book1, book2, book3)

console.log(books);

//[ { youHadMeAtWoof: { title: 'You Had Me at Woof', author: 'Julie Klum', pages: 207 } },{ theCatcherInTheRye: { title: 'The Catcher in the Rye', author: 'JD Salinger', pages: 214 } },{ bangkokHaunts: { title: 'Bangkok Haunts', author: 'John Burdett', pages: 569 } } ]
    
// 15a. Access the author of the first book.

console.log("Question 15a");

console.log(books[0].youHadMeAtWoof.author);

//Julie Klum

// 15b. Print the length of the author the the third book.

console.log("Question 15b");

console.log(books[2].bangkokHaunts.author.length);

//12

// 16. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
// (Go ahead and make this up, too. Get wild.)

console.log("Question 16");

books[0].youHadMeAtWoof.dateRead = 2015;

books[1].theCatcherInTheRye.dateRead = 2013;

books[2].bangkokHaunts.dateRead = "Never";

console.log(books);

//[ { youHadMeAtWoof: { title: 'You Had Me at Woof', author: 'Julie Klum', pages: 207, dateRead: 2015 } }, { theCatcherInTheRye: { title: 'The Catcher in the Rye', author: 'JD Salinger', pages: 214, dateRead: 2013 } }, { bangkokHaunts: { title: 'Bangkok Haunts', author: 'John Burdett', pages: 569, dateRead: 'Never' } } ]

// 17. Remove the second book from the books Array.

console.log("Question 17");

delete books[1];

console.log(books);

//[ { youHadMeAtWoof: { title: 'You Had Me at Woof', author: 'Julie Klum', pages: 207, dateRead: 2015 } },, { bangkokHaunts: { title: 'Bangkok Haunts', author: 'John Burdett', pages: 569,dateRead: 'Never' } } ]

// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.

console.log("Bonus");

//Lliteral Notation is for simple objects because you add the properties right away.

//Constructor Notation is when you declare the object and make it empty so you can add the properties later.


// 18. Let's play a game. Create an object (like we did with the bike in class) and assign it at least four properties.
// The class will guess what your object is based on it's properties.

console.log("Question 18");

thing =
{
	actor: "Fred Armisen",
	actress: "Carrie Brownstein",
	medium: "tv",
	Setting: "Portland"
}


// You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
// 19. Create an empty object called "zoo"

console.log("Question 19");

var zoo = {};

console.log(zoo);

//{}

// 20. Create assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.

console.log("Question 20");

zoo.killerWhale = {};

zoo.polarBear = {};

zoo.huskey = {};

console.log(zoo);

//{ killerWhale: {}, polarBear: {}, huskey: {} }

// 21. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)

console.log("Question 21");

zoo.killerWhale.timeSlept = 5;

zoo.polarBear.timeSlept = 8;

zoo.huskey.timeSlept = 4;

console.log(zoo);

//{ killerWhale: { timeSlept: 5 }, polarBear: { timeSlept: 8 }, huskey: { timeSlept: 4 } }

// 22. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.

console.log("Question 22");

zoo.killerWhale.meals = [];

zoo.polarBear.meals = [];

zoo.huskey.meals = [];

console.log(zoo);

//{ killerWhale: { timeSlept: 5, meals: [] }, polarBear: { timeSlept: 8, meals: [] }, huskey: { timeSlept: 4, meals: [] } }

// 23. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.

console.log("Question 23");

zoo.killerWhale.meals.monday = {};

zoo.killerWhale.meals.wednesday = {};

zoo.polarBear.meals.monday = {};

zoo.polarBear.meals.wednesday = {};

zoo.huskey.meals.monday = {};

zoo.huskey.meals.wednesday = {};

console.log(zoo);

//{ killerWhale: { timeSlept: 5, meals: [ monday:{}, wednesday: {} ] }, polarBear: { timeSlept: 8, meals: [ monday: {}, wednesday: {} ] }, huskey: { timeSlept: 4, meals: [ monday: {}, wednesday: {} ] } }



// 24. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
// That array should look like this (within the meals object, within the animal object, within the zoo object):
  [ { monday: {
    breakfast: "cheetos on top of greek yogurt",
    lunch: "6 gallons of Diet Coke",
    dinner: "leftover lasagna"
  }},
   {wednesday: {
    breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
    lunch: "a ham and cheddar lunchable",
    dinner: "I put my thing down, flip it, and reverse it"
  }}]
  
console.log("Question 24");

zoo.killerWhale.meals.monday = 
{
	breakfast: "cheetos on top of greek yogurt",
	lunch: "6 gallons of Diet Coke",
	dinner: "leftover lasagna"
}

zoo.killerWhale.meals.wednesday =
{
	breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
	lunch: "a ham and cheddar lunchable",
	dinner: "I put my thing down, flip it, and reverse it"
}

zoo.polarBear.meals.monday = 
{
	breakfast: "Humans",
	lunch: "Humans",
	dinner: "Snow"
}

zoo.polarBear.meals.wednesday = 
{
	breakfast: "Wolves",
	lunch: "Snow Bunnies",
	dinner: "Walrus"
}

zoo.huskey.meals.monday =
{
	breakfast: "Dog Food",
	lunch: "Ham",
	dinner: "Treats"
}

zoo.huskey.meals.wednesday =
{
	breakfast: "Fish",
	lunch: "Cheese",
	dinner: "Ice Cream"
}


console.log(zoo.huskey.meals);

//[ monday: { breakfast: 'Dog Food', lunch: 'Ham', dinner: 'Treats' }, wednesday: { breakfast: 'Fish', lunch: 'Cheese', dinner: 'Ice Cream' } ]

// 25. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.

console.log("Question 25");

zoo.polarBear.timeSlept = zoo.polarBear.timeSlept + 2;

console.log(zoo.polarbear.timeSlept);

//10

// 26. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.

console.log("Question 26");

zoo.killerWhale.favoriteActivities = ["Coding", "Sleeping", "Coding"]

zoo.polarBear.favoriteActivities = ["Playing", "Eating", "Scaring"]

zoo.huskey.favoriteActivities= ["Being Petted", "Sledding", "Eating"]
	
console.log(zoo);

//{ killerWhale: { timeSlept: 5, meals: [ monday: [Object], wednesday: [Object] ], favoriteActivities: [ 'Coding', 'Sleeping', 'Coding' ] }, polarBear: { timeSlept: 10, meals: [ monday: [Object], wednesday: [Object] ], favoriteActivities: [ 'Playing', 'Eating', 'Scaring' ] }, huskey: { timeSlept: 4, meals: [ monday: [Object], wednesday: [Object] ], favoriteActivities: [ 'Being Petted', 'Sledding', 'Eating' ] } }

// 27. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.

console.log("Question 27");

delete zoo.killerWhale.meals.monday.lunch;

console.log(zoo.killerWhale.meals.monday.lunch);

//undefined

// 28. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.

console.log("Question 28");

var buds = zoo;

zoo = {animals: buds};

console.log(zoo);

//{ animals:  { killerWhale: { timeSlept: 5, meals: [Object], favoriteActivities: [Object] }, polarBear: { timeSlept: 10, meals: [Object], favoriteActivities: [Object] }, huskey: { timeSlept: 4, meals: [Object], favoriteActivities: [Object] } } }

// 29. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.

console.log("Question 29");

zoo.zookeepers = {};

console.log(zoo.zookeepers);

//{}

// 30. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.

console.log("Question 30");

zoo.zookeepers.tommy = {};

zoo.zookeepers.chirs = {};

console.log(zoo);

//{ animals: { killerWhale: { timeSlept: 5, meals: [Object], favoriteActivities: [Object] }, polarBear: { timeSlept: 10, meals: [Object], favoriteActivities: [Object] }, huskey: { timeSlept: 4, meals: [Object], favoriteActivities: [Object] } }, zookeepers: { tommy: {}, chirs: {} } }

// 31. This joker wants you to add the "hireDate" for each zookeeper. Within the empty object attached to each name, assign a key/value pair of
// "hireDate" and the value being a string of hire date.

console.log("Question 31");

zoo.zookeepers.tommy.hireDate = "10/10/2015";

zoo.zookeepers.chirs.hireDate = "12/10/2016";

console.log(zoo);

//{ animals: { killerWhale: { timeSlept: 5, meals: [Object], favoriteActivities: [Object] }, polarBear: { timeSlept: 10, meals: [Object], favoriteActivities: [Object] }, huskey: { timeSlept: 4, meals: [Object], favoriteActivities: [Object] } }, zookeepers: { tommy: { hireDate: '10/10/2015' }, chirs: { hireDate: '12/10/2016' } } }
