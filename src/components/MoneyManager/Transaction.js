import React from 'react'
import { FaTimes  } from 'react-icons/fa'

const Transaction = ({ transaction }) => {
    return (
        <div
        className={`transaction ${transaction.extract ? 'extract' : ''}`} 
        >
           <h3>
               {`$ ${transaction.extract ? "-" : ""} ${transaction.amount} ( ${ transaction.time } )`}
               
               <FaTimes
                   style={{color:'red', cursor:'pointer'}}
               />
           </h3>
           <p></p>
           
           <p>{ transaction.detail }</p>
           
       </div>
    )
}

export default Transaction
