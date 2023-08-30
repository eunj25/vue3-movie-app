import { createApp } from 'vue'
import App from './App'
import router from './routes'
import store from './store'
import loadImage from './components/plugins/loadImage'

createApp(App)  
  .use(router)  // $router
  .use(store)   // $router
  .use(loadImage)   // $loadImage
  .mount('#app')