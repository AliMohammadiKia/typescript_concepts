const user1: { userName: string; email: string; phone: string } = {
  userName: "amk01",
  email: "ali@gmail.com",
  phone: "09013323156",
};
const user2: { userName: string; email: string; phone: string } = {
  userName: "sara01",
  email: "sara@gmail.com",
  phone: "09156667722",
};

type User = {
  userName: string;
  email: string;
  phone: string;
};

const user3: User = {
  userName: "mohammad",
  email: "mohammad@gmail.com",
  phone: "090133322211",
};

const updateUser = (user: User) => {};
