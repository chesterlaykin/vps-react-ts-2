import { observer } from "mobx-react"

// "user interface" that uses the observable state.
export const TimerView = observer((props: JSX.Props) => {
    const {timer} = props;

    return (
        <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
    )
})

