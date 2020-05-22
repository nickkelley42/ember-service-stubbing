import Model, { attr } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr username;
  @attr body;
}
