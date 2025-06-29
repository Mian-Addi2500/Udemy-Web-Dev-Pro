// 2 ways of declearing Objects 1)littler type 2)constructor type

// so there is a concept which is called [Singleton] which when we made object with [constructor] then the object is [singleton] mean it is only one object like him only (apny thra ka sirf aik hi ya object h )

//⏳👁‍🗨 interview Q is => When we built object with [constructor] then this is  [singleton] and whe we builte object like/with [litterals] then this is [not singleton]

// Now we see the concept of [Object with constructor] 🔻

// object.create
// 🔺this is the concept by this we made object with constructor and by this singleton is created

// Now we see the concept of [Object Literals] 🔻

const jsUser = {
  name: "Adil",
  age: 22,
  location: "Mailsi",
  email: "adil@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
  "full name": "Adil Mian",
};

// There are 2 ways to access the values of Object 🔻

// 1st
// console.log(jsUser.email);
// 🔺In this method we simply use [.]and give key of object the value comes in output

// 2nd
// console.log(jsUser["email"]);
// 🔺In this method we use squre brackets [] to access values and when we use [] then we must key in [string] formate then it will take value and we also knows that Object take key name as [string] type by default

// Now why we use squre bracket [] method 🔻

// Bcz when we try to access [full name] then we have only way to use [] other then [.] method does not work on this🔻
// console.log(jsUser["full name"]);

// ⏳👁‍🗨 interview Q is => Take a symbol and add it to object keys and print it 🔻

const mySym = Symbol("key1");

const jsUser1 = {
  [mySym]: "mykey1",
  name: "Adil",
  age: 22,
};
// console.log(jsUser1[mySym]);

// now how to change value of an object 🔻

jsUser.email = "zono@gmail.com";
// console.log(jsUser.email);

// now how to lock value of an object mean no one can change locked value of an object🔻

// Object.freeze(jsUser1);
// jsUser1.name = "Zono";

// console.log(jsUser1);

// Now see the concept of add [function] in to object🔻

jsUser1.greetings = function () {
  console.log("hello js user");
};
// console.log(jsUser1.greetings);

//🔺Output is : [Function (anonymous)] => this will return back a function simply mean that function is not exicute yet only function refrence comes

// console.log(jsUser1.greetings());

//🔺Output is : hello js user => this time fuction exicuted

// Now we add another fuction in it and we want that which name we use in our object is refer to our fuction let see how? 🔻

jsUser1.greetingsTwo = function () {
  console.log(`hello js user, ${this.name}`);
};

// console.log(jsUser1.greetingsTwo());

// 🔺this concept when we referance the same object for this we use[this] and when we right [[this] and after [this] we use (.) like {this.}]  then all properties of our objects shown to us and we use them easily.

// Now who to [Singleton] our object or how to declear our object with help of [Constructor]🔻

// const tinderUser = new Object();

// 🔺 this is [Singleton] object which declear with [Constructor]

// Now we continue our Object jornary with Object Litelar concept bcz mostly we use it🔻

const tinderUser = {};

// now we manullay add values in our object

tinderUser.id = "123abc";
tinderUser.name = "adil";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// now we see the concept of [Object inside another Object]🔻

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullName: {
      firstName: "Adil",
      lastName: "Mian",
    },
  },
};

// Now how to access fistName value in nested Object concept 🔻

// console.log(regularUser.fullname.userfullName.firstName);

// 🔺Output : Adil

// Now How to Merge or Combine two or more objects method 🔻

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
const obj3 = {
  5: "a",
  6: "b",
};

// now thought that to store both objects into new object like🔻

const obj4 = { obj1, obj2 };
// console.log(obj4);
// 🔺Output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } => this is not working

// We use [Object.assign] to combine all objects in to one object 🔻
const obj5 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj5);

// 🔺output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } => this is our desire output

// 🔺 now how the above concept work in [assign] method we use two thing 1)Target and 2)source. [Target] means all values come into this targeted empty object {} and store in it . [Source] means all those values which should be combined like in our case values are obj1, obj2,and obj3 all these value we should want to combine into a single object. And store all thes values in to target {} object

//🔺 So this is [assing Method] but acctullay we should use it rearly

// We should moslty use [Seapred] method like we use it in [Array] this method also use there 🔻

const obj6 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj6);
// 🔺output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } => this is also our desire output

// When values comes from [Database] the value mostly comes in the form of [Array of Objects] like 🔻

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
    name: "adil",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

// 🔺We study them next lec we see them in Projects this type of syntex mostly comes that there should be many [Object] in our [Array] and we want to [Loop] through them or print any value from them

// how to print value from that type of data 🔻
// We use loop through our array by [array.map] which we study in upcoming lec now we simply access 1st object email like this 🔻
// console.log(users[0].email);

// 🔺output : h@gmail.com => Inthis concept 1st we simply access the 1st object of array by using array[0] method which we already study in array topic and then we use [.] notation and we get our desire output

// now we futher study the next concept of geting [keys] of any Object

const ptclUser = {};

ptclUser.id = "456Werty";
ptclUser.name = "Zono";
ptclUser.email = "z@gmail.com";
ptclUser.isLoggedIn = true;

// now we want the above object🔺 keys so let see 🔻
// console.log(Object.keys(ptclUser));

//🔺Output : [ 'id', 'name', 'email', 'isLoggedIn' ] => By this all [keys] comes

//🔺  ⏳👁‍🗨 Notice 1 thing the keys comes in datatype of array[] this is most important when we work with [data base] to loop through data easily

// We also get [Values] to from an Object 🔻

// console.log(Object.values(ptclUser));

//🔺Output :[ '456Werty', 'Zono', 'z@gmail.com', true ] => And these are also comes in arry Data type

// 🔺 When our output convert into [Array] now we apply all methods of array easily

// Another concept come which is [Object.entries] This method is comparativaly use less let see what is its purpose🔻

// console.log(Object.entries(ptclUser));

/*
  🔺output : [
  [ 'id', '456Werty' ],
  [ 'name', 'Zono' ],
  [ 'email', 'z@gmail.com' ],
  [ 'isLoggedIn', true ]
] => We get array inside of an array and it make all [key and value] to seprated array and the [1st property of array] should be the [key of object] and [2nd should be value of object]

*/

// When we loop through in an [Objects] and after loop we extract some values and during extracting values sometime this value should not be exesisit(mojod) and if the value doesnot exist(mojod) then there should be the chance of crash our app for this we use this concept. This concept simply ask to the Object that you have this value or not. So let see how it work🔻

// console.log(ptclUser.hasOwnProperty("name"));

//🔺 output : true

// console.log(ptclUser.hasOwnProperty("firstName"));

//🔺 output :  false

//💢💠 Now We Learn Concept of [Object De-Structuring] 🔻

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh Sir",
};

// In Above we study that we get any value from Object by using Object name and  [.] notation and the property name like 🔻

// console.log(course.courseInstructor);

// 🔺Output : Hitesh Sir

// But some people not like this to write evey time [course.courseInstructor] they want simple small name for this they should [de-structure] the Object like 🔻

const { courseInstructor } = course;

// console.log(courseInstructor);

// 🔺Output : Hitesh Sir => Now rather then using [course.courseInstructor] after de-structuring the object they simply use [courseInstructor]

// But some time they want to also change the property name and according there own choice they also do this too. let see how🔻

const { courseInstructor: Instructor } = course;

// console.log(Instructor);

// 🔺Output : Hitesh Sir => Now rather then using [courseInstructor] we should use our desire name like [Instructor] only 

//🔺 This concept is mostly use in [React]

//💢💠 Now Comes on our API concept 🔻

// Api's are value which are comes from BackEnd and how we write them. In early days these values comes was in [XML form] which was so difficult task to write these value. But Now a days these values are comes in [JSON] formate

// Now how [JSON] look like ? 🔻

/*
{
    'name':'adil',
    'courseName':'js in hindi',
    'prize' : 'free'
}

*/

// Some time Api in this formate also 🔻
/*
[
    {},
    {},
    {},
    {}
]
*/