import Ember from 'ember';
import ParentComponent from './parent-component';

export default ParentComponent.extend({
  age: Ember.computed.oneWay('user.age'),
  options: Ember.computed('user', function() {
    return Ember.Object.create({
      user: this.get('user')
    });
  })
})
