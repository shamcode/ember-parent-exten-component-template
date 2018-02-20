import Ember from 'ember';

export function slotHash(params/*, hash*/) {
  return Ember.Object.create({
    [params[0]]: params[1]
  });
}

export default Ember.Helper.helper(slotHash);
