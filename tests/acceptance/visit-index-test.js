import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  findAll
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import Service from '@ember/service';

class MockStore extends Service {
  findAll() {
    return Promise.resolve([
      {
        id: 1,
        username: 'alice',
        body: 'bla bla bla',
      },
      {
        id: 2,
        username: 'bob',
        body: 'yack yack yack',
      },
      {
        id: 3,
        username: 'charlie',
        body: 'la la la',
      }
    ]);
  }
}

module('Acceptance | visit index', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.unregister('service:store');
    this.owner.register('service:store', MockStore);
  });

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    // Check that 3 comments display
    let comments = findAll('.comment');
    assert.equal(comments.length, 3);
  });
});
