import React from 'react';
import {createSearchParams, useNavigate} from "react-router-dom";

const FilterButton = ({ tag }: { tag: string }) => {

  const navigate = useNavigate();
  const params = { sort: tag};

  const goToPosts = () =>
      navigate({
        pathname: '/Home',
        search: `?${createSearchParams(params)}`,
      });

  return (
      <button onClick={goToPosts}>{tag}</button>
  );
};

export default FilterButton;
