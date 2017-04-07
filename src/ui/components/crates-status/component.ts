import Component from "@glimmer/component";

import Store from '../../../store';

export default class CratesStatus extends Component {
  store: Store

  constructor(options) {
    super(options);

    this.store = new Store();
  }
}
