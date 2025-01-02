const getPagesCount = (totalCount, perPageCount) => {
  return Math.ceil(totalCount / perPageCount);
};

export default getPagesCount;
