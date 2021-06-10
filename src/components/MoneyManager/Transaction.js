import React from 'react'
import { FaTimes  } from 'react-icons/fa'

const Transaction = ({ transaction }) => {
    return (
        <div
        className={`transaction ${transaction.extract ? 'extract' : ''}`} 
        >
           <h3>
               {"$ " + transaction.amount}{' '}
               <FaTimes
                   style={{color:'red', cursor:'pointer'}}
               />
           </h3>
           
           <p>{ transaction.time }</p>
           <p>{ transaction.detail }</p>
           
       </div>
    )
}

export default Transaction
