const users = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
    address: '123 Main St, City, State',
    // ... additional properties for user 1
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 30,
    email: 'janesmith@example.com',
    address: '456 Elm St, City, State',
    // ... additional properties for user 2
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: 28,
    email: 'alicejohnson@example.com',
    address: '789 Oak St, City, State',
    // ... additional properties for user 3
  },
  {
    id: 4,
    name: 'Bob Anderson',
    age: 32,
    email: 'bobanderson@example.com',
    address: '987 Pine St, City, State',
    // ... additional properties for user 4
  },
  {
    id: 5,
    name: 'Emily Davis',
    age: 27,
    email: 'emilydavis@example.com',
    address: '654 Cedar St, City, State',
    // ... additional properties for user 5
  },
  {
    id: 6,
    name: 'Michael Wilson',
    age: 35,
    email: 'michaelwilson@example.com',
    address: '321 Birch St, City, State',
    // ... additional properties for user 6
  },
  {
    id: 7,
    name: 'Sarah Brown',
    age: 31,
    email: 'sarahbrown@example.com',
    address: '876 Maple St, City, State',
    // ... additional properties for user 7
  },
  {
    id: 8,
    name: 'David Taylor',
    age: 29,
    email: 'davidtaylor@example.com',
    address: '543 Walnut St, City, State',
    // ... additional properties for user 8
  },
  {
    id: 9,
    name: 'Olivia Lee',
    age: 26,
    email: 'olivialee@example.com',
    address: '210 Pineapple St, City, State',
    // ... additional properties for user 9
  },
  {
    id: 10,
    name: 'Daniel Wilson',
    age: 33,
    email: 'danielwilson@example.com',
    address: '789 Mango St, City, State',
    // ... additional properties for user 10
  }
];

const elderUsers = (age) => {
  const elders = users.filter(user => user.age > age)
  users.splice(3, 3)
}

const newUsers = users.reduce((acc, user) => {
  console.log(acc)
  return [...acc, user.name.split(' ')[0]]
}, [])
console.log(newUsers)
console.log(users)