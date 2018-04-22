<!DOCTYPE html>
<html lang="@yield('lang', config('app.locale', 'en'))">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <title>@yield('title', config('app.name', 'Uccello'))</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicon-->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <base href="/">

    <!-- Bootstrap Core Css -->
    @section('css')
        {{ Html::style('css/app.css') }}
    @show

    @yield('extra-css')
</head>

<body class="@section('body-class')theme-{{ config('uccello.skin', 'blue') }}@show @yield('body-extra-class')">
    @yield('pre-content')

    <section class="content">
        @yield('content')
    </section>

    @section('script')
    {{Html::script('js/manifest.js')}}
    {{Html::script('js/vendor.js')}}
    {{Html::script('js/app.js')}}
    @show    

    @yield('extra-script')
</body>

</html>