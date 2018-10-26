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
        axios.get('http://localhost:8080/getProducts')
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
            axios.post('/getProducts', payload)
            .then(function(res) {
                self.products = res.data;
                self.clear();
            })
            .catch(function(err) {
            });
        }
      }
    });
    console.log(myVue);
  })();