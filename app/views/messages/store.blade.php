@extends('layouts.default')

@section('content')
<div class="alert alert-success">
    <strong>Attention! The following URL can only be viewed ONCE! After that the message is destroyed FOREVER!</strong>
    Here is your message URL: {{ $url }}
</div>
@stop
