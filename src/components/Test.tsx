import { CreateElement, VNode } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

import './Test.scss';

@Component({ name: 'Test' })
export default class Test extends Vue  {

    private features: string[] = [ 'TSX', 'SCSS' ];

    public render(h: CreateElement): VNode {
        return <h2>Preconfigured to work with: {this.features.join(', ')}</h2>;
    }

}
