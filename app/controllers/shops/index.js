import Ember from 'ember';

export default Ember.Controller.extend({
  shopService: Ember.inject.service(),
  shop: {},
  actions: {
    openEditor() {
      const form = document.querySelector('#shopEditor');
      form.classList.add('visible');
    },
    add(e) {
      const form = document.querySelector('#shopEditor'),
        name = document.querySelector('#shopName');
        if(!Ember.isBlank(name.value)) {
        const service = this.get('shopService');
        const shop = this.get('shop');
        this.set('shop.name', name.value.trim());
        if (!shop.id) {
          service.add(shop);
        } else {
          service.update();
        }
        form.classList.remove('visible');
        name.value = '';
        this.set('shop', {});
      }
      e.preventDefault();
    },
    edit(shop) {
      this.set('shop', shop);
      const form = document.querySelector('#shopEditor');
      form.classList.add('visible');

    }
  }
});
