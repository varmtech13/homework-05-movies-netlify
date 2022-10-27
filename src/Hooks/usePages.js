import { useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

export default function usePages() {
  const [totalPage, setTotalPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const page = Number(new URLSearchParams(location.search).get('page') ?? 1);

  function handleChangePage(pageNumber) {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', pageNumber);
    navigate({
      ...location,
      search: searchParams.toString(),
    });
  }

  return { page, totalPage, setTotalPage, handleChangePage };
}
