import Ember from 'ember';

export default Ember.Component.extend({
  shopService: Ember.inject.service(),
  tagName: 'li',

  actions: {
    removeShop() {
      this.get('shopService').delete(this.get('shop'));
    },
    edit() {
      this.get('onEdit')(this.get('shop'));
    }

  }

});
