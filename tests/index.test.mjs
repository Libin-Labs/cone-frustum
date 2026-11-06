import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.frustumMeasures(2, 2, 3).volume - 12 * Math.PI) < 1e-10);
});
test('cone limit', () => {
  assert.ok(Math.abs(api.frustumMeasures(2, 0, 3).volume - 4 * Math.PI) < 1e-12);
});
test('radius symmetry', () => {
  assert.deepEqual(api.frustumMeasures(2, 3, 4), api.frustumMeasures(3, 2, 4));
});
test('slant triangle', () => {
  assert.equal(api.frustumMeasures(4, 1, 4).slant, 5);
});
test('invalid degenerate', () => {
  assert.throws(() => api.frustumMeasures(0, 0, 1));
  assert.throws(() => api.frustumMeasures(1, 2, 0));
});
test('type contract', () => {
  assert.throws(() => api.frustumMeasures('2', 2, 3));
});
