import { VNode } from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import { CampaignEntity, CampaignStatus, SAMPLE_DATA } from '../models/CampaignEntity';
import { Table, ColumnDescriptor } from '../components/Table';

@Component({})
export default class Campaigns extends Vue {
  render() {
    const columns: Array<ColumnDescriptor<CampaignEntity>> = [
        {
          title: 'Campaign Name',
          render: (campaign: CampaignEntity) => (
             <div class="name">
                 {campaign.name}
                 <div class="author">Created by {campaign.author.name}</div>
             </div>
          )
        }, {
          title: 'Status',
          render: (campaign: CampaignEntity) => (
              this.statusText(campaign.status)
          )
        }
      ];

      return (
        <div>
            <div class="header">
                <h2>Campaigns</h2>
                <button class="btn primary">Create Campaign</button>
            </div>
            <div class="content">
                <Table columns={columns} items={SAMPLE_DATA} />
            </div>
        </div>
      );
  }

  private statusText(status: CampaignStatus): VNode {
    switch (status) {
      case CampaignStatus.RUNNING:
        return <span>Running</span>;
      default:
      case CampaignStatus.DRAFT:
        return <span>Draft</span>;
    }
  }
}
