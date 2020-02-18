<template>
  <BlogLayout>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Free open source Tailwind CSS Store template">
    <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic">

    <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
    <!--Replace with your tailwind.css once created-->
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet">
    </head>
    <body class="bg-white text-gray-700 work-sans leading-normal text-base tracking-normal font-bold">
      <h1 class="font-bold text-yellow-600 text-4xl">{{$page.expo.nombre}}</h1>
    <h2  class="font-bold text-yellow-500 text-2xl">{{new Date($page.expo.fecha).toLocaleDateString('es-ES',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</h2>
    <p class="text-lg">{{$page.expo.descripcion}}</p>
    </body>
  </BlogLayout>
</template>

<page-query>
query Expo ($path: String!){
  expo: expositions(path: $path){
  	nombre
    path
    descripcion
    fecha
  }
}
</page-query>

<script>
export default {
    metaInfo(){
        return this.$page.expo.nombre
    }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
</style>