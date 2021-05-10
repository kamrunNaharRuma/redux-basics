const person = {
  name: "Ruma",
  address: {
    country: "Bangladesh",
    city: "Dhaka",
  },
};

const updated = Object.assign({}, person, {
  name: "kamrun nahar ruma",
  age: 27,
});

//updated with spread operator
const updated_new = {
  ...person,
  address: {
    ...person.address,
    city: "munshiganj",
  },
  name: "new Ruma",
};

//will change the first reference
person.address.city = "Barisal";

console.log(updated);
console.log(updated_new);
