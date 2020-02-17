<template>
  <BlogLayout>
      <h1>{{$page.articles.title}}</h1>
      <h2>{{$page.articles.subtitle}}</h2>
      
      <h3>{{new Date($page.articles.date).toLocaleDateString('es-ES',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}} by {{$page.articles.author}}</h3>
      <p>{{$page.articles.content}}<p>
      <img v-for="image in $page.articles.image" width="50%" :src="'http://localhost:1337'+image.url" :alt="image.name" :key="image.id" >
 
    <h3>Hello World!</h3>
  </BlogLayout>
</template>

<page-query>
query ArticlePost ($path: String!){
  articles: articlePost(path: $path) {
    id
    title
    subtitle
    author
    date
    content
    image {
      url
      id
      name
    }
  }
}
</page-query>

<script>
export default {
   metaInfo(){
        return {
           title: this.$page.articles.title
        }
    }
}
</script>

<style>

</style>