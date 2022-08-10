import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class NewRoute extends Route {
  @service solidAuth;

  async model() {
    await this.solidAuth.ensureLogin();
    return [];
  }
}
