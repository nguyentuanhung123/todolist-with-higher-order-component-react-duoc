// Phải viết hoa Component
// Higher Order Component là 1 function nhận một Component và return về1 Component mới 

import { debug, log } from "../constants"

export interface ExtraInfoType {
  debug: boolean
  log: (value: any) => void
}

export default function connect<T>(Component: React.ComponentType<T>) {
  return function (props: Omit<T, keyof ExtraInfoType>){
    const _props = props as T
    return <Component {... _props} debug={debug} log={log}/>
  }
}