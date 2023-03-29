import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// with the rest of our imports:
import { decrement, increment, incrementByAmount } from './features/counterSlice'

// Inside of our Counter component:
const Counter = () => {
const byAmountSubmit = (e) => {
    e.preventDefault()
    dispatch(incrementByAmount(Number(input)))
}

const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [ input, setInput ] = useState(0)


return (
    <div>
        <h1>{count}</h1>
        <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}>
            Increment
        </button>
        <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}>
            Decrement
        </button>
        <form onSubmit={(e) => byAmountSubmit(e)}>
            <input type="number" onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}


export default Counter
