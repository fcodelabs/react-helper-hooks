import * as React from 'react';
import { useWindowSize } from '../../../../dist';
import {CopyBlock, atomOneDark} from "react-code-blocks";
import code from './code.js'

export default function UseWindowSizeComponent(): JSX.Element {
    const  {windowSize,isDesktop} = useWindowSize(1024);

    return (
        <div className="content">
            <h2 className="p-10">useWindowSize</h2>
            <p className="p-10">Window Size: {windowSize.width}px</p>
            <p>Current Device Size: {isDesktop ? 'Desktop': 'Mobile'}</p>
            <span className="helper-text">Resize your window to See how this works</span>
            <br />
            <div className="how-to-block">
                <h2 className="how-to-title">How to Use</h2>
                <code>useWindowSize(breakpoint: number)</code>
                <div className="detail-block">
                    <h3 className="how-to-sub-title">Parameters</h3>
                    <ul>
                        <li>breakpoint</li>
                    </ul>
                    <span>Breakpoint value in Pixels for Mobile Size (eg: 1024)</span>
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