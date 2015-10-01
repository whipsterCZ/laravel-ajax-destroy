# laravel-ajax-destroy
Enable calling REST destroy action without creating FORM

This is extension for **laravel-ajax** service.
Action `destroy()` will be called with **AJAX**
Use have to confirm deletion. Custom message can be provided.

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
	  \Ajax::redirectBack();
  }
~~~~~
