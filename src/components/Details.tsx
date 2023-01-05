import { Component, Prop, Vue } from 'vue-property-decorator';
import format from 'date-fns/format';

import { UserEntity } from 'src/models/UsersEntity';
import { InfoBlock } from './InfoBlock';

import './Details.scss';

@Component({})
export class Details extends Vue {

  @Prop({ required: true })
  readonly user!: UserEntity;

  render() {
    return (
      <div class="details__wrapper">
        <div class="details__headers">
          <h2 class="details__header">{this.user.id}</h2>
          <p class="details__subtle">{format(this.user.created, 'LLLL dd, yyyy, h:m a')} - {this.user.location}</p>
        </div>
        <div class="details__blocks">
          <InfoBlock header={"Devices"} value={this.user.devices} />
          <InfoBlock header={"Sessions"} value={this.user.sessions.length} />
          <InfoBlock header={"Events"} value={this.user.devices} />
        </div>

        <div class="details__section">
          <div class="details__section--headers">
            <p>Attribute</p>
            <p>Value</p>
          </div>
          <div class="details__section--row">
            <p>Email</p>
            <p>{this.user.attributes.email}</p>
          </div>
        </div>
      </div>
    );
  }
}
