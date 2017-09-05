import Ember from 'ember';
import {createGUID} from "./id-service";


export default Ember.Service.extend({
  data: null,

  findAll() {
    return this.get('data') ||
      this.set('data', JSON.parse(window.localStorage.getItem('shops') || '[]'));
  },
  find(id) {
    return this.findAll().find((shop) => shop.id === id);
  },

  add(data) {
    let shop = Object.assign({id: createGUID()}, data);
    this.get('data').pushObject(shop);
    this.update();
    return shop;
  },

  delete(shop) {
    this.get('data').removeObject(shop);
    this.update();
  },

  update() {
    window.localStorage.setItem('shops', JSON.stringify(this.get('data')));
  }
});
