import { TimerView } from "@/components/widgets/TimerView"
import { observer } from "mobx-react"
import { myTimer } from '@/mobx/TimerStore';

export { Page }

function Page(){
    return (<div>
        <h2>Timer page</h2>
        <TimerView timer={myTimer} />
    </div>)
}

export const documentProps = {
    title: 'Timer page',
    description: 'Timer page is a nice page'
  }
