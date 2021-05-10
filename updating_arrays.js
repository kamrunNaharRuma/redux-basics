// const users = [
//   { name: "Ruma" },
//   { name: "Omran" },
//   { name: "Samiha" },
//   { name: "Robin" },
// ];

// const _users = [...users.slice(0)];
// users.map((n, index) => (n.name === "Ruma" ? (indexOfRuma = index) : n));
// _users[indexOfRuma] = { name: "KNR" };


// console.log(users);
// console.log(_users);

const users = [
    { name: "Ruma" },
    { name: "Omran" },
    { name: "Samiha" },
    { name: "Robin" },
  ];
  
  const _users = users.map((n) => (n.name === "Ruma" ? { ...n, name: 'KNR' } : n));
  
  console.log(_users);
