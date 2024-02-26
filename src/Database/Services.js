import billpay from '../Assets/billpay.svg';
import cashout from '../Assets/cashout.svg';
import sendmoney from '../Assets/sendmoney.svg';
const userServices = [
  {
    id: 1,
    name: 'Send Money',
    image: sendmoney,
  },
  {
    id: 2,
    name: 'Cash Out',
    image: cashout,
  },
];
const paymentServices = [
  {
    id: 1,
    name: 'Bill Pay',
    image: billpay,
  },
];
const agentServices = [
  {
    id: 1,
    name: 'Cash In',
    image: cashout,
  },
];

export { agentServices, paymentServices, userServices };
