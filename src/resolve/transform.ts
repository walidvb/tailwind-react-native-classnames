import { TwTheme } from '../tw-config';
import { StyleIR, TransformType } from '../types';
import { transformStyle, parseStyleVal, parseUnconfigged } from '../helpers';

type InsetDir = null | 'x' | 'y';

export function transform(
  type: TransformType,
  value: string,
  isNegative: boolean,
  config?: TwTheme['inset'],
): StyleIR | null {
  let insetDir: InsetDir = null;

  // const configValue = config?.[value];
  // if (configValue) {
  //   const styleVal = parseStyleVal(configValue, { isNegative });
  //   if (styleVal !== null) {
  //     return insetStyle(type, insetDir, styleVal);
  //   }
  // }

  return transformStyle({
    rotate: `${isNegative ? '-' : ''}${value}deg`
  })
}
