import * as React from 'react';
import { useLocalStorage } from '../../../../dist';
import {CopyBlock, atomOneDark} from "react-code-blocks";
import code from './code.js'

export default function UseLocalStorageComponent(): JSX.Element {
    const [count] = useLocalStorage('count', 0);

    // const incrementCount = (): void => {
    //     setCount(count + 1)
    // }

    // const decrementCount = (): void => {
    //     setCount(count - 1);
    // }

    return (
        <div className="content">
            <h2 className="p-10">useLocalStorage</h2>

            <p>Count: {count}</p>

            {/* <button onClick={incrementCount}>Increment (+)</button>
            <button onClick={decrementCount}>Decrement (-)</button> */}

            <span className="helper-text">Resize your window to See how this works</span>
            <br />
            <div className="how-to-block">
                <h2 className="how-to-title">How to Use</h2>
                <code>useLocalStorage(key: string, initialState: any)</code>
                <div className="detail-block">
                    <h3 className="how-to-sub-title">Parameters</h3>
                    <ul>
                        <li>key</li>
                    </ul>
                    <span>Key of the Local storage value</span>
                </div>

                <div className="detail-block">
                    <h3 className="how-to-sub-title">Returns</h3>
                    <ul>
                        <li>windowSize <code>{`{width: number, height: number}`}</code></li>
                    </ul>

                    <span>Size (width and height) of the Window as an Object</span>
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