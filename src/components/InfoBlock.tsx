import { Component, Prop, Vue } from 'vue-property-decorator';

import './InfoBlock.scss';

@Component({})
export class InfoBlock extends Vue {

  @Prop({ required: true })
  readonly header!: string;

  @Prop({ required: true })
  readonly value!: number;

  render() {
    return (
      <div class="info-block__wrapper">
        <p class="info-block__header">{this.header}</p>
        <p class="info-block__value">{this.value}</p>
      </div>
    );
  }
}
