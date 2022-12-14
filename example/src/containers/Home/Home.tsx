import { atomOneLight, CopyBlock } from 'react-code-blocks';
import * as React from 'react';
import codeUseWindowSize from '../../components/UseWindowSizeComponent/code.js';
import codeUseLocalStorage from '../../components/UseLocalStorageComponent/code.js'
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <div className="content">
      <div className="home-content">
        <h2 style={{ marginBottom: 20 }}>Getting Started</h2>
        <p>Using yarn</p>
        <div className="copy-block">
          <CopyBlock
            language="shell"
            text={`yarn add @fcodelabs/react-helper-hooks            `}
            showLineNumbers={false}
            theme={atomOneLight}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p>Using npm</p>
        <div className="copy-block">
          <CopyBlock
            language="shell"
            text={`npm install @fcodelabs/react-helper-hooks        `}
            showLineNumbers={false}
            theme={atomOneLight}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>

      <div className="home-content">
        <h2 style={{ marginBottom: 20 }}>Usage</h2>
        <div className='usage-block'>
          <h4 style={{ marginBottom: 10 }}>1. useWindowSize</h4>
          <p
            style={{ whiteSpace: 'pre-wrap', marginBottom: 10 }}
          >{`This hook will help to get the current size (width and height) of the size. Also it will return isDesktop boolean based on your breakpoint.`}</p>
          <Link to="/use-window-size">See Demo</Link>
          <div className="copy-block">
            <CopyBlock
              language="shell"
              text={codeUseWindowSize}
              showLineNumbers={false}
              theme={atomOneLight}
              wrapLines={true}
              codeBlock
            />
          </div>
        </div>

        <div className='usage-block'>
          <h4 style={{ marginBottom: 10 }}>2. useLocalStorage</h4>
          <p
            style={{ whiteSpace: 'pre-wrap', marginBottom: 10 }}
          >{`This hook is useful when you want to use localStorage as your state. It works same almost same as useState hook, which means it will sync the localstorage value changes automatically.`}</p>
          <Link to="/use-local-storage">See Demo</Link>
          <div className="copy-block">
            <CopyBlock
              language="shell"
              text={codeUseLocalStorage}
              showLineNumbers={false}
              theme={atomOneLight}
              wrapLines={true}
              codeBlock
            />
          </div>
        </div>
      </div>
    </div>
  );
}
