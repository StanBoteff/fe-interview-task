import { Component, Vue } from 'vue-property-decorator';
import { generateSampleData } from '../models/UsersEntity';
import { List } from '../components/List';

import './Audiences.scss';

@Component({})
export default class Audiences extends Vue {
  render() {
    return (
      <div class="wrapper">
        <List items={generateSampleData()} />
      </div>
    );
  }
}
