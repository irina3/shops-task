export default function() {

  this.namespace = '/api';
  this.get('/shops');
  this.post('/shops');
  this.get('/shops/:id');
  this.del('/shops/:id');
  this.post('/shops/:id');
  this.patch('/shops/:id');
  this.get('/products');
  this.post('/products');
  this.get('/products/:id');
  this.del('/products/:id');
  this.post('/products/:id');
  this.patch('/products/:id');

}
