/**
 * Laravel AJAX Destroy - calling REST Destroy method without need of Form::submit()
 *
 * @dependency jQuery >2
 * @dependency laravel.ajax.js https://github.com/whipsterCZ/laravel-ajax
 * @author Ing. Daniel Kouba <me@danielkouba.cz>
 */

var factory = function(){
    var $ = window.jQuery;
    if (typeof $ !== 'function') {
        return console.error('laravel.ajax.destroy.js: jQuery is missing, load it please');
    }
    if(typeof window.laravel !== 'object') {
        return console.error('laravel.ajax.destroy.destroy.js: laravel is missing, load it please')
    }

    var laravel = window.laravel;

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
                laravel.ajax.send({
                    url: url,
                    type: 'POST',
                    data: data
                });
            }
        });
    };

    laravel.destroy.init();

    return laravel;

};


//UMD - unified module definition
(function(name,context,factory) {
    if (typeof module != 'undefined' && module.exports)
        module.exports = factory();
    else if (typeof define == 'function' && define.amd)
        define(name, factory);
    else
        context[name] = factory();
}('laravel',this, factory));
