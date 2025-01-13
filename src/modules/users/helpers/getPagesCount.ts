/**
 * Calculates the total number of pages required to display a given number of items,
 * based on the number of items per page.
 *
 * @param {number} totalCount - The total number of items to paginate.
 * @param {number} itemsPerPage - The number of items to display per page.
 * @returns {number} - The total number of pages needed to display all items, rounded up.
 * If the total count is perfectly divisible by the items per page, the result is an integer.
 */
export type PagesCount = number;

const getPagesCount = (
  totalCount: number,
  itemsPerPage: number
): PagesCount => {
  return Math.ceil(totalCount / itemsPerPage);
};

export default getPagesCount;
