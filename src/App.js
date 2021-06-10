import Transacctions from './components/MoneyManager/Transactions';
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


  const fetchTransactions = async() => {
    const res = await fetch('http://localhost:5000/transactions')
    const data = await res.json()
    return data
  }
  
  // MANEJO DEL HEADER
  const [total, setTotal] = useState("$9500")
  
  
  return (

      <div className="container">
        
        <Header total={total}/>

        <AddTransaction />

        {
          transactions.length > 0 ? (
            <Transacctions 
              transactions={transactions}
              // onDelete={deleteTransacction}
              // onToggle={toggleReminder}
            />)
            : 'No transacctions to show'
        }
      
      </div>
  );
}

export default App;
