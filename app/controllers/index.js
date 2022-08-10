import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class IndexController extends Controller {
  @service store;

  @action
  async removeProduct(product, event) {
    event.preventDefault();

    event.target.disabled = true;
    event.target.innerHTML = 'Removing...';

    // Remove the product.
    product.destroy();
    await this.store.persist();

    // Remove record from model (UI) as well.
    this.model.removeObject(product);
  }
}
