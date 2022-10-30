const code = `import { useLocalStorage } from '@fcodelabs/react-helper-hooks'

function Example() {
    const [count, setCount] = useLocalStorage('count', 0);

    const incrementCount = (): void => {
        setCount(count + 1)
    }

    const decrementCount = (): void => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2 className="p-10">useLocalStorage</h2>
            <p>Count: {count}</p>
            <div>
                <button onClick={incrementCount}>Increment (+)</button>
                <button onClick={decrementCount}>Decrement (-)</button>
            </div>
        </div>
    )
}
`
export default code;