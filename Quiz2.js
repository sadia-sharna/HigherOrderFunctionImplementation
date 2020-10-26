
let notifications = [
    { message: 'Lorem', read: true},
    { message: 'Ipsum', read: true },
    { message: 'Dolor', read: true },
    { message: 'Sit', read: false },
    { message: 'Amet', read: true }
	
];

let allRead = true;

let findAnyFalseRead = notifications.find(x => x.read == false);
if (findAnyFalseRead) allRead = false;
console.log(allRead);