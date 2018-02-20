import Ember from 'ember';

const IfBlockUsed = Ember.Component.extend({
  isActivated: false,

  actions: {
    register() {
      this.set( 'isActivated', true )
    },
    unregister() {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }
      this.set( 'isActivated', false )
    }
  }
});

IfBlockUsed.reopenClass({
  positionalParams: [ 'slotName' ]
});

export default IfBlockUsed;
