import Ember from 'ember';
import ParentComponent from './parent-component';

export default ParentComponent.extend({
  parentComponent: 'components/with-partials/parent-component',
  age: Ember.computed.oneWay('user.age'),
  agePartial: 'components/with-partials/child-component/partials/age',
})
