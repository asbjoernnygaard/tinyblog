import React from 'react';
import {createSearchParams, useNavigate} from "react-router-dom";

interface buttonProps {
  filter: string
  value: string
  text?: string
}

const FilterButton = ({filter, value, text}: buttonProps) => {

  const navigate = useNavigate();
  const params = {[filter]: value}

  const goToPosts = () =>
      navigate({
        pathname: '/Home',
        search: `?${createSearchParams(params)}`,
      });

  return (
      <button onClick={goToPosts}>{text || value}</button>
  );
};

export default FilterButton;
