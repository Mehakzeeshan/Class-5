'use client';
import { useState } from "react";


type propsType = {
    profile: string
}


export default function Header(props: propsType) {
   const [state, setState] = useState(0)
console.log(props.profile)

return <div>Header
    <button onClick={() => setState(1)}>{props.profile} {state}</button>
</div>

}