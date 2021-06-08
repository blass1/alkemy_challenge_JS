import Transacctions from './components/MoneyManager/Transactions';
import './App.css';


const transactionsTest = {
    transactions : [
      {
        amount: 1900,
        detail: "Compra de supermercado",
        time: "Hoy",
        type: true,
        reminder: true,
        id: 1
      },
    ]
    
  };

  console.log(transactionsTest)

function App() {
  return (

      <div className="container">
        {
          transactionsTest.length > 0 ? (
            <Transacctions 
              transactions={transactionsTest.transactions}
              // onDelete={deleteTransacction}
              // onToggle={toggleReminder}
            />)
            : 'No transacctions to show'
        }
      
      </div>
  );
}

export default App;
