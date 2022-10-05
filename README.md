# React-101: Style Props

```
import React from "react";

type ContainerProps = {
    styles:React.CSSProperties,
};

export const Container = (props:ContainerProps) =>{
    return(
        <div style={props.styles}>Container text</div>
    )
};
```
```
<Container styles={{border:'1px solid black',padding:'1rem'}} />
```
