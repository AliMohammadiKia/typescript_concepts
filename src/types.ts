// tuple
let userInfo: [string, number, boolean];
userInfo = ["ali", 100, true];

// enum
enum ORDER_STATUS {
  PENDING,
  COMPLETED,
  REJECTED,
}
let completedOrderStatus: ORDER_STATUS = ORDER_STATUS.COMPLETED;
console.log(completedOrderStatus);
