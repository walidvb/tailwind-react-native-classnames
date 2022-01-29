import { describe, test, expect } from '@jest/globals';
import { create } from '..';
import { TwTheme } from '../tw-config';

type TransformKey = 'rotateX'

describe(`transform`, () => {
  let tw = create();
  beforeEach(() => (tw = create()));

  const cases: Array<[string, Record<'transform', { [key in TransformKey]: string | number}[]>]> = [
    [`rotate-45`, { transform: [{ rotateX: '45deg' }] },],
  ];

  test.each(cases)(`tw\`%s\` -> %s`, (utility, expected) => {
    expect(tw.style(utility)).toEqual(expected);
  });
});