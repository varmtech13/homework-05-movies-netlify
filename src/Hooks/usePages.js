import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function usePages() {
  const [totalPage, setTotalPage] = useState(1);
  const history = useNavigate();
  const location = useLocation();

  const page = Number(new URLSearchParams(location.search).get('page') ?? 1);

  function handleChangePage(pageNumber) {
    history({ ...location, search: `page=${pageNumber}` });
  }

  return { page, totalPage, setTotalPage, handleChangePage };
}
