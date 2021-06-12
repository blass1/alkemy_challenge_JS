import Transacctions from './components/MoneyManager/Transactions';
import Transacction from './components/MoneyManager/Transaction';
import {Header} from './components/MoneyManager/Header';
import './App.css';
import {useState, useEffect} from 'react';
import AddTransaction from './components/MoneyManager/AddTransaction';



function App() {
  
  // MANEJO DE LAS TRANSACCIONES
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const getTransactions = async () => {
      const transactionsFromServer = await fetchTransactions()
      setTransactions(transactionsFromServer)
    }
  
    getTransactions()
  }, [])


  // TRAIGO LA DATA DEL BACKEND
  const fetchTransactions = async() => {
    const res = await fetch('http://localhost:5000/transactions')
    const data = await res.json()
    return data
  }
  
  // AGREGO NUEVA DATA AL BACKEND
  const newTransaction = async (transaction) => {
    
    setShowForm(!showForm)

    const res = await fetch(
      `http://localhost:5000/transactions`,
      {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(transaction),
      }
    )
    
    // Como es una promesa uso el await
    const data = await res.json()

    setTransactions([...transactions, data])
    
    
    

  }



  // HEADER
  const [total, setTotal] = useState("$9500")

  // FORM
  const [showForm, setShowForm] = useState(false)
  
  
  return (

      <div className="container">
        
        <Header
          total={total}
          onClickNew={()=> setShowForm(!showForm)}
          showTransactionForm={showForm}
        />

        {showForm && <AddTransaction onNewTransaction={newTransaction} />}

        <h2>Historial</h2>

        {
          transactions.length > 0 ? (
            <Transacctions 
              transactions={transactions}
            />)
            : 'No transacctions to show'
        }
      
      </div>
  );
}

export default App;
