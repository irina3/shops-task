import Ember from 'ember';


export default Ember.Controller.extend({
  product: {},
  totalPrice: Ember.computed('model.products.@each.price', 'model.products.@each.qty', function() {
    return this.get('model.products').reduce((total, product) => total + product.get('price') * product.get('qty'), 0);
  }),
  actions: {
    openEditor() {
      const form = document.querySelector('.product-form');
      form.classList.add('product-visible');
    },
    saveProduct() {
      const shop = this.get('model');
      const product = this.get('store').createRecord('product', {
        name: this.get('name'),
        price: this.get('price'),
        qty: this.get('qty'),
      });
      shop.get('products').pushObject(product);
      product.save().then(() => {
        shop.save().then(() => {
          this.set('name', '');
          this.set('qty', '');
          this.set('price', '');
        });
      });
      const form = document.querySelector('.product-form');
      form.classList.remove('product-visible');
    },
    editProduct(id) {
      this.store.findRecord('product', id).then(product => {
        this.set('product', product);
        this.set('name', this.get('product.name'));
        this.set('qty', this.get('product.qty'));
        this.set('price', this.get('product.price'));
      })
    },
    saveEdit() {
      this.store.findRecord('product', this.get('product.id')).then(product => {
        product.setProperties({
          name: this.get('name'),
          qty: this.get('qty'),
          price: this.get('price'),
        });
        this.set('name', '');
        this.set('qty', '');
        this.set('price', '');
      });
      const editForm = document.querySelector('.edit-form-product');
      editForm.classList.remove('edit-visible-product');
    }
  }
});
