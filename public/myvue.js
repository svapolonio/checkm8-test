(function() {
    var myVue = new Vue({
      el: '#myVue',
      data: {
        name: null,
        description: null,
        qty: null,
        products: []
      },
      created: function() {
        var self = this;
        axios.get('http://localhost:8080/api/getProducts')
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
          this.qty = null;
        }
      }
    });
    console.log(myVue);
  })();