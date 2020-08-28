import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HL99bCoThIoTKSCSKFWXcJHhj0YK250IfkyRBHrESjUdYrdt0KiGXpTY672koxGRALxDQ101EyYCI6BcOJimFju00fZEBxUtV';
  
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label = 'pay now'
      name = 'CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/CUz.svg'
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'Pay Now'
      token = {onToken}
      stripeKey = {publishableKey}
    />
  );
};

export default StripeCheckoutButton;