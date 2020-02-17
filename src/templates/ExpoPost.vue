<template>
  <BlogLayout>
      <h1>{{$page.expo.nombre}}</h1>
    <h3>{{new Date($page.expo.fecha).toLocaleDateString('es-ES',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</h3>
    <p>{{$page.expo.descripcion}}</p>
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

</style>