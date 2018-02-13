import Ember from 'ember';

export default Ember.Component.extend({
  firstName: Ember.computed.oneWay('user.firstName'),
  lastName: Ember.computed.oneWay('user.lastName')
});
