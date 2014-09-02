
   var Friend = {
      warmth: 0,
      useSweater: function(level) {
         this.warmth = level;
      }
   };

   var Me = {
      warmth: 0,
      isWarm: function() {
         return this.warmth === 100;
      }
   };

   console.log(Me.isWarm());

   try {
       Me.useSweater(100);//error
   } catch(e) {
       console.log(e.message);
   }

    Friend.useSweater.apply(Me,[100]);

    console.log(Me.isWarm());
