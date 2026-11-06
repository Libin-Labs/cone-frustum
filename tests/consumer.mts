import { frustumMeasures } from '@lp-labs/cone-frustum';
if (Math.abs(frustumMeasures(2, 2, 3).volume - 12 * Math.PI) > 1e-10) throw new Error('Geometry');
// @ts-expect-error invalid argument must be rejected by declarations
frustumMeasures('2', 2, 3);
