import { logicalChain } from './logicalChain';

/**
 * Chain a number of expected conditions using logical and, short circuiting
 * at the first expected condition that evaluates to false.
 *
 * @example
 * browser.waitUntil(and(alertIsPresent(), numberOfWindowsToBe(2))));
 *
 * @param {...Function} args Arguments
 *
 * @returns {!function} An expected condition that returns a promise which
 *     evaluates to the result of the logical and.
 */

export function and(...args: (() => Promise<boolean>)[]): () => Promise<boolean> {
  return logicalChain(true, args);
}
