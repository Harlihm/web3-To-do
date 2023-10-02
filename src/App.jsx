/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
// App.js
import './styles/Home.module.css';
import WrongNetworkMessage from './Assets/WrongNetworkMessage'
import ConnectWalletButton from './Assets/ConnectWalletButton'
import TodoList from './Assets/TodoList'
import { TaskContractAddress } from '../config';
import TaskAbi from '../backend/build/contracts/TaskContract.json'
import {ethers} from "ethers"
import { useState } from 'react';


function App() {
  const [correctNetwork,setCorrectNetwork]=useState(false);
  const [isUserLoggedin,setIsUserLoggedIn]=useState(false);
  const [currentAccount,setCurrentAccount]=useState('');
  const [input,setInput]=useState('');
  const [tasks , setTasks]= useState([]);


   // Calls Metamask to connect wallet on clicking Connect Wallet button
   const connectWallet = async () => {
    try {
       const{ ethereum } = window;
       if (!ethereum){
        console.log('metamask not detected')
        return
       }
       let chainId= await ethereum.request({method: 'eth_chainId'});
       
       console.log('connected to chain',chainId)

       const GoerliChainId ='0x5'
       if (chainId !== GoerliChainId){
        alert('youre not connected to  Goerli')
        setCorrectNetwork(false)
        return
       }
       else{
        setCorrectNetwork(true)

       }

       const accounts =await ethereum.request({method:'eth_requestAccounts'})

       console.log('found account',accounts[0])
       setIsUserLoggedIn(true)
       setCurrentAccount(accounts[0])
    }catch(error){
      console.log(error)
    }

   }
 
   // Just gets all the tasks from the contract
   const getAllTasks = async () => {
 
   }
 
   // Add tasks from front-end onto the blockchain
   const addTask = async e => {
       e.preventDefault();
       let task ={
        taskText: input,
        isDeleted: false

       }
         try{
          const {ethereum}=window;
          if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            const TaskContract= new ethers.Contract(
              TaskContractAddress,
              TaskAbi.abi,
              signer  
            )
         
            TaskContract.addTask(task.taskText,task.isDeleted)
            .then(res =>{
              setTasks([...tasks,task])
              console.log('added task')
            }).catch(err=>{
              console.log(err)
            })

          }else{
            console.log('ethereum object does not exist')
          }
         }
         catch(error){
          console.log(error)
        }
   }
 
   // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
   const deleteTask = key => async () => {
 
   }
  return (
    <div className='bg-[#97b5fe] h-screen w-screen flex justify-center py-6'>
    {!isUserLoggedin ? <ConnectWalletButton connectWallet={connectWallet} /> :
      correctNetwork ?  <TodoList addTask={addTask} setInput={setInput} input={input}/> : <WrongNetworkMessage />}
  </div>
  );
}

export default App;
