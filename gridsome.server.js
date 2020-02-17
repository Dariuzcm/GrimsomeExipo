// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async (actions,store) => {
    /*
    const { data } = await axios.get('http://localhost:1337/apis')
    const collection = actions.addCollection('ArticlePost')
    
    
    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        author: item.author,
        path: '/strapi/'+item.id,
        content: item.body,
        image: item.image,
        date: item.created_at
      })
    }
*/
     const { data } = await axios.get('http://35.165.90.52:1337/exposicions')
    const collection2= actions.addCollection('Expositions')
    
    for (const item of data) {
      collection2.addNode({
        id: item.id,
        path: '/expo/'+item.id,
        nombre: item.nombre,
        descripcion: item.descripcion,
        fecha: item.fecha,
        created_at: item.created_at,
        updated_at: item.updated_at
      })
    }
  })
}