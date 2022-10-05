# React-101: Props Types And Tips

## Tip 1: Destructure Props

### Without Destructure
```
type DestructureProps = {
    var1:string,
    var2:string
}
export const Destructure = (props:DestructureProps) => {
    return(
        <div>{props.var1},{props.var2}</div>
    )
}
```

### With Destructure
```
type DestructureProps = {
    var1:string,
    var2:string
}
export const Destructure = ({var1,var2}:DestructureProps) => {
    return(
        <div>{var1},{var2}</div>
    )
}
```

## Tip 2: Exporting And Impoting Types

```
// @ DestructureProps.types.ts
type DestructureProps = {
    var1:string,
    var2:string
}
export {type DestructureProps}
```
```
import { DestructureProps } from "./Destructure.types"
export const Destructure = ({var1,var2}:DestructureProps) => {
    return(
        <div>{var1},{var2}</div>
    )
}
```

## Tip 3: Reusing Types

```
type Name = {
    first:string,
    last:string
};
type DestructureProps = {
    var1:string,
    var2:string,
    name:Name;
}
export {type DestructureProps, type Name}
```