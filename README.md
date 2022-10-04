# React-101: Advanced Props

#### Union of literals

```
type StatusProp={
    status:"loading"|"success"|"error"
};
export const Status = (props:StatusProp) => {
    let message:string;
    switch(props.status){
        case "loading":
            message="Loading..."
            break
        case "success":
            message="Success"
            break
        case "error":
            message="Error"
            break
        default:
            message="Invalid Status"
        
    };
    return(
        <div>
            <h2>{message}</h2>
        </div>
    )
}
```
```
<Status status='success' />
```

#### Children Props

```
type HeadingProps={
    children:string
};
export const Heading = (props:HeadingProps) => {
    return(
        <h2>{props.children}</h2>
    )
};
```
```
<Heading>Text inside Heading JSX element</Heading>
```

#### Children Props as React.ReactNode

```
import React from "react";
type OscarProps = {
    children:React.ReactNode
};
export const Oscar = (props:OscarProps) => {
    return(
        <h2>{props.children}</h2>
    )
};
```
```
<Oscar>
  <Heading>Oscar goes to Mister Bean!</Heading>
</Oscar>
```

#### Optional Props
```
type GreetProps = {
    name?:string,
    messageCount?:number
    isLoggedIn:boolean
}
export const Greet = (props:GreetProps)=>{
    let message:string;
    const {messageCount = 0} = props;
    return(
        <div>
            <h2>
                {props.isLoggedIn ?
                `Welcome, ${props.name}! You have ${props.messageCount} unread messages.`
                :
                `Welcome, Guest!`}
            </h2>
        </div>
    )
}
```
```
<Greet name="Person" messageCount={20} isLoggedIn={true} />
<Greet isLoggedIn={false} />
```