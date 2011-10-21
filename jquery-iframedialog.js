(function( $ ) {
    $.fn.iframeDialogLink = function( options ) {
        if(!options){
            options = {};
        }
        var given_url = options.url;
        var url = given_url ? given_url : document.URL;
        delete options.url;
        // Default dialog options
        var dialog_options = {
            close: function (event, ui) {
                $(this).remove();
            }
        }
        $.extend(dialog_options, options);
        return this.each(function() {
            var $this = $(this);
            var this_url = null;
            if($this.prop("nodeName") == "A" && $this.attr('href') && !given_url) {
                this_url = $this.attr('href');
            } else {
                this_url = url;
            }
            $this.click(function(event) {
                event.preventDefault();
                var dialog = $("<div>");
                $("body").append(dialog);
                dialog.dialog(dialog_options);
                // Create an iframe inside the dialog box
                dialog.empty();
                dialog.append(
                    $('<iframe>')
                        .attr('src', this_url)
                        .attr('scrolling', 'no')
                        .css('width', '100%')
                        .css('height', '100%')
                        .css('border', 'none')
                        .css('padding', 0)
                        .css('margin', 0)
                        .load(function(e){
                            var iframe_title = $(this).contents().find('title').html();
                            if(iframe_title) {
                                dialog.dialog('option', 'title', iframe_title);
                            }
                        })
                );
                dialog.dialog('open'); 
            });
        });
        return this;
    };
})( jQuery );
