/**
 * Negates the result of a promise
 *
 * @example
 * browser.waitUntil(not(alertIsPresent()));
 *
 * @param {!Function} expectedCondition The function to check
 *
 * @returns {!function} An expected condition that returns that returns the negated value.
 */

export function not(expectedCondition: () => Promise<boolean>): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const result = await expectedCondition()

    return !result
  }
}
