var laravel = (function($, laravel){
    laravel.destroy = {};

    laravel.destroy.init = function(){
        $(document).on('click','a.destroy, input.destroy, button.destroy', function(event) {
            event.preventDefault();
            var $trigger = $(this);
            var confirmMessage = $trigger.attr('data-confirm');
            if ( confirmMessage == undefined ) {
                confirmMessage = 'Are you sure?';
            }
            if ( confirmMessage != "" && confirm(confirmMessage) ) {
                var url = undefined;
                url = $trigger.attr('href');
                if (url == undefined) {
                    var url = $trigger.attr('data-url');
                }
                var data = [
                    {name: '_method', value: 'DELETE'}
                ];
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: data
                });
            }
        });
    };

    laravel.destroy.init();
    return laravel;
})(jQuery, laravel || {});