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