import billpay from '../Assets/billpay.svg';
import cashout from '../Assets/cashout.svg';
import mobilerecharge from '../Assets/mobilerecharge.svg';
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
  {
    id: 3,
    name: 'Mobile Recharge',
    image: mobilerecharge,
  },
];
const paymentServices = [
  {
    id: 1,
    name: 'Bill Pay',
    image: billpay,
  },
];

export { paymentServices, userServices };
