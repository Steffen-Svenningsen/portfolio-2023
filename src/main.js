import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from "vue-kinesis"
import { MotionPlugin } from '@vueuse/motion'

import "@/assets/main.sass"
import "reset-css"

const app = createApp(App)

app.use(MotionPlugin)
app.use(VueKinesis)
app.use(router)

app.mount('#app')
