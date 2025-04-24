import { useEffect, useState } from 'react';
import './App.css';
import RevenueCard from './components/RevenueCard';

function App() {
  return (
    <div className='grid grid-cols-3 p-6'>
      <RevenueCard title="Amount Pending" amount="120000" orderCount="3000" />
    </div>
  );
}

export default App;
