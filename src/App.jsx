/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
// App.js
import './styles/Home.module.css';
import WrongNetworkMessage from './Assets/WrongNetworkMessage'
import ConnectWalletButton from './Assets/ConnectWalletButton'
import TodoList from './Assets/TodoList'


function App() {
   // Calls Metamask to connect wallet on clicking Connect Wallet button
   const connectWallet = async () => {

   }
 
   // Just gets all the tasks from the contract
   const getAllTasks = async () => {
 
   }
 
   // Add tasks from front-end onto the blockchain
   const addTask = async e => {
 
   }
 
   // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
   const deleteTask = key => async () => {
 
   }
  return (
    <div className='bg-[#97b5fe] h-screen w-screen flex justify-center py-6'>
    {!'is user not logged in?' ? <ConnectWalletButton /> :
      'is this the correct network?' ? <TodoList /> : <WrongNetworkMessage />}
  </div>
  );
}

export default App;
