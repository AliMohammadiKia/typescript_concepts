// tuple
let userInfo;
userInfo = ["ali", 100, true];
// enum
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS[ORDER_STATUS["PENDING"] = 0] = "PENDING";
    ORDER_STATUS[ORDER_STATUS["COMPLETED"] = 1] = "COMPLETED";
    ORDER_STATUS[ORDER_STATUS["REJECTED"] = 2] = "REJECTED";
})(ORDER_STATUS || (ORDER_STATUS = {}));
let completedOrderStatus = ORDER_STATUS.COMPLETED;
console.log(completedOrderStatus);
