var Display = function (context, title) {
    
     this.colors = new Array('#7FFFD4', '#0000FF', '#8A2BE2', '#7FFF00', '#FF0000', '#FF00FF', '#7FFF00', '#FF4500');

    if (context.length > 0) {
        this.display = context;
        
        if (title) {

            this.title = title;

        } else {

            this.title = "Hello World";
        }

        this.init();
    };

};

Display.prototype.init = function () {
   var that = this;
    
   // this.display.mouseover(function () {

        setInterval((function (that) {
            
            return function () {
                var color = Math.floor(Math.random() * that.colors.length);
                var textColor = color + 1;
                var nextColor = color + 2;
                var nextTextColor = color + 3;
                $(that.display.context).css({

                    
                });

                $(that.display.context).animate({
                    backgroundColor: '' + that.colors[color] + '',
                    top: "-50px",
                    color: '' + that.colors[textColor] + ''
                    
                });


                $(that.display.context).animate({
                  
                    top: "50px",
                    backgroundColor: 'red',
                     color: '' + that.colors[nextTextColor] + ''
                });


  

                $(that.display.context.children).html(that.title);
               /* $(that.display.context.children).css({
                    color: '' + that.colors[textColor] + ''
                });*/

            };

        })(that), 800);

    //});
};

jQuery.fn.randomColor = function (title) {

    return jQuery(this).each(function () {

        new Display(jQuery(this), title);

    });

};
