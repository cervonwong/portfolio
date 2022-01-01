/*
 * Copyright (C) 2021–2022 Cervon Wong.
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/global.scss";

createApp(App).use(router).mount("#app");
