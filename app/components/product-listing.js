import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    edit() {
      this.get('onEdit')(this.get('product'));
    },
    delete() {
      this.get('onDelete')(this.get('product'));
    }

  }
});
