import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Orders from '../Orders';

Meteor.publish('orders', function orders() {
  return Orders.find({ owner: this.userId });
});

// Note: orders.view is also used when editing an existing order.
Meteor.publish('orders.view', (orderId) => {
  check(orderId, String);
  return Orders.find({ _id: orderId });
});

Meteor.publish('orders.edit', function ordersEdit(orderId) {
  check(orderId, String);
  return Orders.find({ _id: orderId, owner: this.userId });
});
