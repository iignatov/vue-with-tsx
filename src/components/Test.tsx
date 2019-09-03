import Vue, { VNode } from "vue";
import { Component } from "vue-property-decorator";

import "./Test.scss";

@Component({ name: "Test" })
export default class Test extends Vue {

  private features: string[] = [ "TSX", "SCSS" ];

  public render(): VNode {
    return <h2>Preconfigured to work with: {this.features.join(", ")}</h2>;
  }

}
