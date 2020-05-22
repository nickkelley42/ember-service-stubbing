import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  findAll
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | visit index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    // Check that 3 comments display
    let comments = findAll('.comment');
    assert.equal(comments.length, 3);
  });
});
