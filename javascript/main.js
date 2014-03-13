var fretboardHTML = '<h3 class="title"></h3><div class="svg_wrapper"><div class="cells"></div></div>';

var switchList = {  "o" : "<div class='cell dot'>"+dot+"</div>",
                    "(" : "<div class='cell'>"+dotWideLeft+"</div>",
                    ")" : "<div class='cell'>"+dotWideRight+"</div>",
                    "=" : "<div class='cell'>"+dotWideMiddle+"</div>",
                    "^" : "<div class='cell'>"+string_o+"</div>",
                    "x" : "<div class='cell'>"+string_x+"</div>",
                    "|" : "<div class='cell empty'>"+dotEmpty+"</div>",
                    " " : "<div class='cell empty'>"+dotEmpty+"</div>" }

var thisFretboard;

$(document).ready(function(){

  // For each Fretboard instance...
  $.each( $('.fretboard_instance'), function(i,el) {

    // Insert the HTML foundation

          $(this).append(fretboardHTML);

          // If the FB instance has a title, insert it above the FB
          var fbTitle = $(this).find('.asciiFret').data('title');
          if ( fbTitle != undefined ) {
            $(this).find('.title').text(fbTitle);
          }

    // Read the ASCII fretboard that'll be replaced, then split it into an array of characters

          var toReplace = $(el).find('.asciiFret').html();
          toReplace = toReplace.split('');

    // Go through each ASCII character...

          var replacement = "";
          $.each( toReplace, function(i,character) {
            // Go through each item in SwitchList, if matches ASCII key then replace with SVG code
            $.each( switchList, function( key, value ) {
              if (character == key) {
                replacement += value;
              }
            });
          });

    // Update the page with the new HTML/SVG markup

          // Determine what size fretboard to use
          var fretb_size,fretb_class;    
          if ( $(this).find('.asciiFret').hasClass('v15') ) {
            fretb_bg = fretb_vert_15;
            fretb_class = "v15";
          } else if ( $(this).find('.asciiFret').hasClass('v12')  ) {
            fretb_bg = fretb_vert_12;
            fretb_class = "v12";
          } else if ( $(this).find('.asciiFret').hasClass('v9')  ) {
            fretb_bg = fretb_vert_9;
            fretb_class = "v9";
          } else if ( $(this).find('.asciiFret').hasClass('v7')  ) {
            fretb_bg = fretb_vert_7;
            fretb_class = "v7";
          } else if ( $(this).find('.asciiFret').hasClass('v5')  ) {
            fretb_bg = fretb_vert_5;
            fretb_class = "v5";
          } else if ( $(this).find('.asciiFret').hasClass('v4')  ) {
            fretb_bg = fretb_vert_4;
            fretb_class = "v4";
          }

          // Fill the .fretboard with background, content, and a class
          $(el).find('.svg_wrapper')
            .prepend(fretb_bg)
            .addClass(fretb_class);
          $(el).find('.cells').append(replacement);

          // Remove the ASCII fretboard
          $(this).find('.asciiFret').hide();
  });
});