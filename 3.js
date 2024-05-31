let username = prompt("Enter your Name:");;

function checkName(userName) {
	for (i = 0; i < userName.length; i++) {
		let x = false
		if (+userName[i]) {
			x = true;
			return x
		}
	}
}

while (checkName(username)) {
	username = prompt("No numbers Allowed!, Enter your Name :");
	console.log(checkName(username))
	checkName(username);
}



let birth = parseInt(prompt("Enter your birth:"))

while (birth > 2010 || isNaN(birth)) {
	if (isNaN(birth[i])) {
		console.log(birth);
		birth = parseInt(prompt("Only Numbers Allowd!, Enter your birth:"));
	}
}

let age = 2024 - birth;

document.write("<span style='text-decoration: underline; font-weight: bold;'> Name:</span> " + username)
document.write("<br>")
document.write("<span style='text-decoration: underline; font-weight: bold;'> Birth year:</span> " + birth)
document.write("<br>")
document.write("<span style='text-decoration: underline; font-weight: bold;'> Age:</span> " + age)
