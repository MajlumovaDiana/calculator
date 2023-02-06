
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, divideAction, incrementAction, incrementByUser, setIncrementValueAction } from './Redux/Action/Counter.Action';

function App() {
    const count = useSelector((state) => state.counterReducer.count);
    const inputValue = useSelector((state) => state.counterReducer.inputValue);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>{count}</h1>
            <input 
            type="number" 
            value={inputValue} 
            onChange={(e) => dispatch(setIncrementValueAction(e.target.value))} />
            <button onClick={()=>dispatch(incrementByUser(inputValue))}>ADD</button>
            <button onClick={()=>dispatch(incrementAction())}>INCREMENT</button>
            <button onClick={()=>dispatch(divideAction())}>DIVIDE</button>
            <button onClick={()=>dispatch(decrementAction())}>DECREMENT</button>
        </div>
    );
}

export default App