// import logo from './logo.svg';
import './App.css';
import  {useState}  from  'react';
function App() {
  const[result,setResult]=useState(0);
  const[input,setInput]=useState(0);
  const[history,setHistory]=useState('0');
 // useEffect(()=>
 // {
   // setResult(p=>p);
 // });

 const plus=()=>{
  setResult(p=>Number(p)+Number(input));
  setHistory(a=>a+"+"+input);
  // setInput('');
 }

 const minus=()=>{
  setResult(p=>Number(p)-Number(input));
  setHistory(a=>a+"-"+input);
  // setInput('');
 }
 const multi=()=>{
  setResult(p=>Number(p)*Number(input));
  setHistory(a=>a+"*"+input);
  // setInput('');
 }
 const div=()=>{
  setResult(p=>Number(p)/Number(input));
  setHistory(a=>a+"/"+input);
  //setInput('');
 }
 const inputReset=()=>{
  setInput('');

 }
 const resultReset=()=>{
  setResult(0);
  setHistory('0');

 }

  return (
    <div className="App">
      <h1>{result}</h1><p>{history}</p>
    <input type='number'  onChange={e=>setInput(e.target.value)} value={input}></input> 
 <br></br>
 <br></br>
 
 <button onClick={plus}>Add</button>
 <button onClick={minus}>Sub</button>
 <button onClick={multi}>Mul</button>
 <button onClick={div}>Div</button>
 <br></br>
 <br></br>
 <button onClick={inputReset}>Reset Input</button>
 <button onClick={resultReset}>Reset Result</button>
         </div>
  );
}

export default App;
