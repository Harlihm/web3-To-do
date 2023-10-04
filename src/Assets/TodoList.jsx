/* eslint-disable react/prop-types */
import Navbar from './Navbar'
import Task from './Task'
import { AiOutlinePlusCircle } from 'react-icons/ai';

const TodoList = ({tasks ,addTask,setInput,input,deleteTask}) => <div className='w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] overflow-scroll'>
  <Navbar />
  <h2 className='text-4xl bolder text-white pb-8'>
    What&apos;s up, Pain!
  </h2>
  <div className='py-3 text-[#7d99e9]'>TODAY&apos;S TASKS</div>
  <form className='flex items-center justify-center'>
    <input
      className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]'
      placeholder='Add a task for today...'
      // take input from the form here
      value={input} onChange={e => setInput(e.target.value)}
    />
    <AiOutlinePlusCircle
      // Add an onClick method
      onClick={addTask}
      className='text-[#ea0aff] text-[50px] cursor-pointer ml-[20px] mb-[10px]'
    />
  </form>
  <ul>
    {/* Loop through all tasks here using the Task component */}
    {tasks.map(item=>(
      <Task
      key={item.id}
      taskText={item.taskText}
      onClick={deleteTask(item.id)}
      />
    ))}
  </ul>
</div>

export default TodoList