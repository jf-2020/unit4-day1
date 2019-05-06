/* javascript_101_exercises.js - this prgm will implement solutions to
								 the javascript 101 exercises, part 1
   jf - 5/6
*/

// problem 1 - write a "hello world" function
function hello(name) {
	console.log("Hello " + name + "!");
}

// problem 2 - modify problem 1 such that return "Hello, world!" if
//			   no name given
function hello2(name) {
	if (name) {
		hello(name);
	} else {
		console.log("Hello, world!");
	}
}

// problem 3 - create a madlib function that accepts 2 strings, a
//			   name & a subject that'll be interpolated into a 
//			   basic madlib
function madlib(name, subject) {
	return name + "'s favorite subject in school is " + subject;
}

// problem 4 - write a tip calculator
function tipAmount(amount, serviceLevel) {
	if (serviceLevel == "good") {
		return .2 * amount;
	} else if (serviceLevel == "fair") {
		return .15 * amount;
	} else {
		return .1 * amount;
	}
}

// problem 5 - write a total amount calculator that returns not
//			   only the tip but also the total amount, including
//			   the tip
function totalAmount(amount, serviceLevel) {
	const tip = tipAmount(amount, serviceLevel);
	return amount + tip;
}

// problem 6 - write a split amount calculator that computes not
//			   only the tip but also the total amount, returning
//			   the amount to pay for each person, wherein the number
//			   of party members is passed into the function in
//			   addition to the arguments as defined for problems
//			   4 & 5
function splitAmount(amount, serviceLevel, numberOfPersons) {
	return totalAmount(amount, serviceLevel) / numberOfPersons;
}

// main function to run all the problem function definitions
function main() {
	// call problem # 1
	const moustache = "Moustache";
	console.log("Calling hello(" + moustache + ")");
	hello(moustache);

	// call problem # 2
	// (a) - with a name passed in
	console.log("\nCalling hello2(" + moustache + ")");
	hello2(moustache);
	// (b) - without a name passed in
	console.log("\nCalling hello2()");
	hello2();

	// call problem # 3
	const name2 = "Anushka";
	const subject = "art";
	console.log("\nCalling madlib(" + name2 + ", " + subject + ")");
	console.log(madlib(name2, subject));

	// call problem # 4
	// (a) - service level is good
	const service1 = "good";
	const amount1 = 100;
	console.log("\nCalling tipAmount(" + amount1 + ", " + service1 + ")");
	console.log(tipAmount(amount1, service1));
	// (b) - service level is fair
	const service2 = "fair";
	const amount2 = 40;
	console.log("\nCalling tipAmount(" + amount2 + ", " + service2 + ")");
	console.log(tipAmount(amount2, service2));
	// (c) - service level is bad
	const service3 = "bad";
	const amount3 = 20;
	console.log("\nCalling tipAmount(" + amount3 + ", " + service3 + ")");
	console.log(tipAmount(amount3, service3));

	// call problem # 5
	// (a) - service level is good
	const service11 = "good";
	const amount11 = 200;
	console.log("\nCalling totalAmount(" + amount11 + ", " + service11 + ")");
	console.log(totalAmount(amount11, service11));
	// (b) - service level is fair
	const service22 = "fair";
	const amount22 = 80;
	console.log("\nCalling totalAmount(" + amount22 + ", " + service22 + ")");
	console.log(totalAmount(amount22, service22));
	// (c) - service level is bad
	const service33 = "bad";
	const amount33 = 40;
	console.log("\nCalling totalAmount(" + amount33 + ", " + service33 + ")");
	console.log(totalAmount(amount33, service33));

	// call problem # 6
	// (a) - service level is good
	const service111 = "good";
	const amount111 = 400;
	const numberOfPersons1 = 5;
	console.log("\nCalling splitAmount(" + amount111 + ", " + service111 + ", " + numberOfPersons1 + ")");
	console.log(splitAmount(amount111, service111, numberOfPersons1));
	// (b) - service level is fair
	const service222 = "fair";
	const amount222 = 160;
	const numberOfPersons2 = 10;
	console.log("\nCalling splitAmount(" + amount222 + ", " + service222 + ", " + numberOfPersons2 + ")");
	console.log(splitAmount(amount222, service222, numberOfPersons2));
	// (c) - service level is bad
	const service333 = "bad";
	const amount333 = 80;
	const numberOfPersons3 = 20;
	console.log("\nCalling splitAmount(" + amount333 + ", " + service333 + ", " + numberOfPersons3 + ")");
	console.log(splitAmount(amount333, service333, numberOfPersons3));
}

// run main
main();