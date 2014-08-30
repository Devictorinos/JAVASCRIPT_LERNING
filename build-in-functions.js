
   var friend = {
      warmth: 0,
      useSweater: function(level) {
         this.warmth = level;
      }
   };

   var me = {
      warmth: 0,
      isWarm: function() {
         return this.warmth === 100;
      }
   };

   console.log(me.isWarm());

   try {
       me.useSweater(100);
   } catch(e) {
       console.log(e.message);
   }

    friend.useSweater.apply(me,[100]);

    console.log(me.isWarm());