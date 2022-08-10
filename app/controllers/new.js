import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class NewController extends Controller {
  @service router;
  @service store;
  @service solidAuth;

  @action
  async save(event) {
    event.preventDefault();

    const pictureUrl =
      'https://p402.p0.n0.cdn.getcloudapp.com/items/v1uOX7Xr/df697938-caf3-46eb-9c5d-df49790e64f5.jpeg?v=20893532a1625ae32c4a5d22ac1fa009';

    this.store.create('product', {
      name: this.name,
      description: this.description,
      image: pictureUrl,
    });
    await this.store.persist();

    // Go back to the overview of all products and clear form input.
    this.name = '';
    this.description = '';
    this.router.transitionTo('index');
  }
}
