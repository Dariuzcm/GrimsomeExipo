<template>
  <Layout>
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
    <h2  class="font-bold text-yellow-700 text-2xl">Publicaciones</h2>
    <div v-for="expo in $page.expo.edges" :key="expo.node.id">
      <g-link :to="expo.node.path"  class="text-lg font-bold text-yellow-500">{{expo.node.nombre}}</g-link>
    </div>

    </layout>
    </template>
    
    <page-query>
      query {
        expo: allExpositions{
          edges{
            node{
              nombre
              path
            }
          }
        }
      }
    </page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
