import Vue, { VNode } from "vue";
import { Component } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

import "./App.scss";
import LOGO from "./assets/logo.png";

@Component({ name: "App" })
export default class App extends Vue {

  public render(): VNode {
    return (
      <div id="app">
        <img alt="Vue logo" src={LOGO} />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    );
  }

}
