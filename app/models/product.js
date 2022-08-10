import SemanticModel, {
  solid,
  string,
} from 'ember-solid/models/semantic-model';

@solid({
  defaultStorageLocation: 'private/tests/ember-solid-ess-test.ttl',
  private: true,
  type: 'http://purl.org/goodrelations/v1#ProductOrService',
  ns: 'http://purl.org/goodrelations/v1#',
})
export default class Product extends SemanticModel {
  @string()
  name;

  @string()
  description;

  @string({ predicate: 'http://schema.org/image' })
  image;
}
