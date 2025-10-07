import { SearchIcon } from '@/icons/Icons'
import React from 'react'
import Tooltip from '@mui/material/Tooltip';

const SearchButton = () => {
  return (
    <Tooltip title="Site Search (/)">
      <button className='cursor-pointer'>
        <SearchIcon size={20} style='text-white' />
      </button>
    </Tooltip>
  )
}

export default SearchButton