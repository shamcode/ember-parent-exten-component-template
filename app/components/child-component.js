import Ember from 'ember';
import ParentComponent from './parent-component';

export default ParentComponent.extend({
  parentComponent: 'components/parent-component',
  age: Ember.computed.oneWay('user.age'),
  agePartial: 'components/child-component/partials/age',
})
