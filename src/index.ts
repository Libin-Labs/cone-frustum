function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function length(v: number): void {
  finite(v, 1e-9, 1e9);
}
export function frustumMeasures(
  lowerRadius: number,
  upperRadius: number,
  height: number,
): { volume: number; slant: number; lateralArea: number; totalArea: number } {
  finite(lowerRadius, 0, 1e9);
  finite(upperRadius, 0, 1e9);
  length(height);
  if (lowerRadius === 0 && upperRadius === 0) throw new RangeError('Positive radius required');
  const slant = Math.hypot(height, lowerRadius - upperRadius),
    lateralArea = Math.PI * (lowerRadius + upperRadius) * slant;
  return {
    volume:
      (Math.PI *
        height *
        (lowerRadius * lowerRadius + lowerRadius * upperRadius + upperRadius * upperRadius)) /
      3,
    slant,
    lateralArea,
    totalArea: lateralArea + Math.PI * (lowerRadius * lowerRadius + upperRadius * upperRadius),
  };
}
