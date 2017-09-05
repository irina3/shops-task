import Ember from 'ember';
import {createGUID} from "../../services/id-service";


export default Ember.Controller.extend({
  shopService: Ember.inject.service(),
  product: {},
  actions: {
    openEditor() {
      const form = document.querySelector('#productEditor');
      form.classList.add('visible');
    },
    addProduct(e) {
      const form = document.querySelector('#productEditor'),
        name = document.querySelector('#productName'),
        qty = document.querySelector('#productQty'),
        price = document.querySelector('#productPrice');
      if(!Ember.isBlank(name.value) && !Ember.isBlank(qty.value) && !Ember.isBlank(price.value)) {
        const service = this.get('shopService');
        const model = this.get('model');

        if(!model.products) {
          this.set('model.products', []);
        }

        this.set('product.name', name.value);
        this.set('product.qty', qty.value);
        this.set('product.price', price.value);

        const product = this.get('product');
        if(!product.id) {
          this.set('product.id', createGUID());
          model.products.pushObject(product);
        }

        service.update();

        form.classList.remove('visible');
        name.value = '';
        qty.value = '';
        price.value = '';
        this.set('product', {});
      }

      e.preventDefault();
    },
    edit(product) {
      const form = document.querySelector('#productEditor'),
        name = document.querySelector('#productName'),
        qty = document.querySelector('#productQty'),
        price = document.querySelector('#productPrice');

      name.value = product.name;
      qty.value = product.qty;
      price.value = product.price;

      this.set('product', product);

      form.classList.add('visible');
    },
    delete(product) {
      const products = this.get('model.products');
      products.removeObject(product);
      this.get('shopService').update();
    },
  }
});
