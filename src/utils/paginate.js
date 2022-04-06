const paginate = (items, currentPage, pageSize) => [...items].splice((currentPage - 1) * pageSize, pageSize);
export default paginate;
