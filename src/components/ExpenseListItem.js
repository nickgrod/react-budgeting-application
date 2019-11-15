import React from 'react'
import {Link} from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch})=> (
    <div>
        <p>{description}: ${amount/100} -  {createdAt}</p>
        <Link to= {`/edit/${id}`}>
            <button>Edit</button>
        </Link>
        </div>
)

export default ExpenseListItem