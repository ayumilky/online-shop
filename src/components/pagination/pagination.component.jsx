import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const PaginationBar = ({ getProductData, count }) => {
  //   const pageSize = 8;

  //   const paginationInitialState = {
  //     count: 0,
  //     from: 0,
  //     to: pageSize,
  //   };

  //   const [pagination, setPagination] = useState([paginationInitialState]);

  //   useEffect(() => {
  //     getProductData({ from: pagination.from, to: pagination.to });
  //     setPagination({ ...pagination, count: count });
  //   }, []);

  //   const onChangeHandler = (event, page) => {
  //     const from = (page - 1) * pageSize;
  //     const to = (page - 1) * pageSize + pageSize;
  //     setPagination({ ...pagination, from: from, to: to });
  //   };

  return (
    <div>
      <Pagination
        variant="outlined"
        shape="rounded"
        // count={Math.ceil(pagination.count / pageSize)}
        // onChange={onChangeHandler}
      />
    </div>
  );
};

export default PaginationBar;
