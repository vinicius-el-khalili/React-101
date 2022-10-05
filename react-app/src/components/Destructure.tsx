import { DestructureProps } from "./Destructure.types"
export const Destructure = ({var1,var2,name}:DestructureProps) => {
    return(
        <div>{var1},{var2},{name.first} {name.last}</div>
    )
}