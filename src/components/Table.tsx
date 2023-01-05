import { VNode } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CampaignEntity } from '../models/CampaignEntity';

export interface ColumnDescriptor<T> {
  title: string;
  render: (data: T) => VNode | null;
}

@Component({})
export class Table extends Vue {

  @Prop({ required: true })
  readonly columns!: Array<ColumnDescriptor<CampaignEntity>>;

  @Prop({ required: true })
  readonly items!: Array<any>; // eslint-disable-line

  render() {
    return (
      <table cellspacing="0">
          <thead>
              <tr>
                  {this.columns.map((c) =>
                    (<th>{c.title}</th>)
                  )}
              </tr>
          </thead>
          <tbody>
              {this.items.map((item) => this.renderRow(item))}
          </tbody>
      </table>
    );
  }

  // eslint-disable-next-line
  private renderRow(item: any) {
    return (
      <tr>
          {this.columns.map((c) => (
            <td>
              {c.render(item)}
            </td>
          ))}
      </tr>
    );
  }
}
