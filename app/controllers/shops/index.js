import Ember from 'ember';

export default Ember.Controller.extend({
  shop: {},
  actions: {
    openEditor() {
      const form = document.querySelector('.form');
      form.classList.add('visible');
    },
    saveShop() {
      const name = this.get('name');
      if (!name.trim()) { return; }
      let newShop;
      newShop = this.store.createRecord('shop', {
        name: name,

      });

      const form = document.querySelector('.form');
      form.classList.remove('visible');
      newShop.save().then(() => {
        this.set('name', '');
        this.transitionToRoute('shops')
      });

    },
    deleteShop(shop) {

      shop.destroyRecord();

    },
    editShop(id) {
      const editForm = document.querySelector('.edit-form');
      editForm.classList.add('edit-visible');
      this.store.findRecord('shop', id).then(shop => {
        this.set('shop', shop);
        this.set('name', this.get('shop.name'));
      });
    },
    saveShopEdit() {
      this.set('shop.name', this.get('name'));
      this.get('shop').save().then(() => {
        const form = document.querySelector('.edit-form');
        form.classList.remove('edit-visible');
      });
      this.set('name', '');
    }
  }
});
