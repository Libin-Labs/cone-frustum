# @lp-labs/cone-frustum

Right circular cone-frustum volume and surface areas.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/cone-frustum
```

## Working example

```js
import { frustumMeasures } from '@lp-labs/cone-frustum';
if (Math.abs(frustumMeasures(2, 2, 3).volume - 12 * Math.PI) > 1e-10) throw new Error('Geometry');
```

CommonJS: `const api = require('@lp-labs/cone-frustum')`.

## Behavior, customization and limits

frustumMeasures(lowerRadius,upperRadius,height) requires lower/upper[0,1e9] with at least one positive,height[1e-9,1e9]. Returns volume,slant,lateralArea,totalArea including both circular ends. Cylinder/cone limit allowed. No oblique frustum,wall thickness or density. Matching caller units; pure ideal geometry,not CAD topology,structural engineering,manufacturing tolerances or safety guidance. Constant time,unless specified; fresh objects and no mutation.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function frustumMeasures(
  lowerRadius: number,
  upperRadius: number,
  height: number,
): {
  volume: number;
  slant: number;
  lateralArea: number;
  totalArea: number;
};
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
