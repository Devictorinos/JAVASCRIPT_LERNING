
         function Product(name, price) {
             this.name = name;
             this.price = price;
             return this;
         }


        Product.prototype.getDiscount = function(disc) {
            return (this.price - disc);
        }



        function Food(name,price) {

                Product.call(this, name,price)
                this.category = "Food";
/*
                this.init = function () {
                    return new Product(name, price);

                }*/

            
        }

        Food.prototype = Product.prototype;
        Food.prototype.constructor = Food;

        Food.prototype.color = function(color) {
            if(typeof color !== "undefined") {
                return "green";
            } else {
                return "red";
            }
        }

       // Food.prototype = Object.create(Product.prototype);
        var apple = new Food("apple", 7);

        console.log(Food.prototype.constructor);
        