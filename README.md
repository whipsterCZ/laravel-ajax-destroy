# laravel-ajax-destroy
Allows requesting REST `destroy()` action without sending FORM (by clicking on link) 

- This is extension of **https://www.github.com/WhipsterCZ/laravel-ajax** library.
-  Action `destroy()` will be called with **AJAX**
-  User have to confirm deletion. Custom message can be provided.

Installation
------------
1) Install **https://github.com/whipsterCZ/laravel-ajax** 

2) Copy source code to your public directory

3) Add script to your template
~~~~~ html
<script src="/js/laravel.ajax.js"></script>
<script src="/js/laravel.ajax.destroy.js"></script>
~~~~~

## Usage
HTML
~~~~~ html
<a  href="{{ route('model.destroy', $model) }}" 
    class="destroy" 
    data-confirm="Are you sure?"
>Delete</a>
~~~~~ 
Laravel action
~~~~~ php
public function destroy($id)    {
    Model::find($id)->delete();
    return \Ajax::redirectBack();
}
~~~~~
