# React-101: Basic Props


```
type PersonProps={
    name:{
        first:string,
        last:string
    };
}
export const Person = (props:PersonProps) => {
    return(
        <div>{props.name.first} {props.name.last}</div>
        )
}
```

```
type PersonListProps={
    names:{first:string,last:string}[]
}

export const PersonList = (props:PersonListProps) => {
    return(
        <div>
            {props.names.map(name=>{
                return(
                    <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}
```

```
<PersonList names={[
        {first:"Louro",last:"José"},
        {first:"Stephen",last:"King"},
        {first:"George",last:"Orwell"}
      ]}/>
```