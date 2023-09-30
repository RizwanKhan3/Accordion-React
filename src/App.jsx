import { useState } from 'react';
import './App.css';
import { useDataContext } from './store/DataProvider.jsx';
import Accordion from './components/AccordionItem.jsx';

function App() {
  const data = useDataContext();


  return (
    <div>

     <Accordion data={data}/>
    </div>
  );
}


export default App;
