import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteProduct(product) {
      product.destroyRecord();
    },
    editProduct(id) {
      const editForm = document.querySelector('.edit-form-product');
      editForm.classList.add('edit-visible-product');
      this.get('edit')(id);
    }
  }
});
