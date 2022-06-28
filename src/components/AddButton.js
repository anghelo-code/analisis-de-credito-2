import React from 'react'
import { Link } from 'react-router-dom';

const AddButton = ({link, text}) => {
  return (
    <Link to={ link } >
        <div  className='button' >
            <h4> {text}</h4>
        </div>
    </Link>
  )
}

export default AddButton