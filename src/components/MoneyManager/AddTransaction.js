import { React, useState } from 'react'

const AddTransaction = ({onNewTransaction}) => {
    
    const [amount, setAmount] = useState('');
    const [detail, setDetail] = useState('');
    const [extract, setExtract] = useState(false);
    const [time, setTime] = useState('');


    const onSubmitAction = (e) => {
        // No se recargue la pagina en el submit
        e.preventDefault()

        if(!amount || !time) {
            alert('Verifique la carga de datos de los campos del formulario')
            return;
        }

        onNewTransaction({amount, time, detail, extract })

        setAmount('')
        setDetail('')
        setExtract(true)
        setTime('')

    }

    return (
        <div>
            <form className='add-form' onSubmit={ onSubmitAction }>
            {/* Campos del formulario de carga de transaccion*/}
            <div className='form-control'>
                <label>Cantidad</label>
                <input 
                    type='text'
                    placeholder='Agregar monto a operar ($)'
                    value={amount} 
                    onChange={
                        (e) => (setAmount(e.target.value))}
                />
            </div>
            
            <div className='form-control'>
                <label>Día & Hora</label>
                <input 
                    type='text'
                    placeholder='Fecha de operacion'
                    value={time} 
                    onChange={
                        (e) => (setTime(e.target.value))}
                />
            </div>

            <div className='form-control'>
                <label>Detalle de transacción</label>
                <input 
                    type='text'
                    placeholder='Agregar monto a operar ($)'
                    value={detail} 
                    onChange={
                        (e) => (setDetail(e.target.value))}
                />
            </div>
            
            <div className='form-control form-control-check'>
                <label>Extraccion de dinero</label>
                
                <input type='checkbox'
                checked={extract}
                value={extract} 
                onChange={
                    (e) => (setExtract(e.currentTarget.checked))}
                />
            </div>

            <input type='submit' value={'Realizar transacción'}
            className='btn btn-block'/>
            </form>
        </div>
    )
}

export default AddTransaction
