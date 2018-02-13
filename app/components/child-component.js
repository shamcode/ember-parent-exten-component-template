import Ember from 'ember';
import ParentComponent from './parent-component';

export default ParentComponent.extend({
  parentComponent: 'parent-component',
  age: Ember.computed.oneWay('user.age')
})
