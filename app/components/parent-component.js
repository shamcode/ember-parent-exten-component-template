import Ember from 'ember';

export default Ember.Component.extend({
  firstName: Ember.computed.oneWay('user.firstName'),
  lastName: Ember.computed.oneWay('user.lastName'),
  firstNamePartial: 'components/parent-component/partials/first-name',
  lastNamePartial: 'components/parent-component/partials/last-name',
  agePartial: 'noop'
});
