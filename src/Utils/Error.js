const loginError = (values) => {
  const errors = {};
  // email or phone number validatnion
  if (!values.emailOrPhone) {
    errors.emailOrPhone = {
      type: 'required',
      message: 'Email or Phone number is required',
    };
  } else if (values.emailOrPhone.includes('+')) {
    errors.emailOrPhone = {
      type: 'invalid',
      message: 'Please remove country code from phone number',
    };
  } else if (
    !/\S+@\S+\.\S+/.test(values.emailOrPhone) &&
    !/^\d{10}$/.test(values.emailOrPhone)
  ) {
    errors.emailOrPhone = {
      type: 'invalid',
      message: 'Email or Phone number is invalid',
    };
  }
  // pin validation
  if (!values.pin) {
    errors.pin = {
      type: 'required',
      message: 'Pin is required',
    };
  } else if (!/^\d{4}$/.test(values.pin)) {
    errors.pin = {
      type: 'invalid',
      message: 'Pin must be 4 digit',
    };
  }
  return { errors, values };
};

const registerError = (values) => {
  const errors = {};
  // name validation
  if (!values.name) {
    errors.name = {
      type: 'required',
      message: 'Name is required',
    };
  } else if (values.name.length < 3) {
    errors.name = {
      type: 'invalid',
      message: 'Name must be at least 3 characters',
    };
  } else if (values.name.length > 25) {
    errors.name = {
      type: 'invalid',
      message: 'Name must be at most 25 characters',
    };
  }
  // email validation
  if (!values.email) {
    errors.email = {
      type: 'required',
      message: 'Email is required',
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: 'invalid',
      message: 'Email is invalid',
    };
  }
  // phone validation
  if (!values.phone) {
    errors.phone = {
      type: 'required',
      message: 'Phone is required',
    };
  } else if (values.phone.includes('+')) {
    errors.phone = {
      type: 'invalid',
      message: 'Please remove country code from phone number',
    };
  } else if (!/^\d{11}$/.test(values.phone)) {
    errors.phone = {
      type: 'invalid',
      message: 'Phone is invalid',
    };
  }
  // account type validation
  if (!values.accountType) {
    errors.accountType = {
      type: 'required',
      message: 'Account type is required',
    };
  }
  // pin validation
  if (!values.pin) {
    errors.pin = {
      type: 'required',
      message: 'Pin is required',
    };
  } else if (!/^\d{4}$/.test(values.pin)) {
    errors.pin = {
      type: 'invalid',
      message: 'Pin must be 4 digit',
    };
  }
  // confirm pin validation
  if (!values.confirmPin) {
    errors.confirmPin = {
      type: 'required',
      message: 'Confirm pin is required',
    };
  } else if (values.confirmPin !== values.pin) {
    errors.confirmPin = {
      type: 'invalid',
      message: 'Pin and confirm pin must be same',
    };
  }
  // terms and condition validation
  if (!values.terms) {
    errors.terms = {
      type: 'required',
      message: 'Terms and condition is required',
    };
  }

  return { errors, values };
};

const servicesError = (values) => {
  const errors = {};
  // sender phone validation
  if (!values.senderPhone) {
    errors.senderPhone = {
      type: 'required',
      message: 'Sender phone is required',
    };
  } else if (values.senderPhone.includes('+')) {
    errors.senderPhone = {
      type: 'invalid',
      message: 'Please remove country code from phone number',
    };
  } else if (!/^\d{11}$/.test(values.senderPhone)) {
    errors.senderPhone = {
      type: 'invalid',
      message: 'Sender phone is invalid',
    };
  }
  // amount validation
  if (!values.amount) {
    errors.amount = {
      type: 'required',
      message: 'Amount is required',
    };
  } else if (values.amount < 20) {
    errors.amount = {
      type: 'invalid',
      message: 'Amount must be at least 20 taka',
    };
  }
  // receiver phone validation
  if (!values.receiverPhone) {
    errors.receiverPhone = {
      type: 'required',
      message: 'Receiver phone is required',
    };
  } else if (values.receiverPhone.includes('+')) {
    errors.receiverPhone = {
      type: 'invalid',
      message: 'Please remove country code from phone number',
    };
  } else if (!/^\d{11}$/.test(values.receiverPhone)) {
    errors.receiverPhone = {
      type: 'invalid',
      message: 'Receiver phone is invalid',
    };
  }
  // pin validation
  if (!values.pin) {
    errors.pin = {
      type: 'required',
      message: 'Pin is required',
    };
  } else if (!/^\d{4}$/.test(values.pin)) {
    errors.pin = {
      type: 'invalid',
      message: 'Pin must be 4 digit',
    };
  }
  return { errors, values };
};

export { loginError, registerError, servicesError };
