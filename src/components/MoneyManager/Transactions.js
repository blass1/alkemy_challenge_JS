import Transaction from './Transaction'

const Transactions = ({ transactions }) => {
    return (
        <>
            {
                transactions.map((transaction) => (
                    <Transaction 
                        key={transaction.id} 
                        transacction={transaction}
                    />
                ))
            }    
        </>
    )
}

export default Transactions