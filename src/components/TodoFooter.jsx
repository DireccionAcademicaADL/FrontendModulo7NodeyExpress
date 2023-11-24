const TodoFooter = ({
  page,
  setPage,
  totalPages,
  next,
  previous,
  order,
  setOrder,
}) => {
  return (
    <div className="mt-2 d-flex">
      <nav className="me-auto">
        <ul className="pagination">
          <>
            <li
              className={`page-item ${!previous ? "disabled" : ""}`}
              onClick={() => {
                if (previous) {
                  setPage(page - 1);
                }
              }}
              style={
                !previous ? { cursor: "not-allowed" } : { cursor: "pointer" }
              }
            >
              <a className="page-link" href="#">
                Previous
              </a>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${page === index + 1 ? "active" : ""}`}
                onClick={() => setPage(index + 1)}
              >
                <a className="page-link" href="#">
                  {index + 1}
                </a>
              </li>
            ))}

            <li
              className={`page-item ${!next ? "disabled" : ""}`}
              onClick={() => {
                if (next) {
                  setPage(page + 1);
                }
              }}
              style={!next ? { cursor: "not-allowed" } : { cursor: "pointer" }}
            >
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </>
        </ul>
      </nav>
      <div>
        <span className="me-2">Order by:</span>
        <button
          className={`btn btn-outline-primary me-2 ${
            order === "asc" ? "active" : ""
          }`}
          onClick={() => setOrder("asc")}
        >
          Active
        </button>
        <button
          className={`btn btn-outline-primary ${
            order === "desc" ? "active" : ""
          }`}
          onClick={() => setOrder("desc")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
export default TodoFooter;
