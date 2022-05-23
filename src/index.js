import $ from "jquery";
import "./css/1.css";
import "./less/1.less";
import "./scss/1.scss";

$(function() {
    $("li:odd").css("backgroundColor", "pink");

    $("li:even").css("backgroundColor", "green");
});

class Person {
    static info = "aaa";
}

console.log(Person.info);

import { createApp } from "vue";

import App from "./componets/App.vue";

createApp(App).mount('#app')