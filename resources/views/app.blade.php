<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A basic dice rolling tool, suitable for whatever tabletop game your group is playing - D&D, Pathfinder, Call of Cthulhu, etc.">
        <meta name="robots" content="index">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=lato:400" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/sass/app.scss', 'resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead


    </head>
    <body class="font-sans antialiased" style="background-color:#282b30;">
        @inertia
    </body>
</html>
