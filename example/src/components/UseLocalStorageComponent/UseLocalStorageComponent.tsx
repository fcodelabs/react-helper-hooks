import * as React from 'react';
import { useLocalStorage } from '../../../../dist';
import {CopyBlock, atomOneDark} from "react-code-blocks";
import code from './code.js'

export default function UseLocalStorageComponent(): JSX.Element {
    const [count, setCount] = useLocalStorage('count', 0);

    const incrementCount = (): void => {
        setCount(count + 1)
    }

    const decrementCount = (): void => {
        setCount(count - 1);
    }

    return (
        <div className="content">
            <h2 className="p-10">useLocalStorage</h2>

            <p>Count: {count}</p>

            <div style={{display: 'flex', padding: 10}}>
                <button className="btn btn-default" style={{marginRight: 10}} onClick={incrementCount}>Increment (+)</button>
                <button  className="btn btn-default" onClick={decrementCount}>Decrement (-)</button>
            </div>

            <span className="helper-text">See your browser's localStorage to see the state values</span>
            <br />
            <div className="how-to-block">
                <h2 className="how-to-title">How to Use</h2>
                <code>useLocalStorage(key: string, initialState: any)</code>
                <div className="detail-block">
                    <h3 className="how-to-sub-title">Parameters</h3>
                    <ul>
                        <li>key: string</li>
                    </ul>
                    <span>Key of the Local storage value</span>
                    <br/>
                    <ul>
                        <li>initialState: any</li>
                    </ul>
                    <span>Key of the Local storage value</span>
                </div>

                <div className="detail-block">
                    <h3 className="how-to-sub-title">Returns</h3>
                    <ul>
                        <li>getter - get the current value</li>
                    </ul>

                    <span>Current state value stored in the localStorage</span>
                    <br/>
                    <ul>
                        <li>setter - set/update the current value</li>
                    </ul>

                    <span>Method used for setting the value. Accepts one parameter which is the updated value.</span>
                </div>

                <div className="copy-block">
                    <CopyBlock
                        language="jsx"
                        text={code}
                        showLineNumbers={true}
                        theme={atomOneDark}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
            </div>


        </div>
    )
}