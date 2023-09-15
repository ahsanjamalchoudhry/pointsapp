import { useState } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped]=useState([])

  function handleOnClick(e) {
    const { clientX, clientY } = e;
    setPoints([...points, { X: clientX, Y: clientY }]);
  }

  function handleUndo() {
    const newPoints = [...points];
    const poppedPoints =newPoints.pop();
    if (!poppedPoints) return
    setPopped([...popped,poppedPoints])
    setPoints(newPoints);
  }
  function handleRedo(){
    const newPopped=[...popped]
    // const newPoints=[...points]
    const poppedPoints=newPopped.pop();
    
    if (!poppedPoints) return
    setPoints([...points,poppedPoints])
    setPopped(newPopped)
  
  }

  return (
    <>
    <button className="undo" onClick={handleUndo}>Undo</button>
    <button className="undo" disabled={popped.length===0} onClick={handleRedo}>Redo</button>
    <div className="App" onClick={handleOnClick}>
      
      {points.map((point, index) => (
        <div
          key={index}
          className="points"
          style={{
            left: point.X - 5 + 'px',
            top: point.Y - 5 + 'px',
          }}
        >
          
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
