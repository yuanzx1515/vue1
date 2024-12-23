import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router"; // 引入路由
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

// 注册 ElementPlus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router); // 使用路由
app.use(ElementPlus);
app.mount("#app"); // 挂载应用到页面