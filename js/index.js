 $(document).ready(function() {
 $( function() {
    $("#toggle").hide();
    var state = false;
    $( ".but" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          width: 300,
          height:120
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#aaa",
          height:200,
          width: 500
        }, 1000 );
      }
      state = !state;
    });
  } );
  $( function() {
    $("#toggle2").hide();
    var state = false;
    $( ".but2" ).on( "click", function() {
      if ( state ) {
        $( "#effect2" ).animate({
          backgroundColor: "#fff",
          width: 170,
          height:100
        }, 1000 );
      } else {
        $( "#effect2" ).animate({
          backgroundColor: "#aaa",
          height:150,
          width: 500
        }, 1000 );
      }
      state = !state;
    });
  } );

 $( ".but" ).click(function() {
    $( "#toggle" ).toggle( "blind" );
  });
 $( ".but2" ).click(function() {
    $( "#toggle2" ).toggle( "blind" );
  });
  // var typed = $(".typed");

  // $(function() {
  //   typed.typed({
  //     strings: ["Alex Smith.", "Designer.", "Developer.", "Freelancer.", "Photographer"],
  //     typeSpeed: 100,
  //     loop: true,
  //   });
  // });
  
});