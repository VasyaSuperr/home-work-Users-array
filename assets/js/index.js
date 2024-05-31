function User(name, surname, age, isMale, email, isSubscribed) {
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

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
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
  users.slice(indexOfDeleted, 1);
  console.log(`User with useremail${indexOfDeleted}@gmail.com was deleted`);
} else {
  console.log(`User with useremail${indexOfDeleted}@gmail.com doesn't exist`);
}
