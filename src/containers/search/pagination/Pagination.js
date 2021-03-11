import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import {
  Col, Row,
} from 'react-bootstrap';
import './Pagination.scss';

export default function Pagi() {
  // current page
  const [currentPage, setCurrentPage] = useState(1);

  // total records per page to display
  const recordPerPage = 10;

  // total number of the records
  const totalRecords = 50;

  // range of pages in paginator
  const pageRange = 10;

  // handle change event
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // call API to get data based on pageNumber
  };

  return (
    <div className="pagination">
      <Row>
        <Col>
          <Pagination
            className="responsive"
            itemClass="page-item"
            linkClass="page-link"
            activePage={currentPage}
            itemsCountPerPage={recordPerPage}
            totalItemsCount={totalRecords}
            pageRangeDisplayed={pageRange}
            onChange={handlePageChange}
          />

        </Col>
        <Col />
      </Row>

    </div>
  );
}
