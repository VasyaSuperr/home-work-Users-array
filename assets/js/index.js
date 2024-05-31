function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.updateEmail = function (newEmail) {
  this.email = newEmail;
};

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    i,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}

console.log(users);

console.log("Method getFullName: ");
console.log("Full name for 1st user:", users[1].getFullName());

console.log("Task 1");
const notSubscribedUsers = users.filter((user) => !user.isSubscribed);
console.log("Not subscribed users: ", notSubscribedUsers);

console.log("Task 2");
const listFullNameUsers = users.map((user) => user.getFullName());
console.log("List full name users: ", listFullNameUsers);

console.log("Task 3");
const femaleSchoolAgeFullName = users
  .filter((user) => !user.isMale && user.age >= 6 && user.age <= 18)
  .map((user) => user.getFullName());
console.log("Female school age full name: ", femaleSchoolAgeFullName);

console.log("Task 4");
const indexOfDeleted = users.findIndex(
  (user) => user.email === "useremail5@gmail.com"
);

if (indexOfDeleted !== -1) {
  users.splice(indexOfDeleted, 1);
  console.log(`User with useremail${indexOfDeleted}@gmail.com was deleted`);
} else {
  console.log(`User with useremail${indexOfDeleted}@gmail.com doesn't exist`);
}
console.log(users);

console.log("Task 5");
const indexOfChange = users.findIndex((user) => user.id === 2);

if (indexOfChange !== -1) {
  users[indexOfChange].updateEmail("user@gmail.com");
  console.log(`User with index ${indexOfChange} was changed`);
} else {
  console.log(`User with index ${indexOfChange} doesn't exist`);
}
console.log(users);

console.log("Task 6");
const subscribedUsers = users.filter((user) => user.isSubscribed);
const percentageSubscribed = (subscribedUsers.length / users.length) * 100;

console.log(`Percentage subscribed = ${Math.round(percentageSubscribed)}%`);

console.log("Task 7");
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;

console.log("Average age users = ", Math.round(averageAge));

console.log("Task 8");
users.sort(function (a, b) {
  return a.age - b.age;
});
console.log("Sortered users: ", users);
