import { useEffect, useState } from 'react';

function useInterval(fn, n) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      fn();
    }, n);

    return () => {
      clearInterval(intervalId);
    };
  }, [fn, n]);
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return (
    <>
      Timer is at {count}
    </>
  );
}

export default App;
