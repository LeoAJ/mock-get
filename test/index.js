import test from 'ava';
import get from '../lib';

test('Can resolve response', t => (
  get(0)
  .then(res => t.true(res.length === 5))
));

test('Can resolve response', t => (
  get(0, true)
  .then(() => {})
  .catch(err => t.true(err instanceof Error))
));

test('Can resolve custom response', t => (
  get(0, { testData: 123 })
  .then(res => t.true(res.testData === 123))
));
