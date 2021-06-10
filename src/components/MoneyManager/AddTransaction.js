import { React, useState } from 'react'

const AddTransaction = () => {
    

    
    const [ transaction, setTransaction ] = useState({
        amount: 0,
        time: 'Hoy',
        detail: '',
        extract: true
    })
    const { amount, time, detail, extract } = transaction;
    
    return (
        <div>
            <form className='add-form'>
            
            <div className='form-control'>
                <label>Cantidad</label>
                
                <input type='text' placeholder='Agregar monto'
                value={amount} onChange={(e) => (setTransaction(
                    ...transaction,
                    amount = e.target.value
                    ))}
                />

            </div>
            
            <div className='form-control'>
                <label>Día & Hora</label>
                
                <input type='text' placeholder='Agregar Day & Time'
                value={time} onChange={(e) => (setTransaction(
                    ...transaction,
                    time = e.target.value
                    ))}
                />
            </div>

            <div className='form-control'>
                <label>Detalle de transacción</label>
                
                <input type='text' placeholder='Escribir una descripcion'
                value={detail} onChange={(e) => (setTransaction(
                    ...transaction,
                    detail = e.target.value
                    ))}
                />
            </div>
            
            <div className='form-control form-control-check'>
                <label>Extraccion de dinero</label>
                <input type='checkbox'
                checked={extract}
                value={extract} 
                onChange={(e) => (setTransaction(
                    ...transaction,
                    detail = e.target.value
                    ))}
                />
            </div>

            <input type='submit' value={'Realizar transacción'}
            className='btn btn-block'/>
            </form>
        </div>
    )
}

export default AddTransaction
