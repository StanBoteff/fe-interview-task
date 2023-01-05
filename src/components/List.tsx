import { Component, Prop, Vue } from 'vue-property-decorator';
import { VNode } from 'vue';
import { isEmpty } from 'lodash';

import { Details } from './Details';
import { UserEntity } from 'src/models/UsersEntity';

import './List.scss';

@Component({})
export class List extends Vue {

  @Prop({ required: true })
  readonly items!: Array<any>; // eslint-disable-line

  activeElement = "";

  currentUser = {};

  private showDetails(user: UserEntity) {
    this.activeElement = user.id;
    this.currentUser = user;
  }

  private loadDetails(): VNode {
    if (!isEmpty(this.currentUser)) {
      return <Details class="list__right" user={this.currentUser} />;
    }
    return <div></div>;
  }

  render() {
    return (
      <div class="list__wrapper">
        <div class="list__left">
          <div class="list__headers">
            <h2 class="list__header">Users in audience</h2>
            <p class="list__subtle">Total Users - Showing {this.items.length} matching users</p>
          </div>

          <hr />

          <ul class="list__list">
            {this.items.map((i) =>
            (<li class={`${this.activeElement == i.id ? "list__list--item active" : "list__list--item"}`} onclick={() => this.showDetails(i)}>
              <h3 class="list__subheader">{i.id}</h3>
              <p class="list__subtle">{i.devices} Devices - {i.sessions.length} Sessions - {i.location}</p>
            </li>)
            )}
          </ul>
        </div>

        {this.loadDetails()}
      </div>
    );
  }
}
