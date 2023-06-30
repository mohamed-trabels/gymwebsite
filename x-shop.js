
    var products = [
           {
          image: "",
          name: "nike tee-shirt 1",
          price: 10
        }, {
          image: "",
          name: "nike tee-shirt 2",
          price: 15
        },
          {
          image: "",
          name: "nike tee-shirt 3",
          price: 20
        }
      ]
      var t= localStorage.getItem('reward')
    console.log(t)
      var balance= t 
      var productindex = 0

      $('#nextButton').on('click', nextProduct)

      showproduct()

      function nextProduct() {
        productindex = (productindex + 1) % products.length
        showproduct()
      }
    
      function showproduct() {
        var product = products[productindex]
        $('#productImage')
        $('#productName').text(product.name)
        $('#productPrice').text('$' +product.price)
        $('#balance').text('$'+balance)
      }

      
       $('#buyButton').on('click', buyProduct)
      
      function buyProduct() {
        var product= products[productindex]
        if (balance< product.price) {
          alert('you dont have enough money to buy this product')
        } else{
          balance -= product.price
          $('#balance').text('$'+ balance)
          alert('! you  bought it'+ product.name )
        }
      }
    
      function nextProduct() {
        productindex = (productindex + 1) % products.length
        showproduct()
      }
    
      
      
    
      
   