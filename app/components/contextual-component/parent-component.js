import Ember from 'ember';
import SpreadMixin from 'ember-spread'

export default Ember.Component.extend(SpreadMixin, {
  firstName: Ember.computed.oneWay('user.firstName'),
  lastName: Ember.computed.oneWay('user.lastName'),
});
