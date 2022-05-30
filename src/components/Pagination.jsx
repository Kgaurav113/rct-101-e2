import React, { useState } from "react";
import { useEffect } from "react";
import { Button,ButtonGroup,Select } from "@chakra-ui/react";
import axios from "axios";
const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra

  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  const [page, setPage] = useState(1);

  const [products, setproducts]=useState([])
  useEffect (() => {
    axios
      .get(`http://localhost:8080/products?_page=${page}`)
      .then((r) => {
        setproducts(r.data);
       
      });
  }, [page]);
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button"  onClick={()=>setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>setPage(page-1)}>Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>setPage(page+1)}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>setPage(page.length)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
