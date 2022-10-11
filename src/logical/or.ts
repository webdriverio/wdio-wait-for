import { logicalChain } from './logicalChain.js'

/**
 * Chain a number of expected conditions using logical or, short circuiting
 * at the first expected condition that evaluates to true.
 *
 * @example
 * browser.waitUntil(or(numberOfWindowsToBe(3), numberOfWindowsToBe(2))));
 *
 * @param {...Function} args Arguments
 *
 * @returns {!function} An expected condition that returns a promise which
 *     evaluates to the result of the logical or.
 */

export function or(...args: (() => Promise<boolean>)[]): () => Promise<boolean> {
  return logicalChain(false, args)
}
