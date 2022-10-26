
# @fcodelabs/react-helper-hooks

A Custom Set of Helper Hooks written in Typescript to Make Your Life Easier.

## Demo

See working Demo [Here](https://fcodelabs.github.io/react-helper-hooks)

## Installation

Install with npm

```bash
  npm install @fcodelabs/react-helper-hooks
```
Install with yarn

```bash
  yarn add @fcodelabs/react-helper-hooks
```


## List of Hooks

- [useWindowSize](#useWindowSize) - Get current window size and device type (Desktop or Mobile) based on your breakpoint
- [useLocalStorage](#useLocalStorage) - Sync your state with browser localStorage. Works same as the `useState` hook. Automatically sync with localStorage value changes.

<a id="useWindowSize"></a>
### useWindowSize

This hook is useful when you want to get the window size as height and width.

**It takes one argument**
- `breakpoint: number `

Breakpoint for mobile in pixels

```
const { windowSize, isDesktop } = useWindowSize(1024);
```

#### windowSize
```
const { windowSize } = useWindowSize(1024);

// {width: 1368, height: 1024}
```
#### isDesktop
```
const { isDesktop } = useWindowSize(1024);

# If window size less than 1024
// false

# If window size greater than 1024
// true
```

<a id="useLocalStorage"></a>
### useLocalStorage

This hook is useful when you want to use localStorage as your state. It works same almost same as `useState` hook, which means it will sync the localstorage value changes automatically.

**It takes two arguments**
- `key: string`

LocalStorage key (This will be the key that your state will be saved)

- `initialState: any`

Initial state value. It could be in any of data type such as `string`, `number`, `boolean`, `object`, `array` or `custom interfaces`.

```
## Javascript

const [ count, setCount ] = useLocalStorage('count', 0);
```

```
## Typescript

const [ count, setCount ] = useLocalStorage<number>('count', 0);
```


## Support

If you find any bugs please report an issue, so it can be fixed. If you have any suggestions that would improve the hooks, please let us know. Feel free to contribute in any way!

**We hope this package can be useful for you in someway.**