# React-101: Event Props

- Click Events

```
import React from 'react';

type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:number)=>void
};

export const Button = (props:ButtonProps)=>{
    return(
        <button onClick={(event)=>{
            props.handleClick(event,1)
        }}>Click Me</button>
    )
}
```
```
<Button handleClick={(event,id)=>{console.log('Button Clicked',event, id)}} />
```

- Input Events

```
import React from "react";

type InputProps = {
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
};
export const Input = (props:InputProps) => {
    return(
        <input type="text" value={props.value} onChange={props.handleChange} />
    )
};
```
```
<Input value='' handleChange={event=>{console.log(event)}} />

```
