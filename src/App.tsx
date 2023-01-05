import { Component, Vue } from 'vue-property-decorator';

import './App.scss';

@Component({})
export default class Home extends Vue {
  render() {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/campaigns">Campaigns</router-link>
          <router-link to="/audiences">Audiences</router-link>
        </div>
        <router-view/>
      </div>
    );
  }
}

