const code = `import { useWindowSize } from '@fcodelabs/react-helper-hooks'

function Example() {
    const  [ windowSize, isDesktop ] = useWindowSize(1024);
        return (
            <div>
                <p>Window Size: {windowSize.width}</p>
                 <p>Current Device Size: {isDesktop ? 'Desktop': 'Mobile'}</p>
            </div>
        )
}
`
export default code;