import Transaction from './Transaction'

const Transactions = ({ transactions }) => {
    
    // const [usedMoney, setUsedMoney] = useState(initialState)
    
    return (
        <>
            {
                transactions.map((transaction) => (
                    <Transaction 
                        key={transaction.id} 
                        transaction={transaction}
                    />
                ))
            }    
        </>
    )
}

export default Transactions