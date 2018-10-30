(function() {
    var myVue = new Vue({
      el: '#myVue',
      data: {
        name: null,
        description: null,
        quantity: null,
        products: []
      },
      created: function() {
        var self = this;
        axios.get('http://localhost:8080/')
          .then(function(res) {
            self.products = res.data;
          })
          .catch(function(err) {
            self.products = [];
          });
      },
      methods: {
        clear: function() {
          this.name = null;
          this.description = null;
          this.quantity = null;
        },
        addProduct: function() {
            var self = this;
            var payload = {
            name: self.name,
            description: self.description,
            quantity: self.quantity
            };
            axios.post('/', payload)
            .then(function(res) {
                self.products = res.data;
                self.clear();
            })
            .catch(function(err) {
            });
        },
        deleteProduct: function(product) {
            var self = this;
            axios.delete('http://localhost:8080/deleteProduct/' + product.id)
              .then(function(res) {
                var index = -1;
                for(var i = 0; i < self.products.length; ++i) {
                  if(Number(self.products[i].id) === Number(product.id)) {
                    index = i;
                    break;
                  }
                }
                self.notes.splice(index, 1);
              })
              .catch(function(err) {
              });
        },
      }
    });
    console.log(myVue);
  })();