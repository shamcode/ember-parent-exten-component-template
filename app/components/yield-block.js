import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  init() {
    this._super( ...arguments );
    const register = this.get( 'register' );
    if (undefined !== register) {
      this.get( 'register' )()
    }
  },
  willDestroy() {
    const unregister = this.get( 'register' );
    if ( undefined !== unregister ) {
      this.get( 'unregister' )()
    }
  }
});
