import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      firstName: 'John',
      lastName: 'Smite',
      age: 27
    });
  }
});
