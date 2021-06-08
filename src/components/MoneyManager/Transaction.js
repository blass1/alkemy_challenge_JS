import React from 'react'
import { FaTimes, FaEdit  } from 'react-icons/fa'

const Transaction = ({ transaction }) => {
    return (
        <div
        className={`transaction ${transaction.reminder ? 'reminder' : ''}`} 
        >
           <h3>
               {transaction.detail}{' '}
               <FaEdit />
               <FaTimes
                   style={{color:'red', cursor:'pointer'}}
               />
           </h3>
           
           <p>{transaction.time}</p>
           console.log(transaction)
           
       </div>
    )
}

export default Transaction
