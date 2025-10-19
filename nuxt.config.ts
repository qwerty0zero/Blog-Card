// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
import path from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: ['~/assets/styles/main.css'],
    nitro:{
      prerender:{
          routes: generateRoutes()
      }
    }
})


function generateRoutes(){
    const postsPath  =path.resolve('app/assets/json/BlogCard.json');
    const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
    const perOptions = [6,12,18]
    const routes = []
    perOptions.forEach(per => {
        const totalPages = Math.ceil(posts.length / per);
        for(let p = 0; p < totalPages; p++) {
            routes.push(`/per/${per}/${p}`)
        }
    })

    routes.push('/')
    return routes;
}