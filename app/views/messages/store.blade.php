@extends('layouts.default')

@section('content')
<div class="alert alert-success">
    <strong>Attention! The following URL can only be viewed ONCE! After that the message is destroyed FOREVER!</strong>
    <p>Here is the URL {{ secure_url('/' . $url . '/' . $key) }}</p>
</div>
@stop