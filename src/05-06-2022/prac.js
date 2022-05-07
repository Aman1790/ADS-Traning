import React,{ useState}  from "react";
const Abhi=(props) =>{

    const [name,setName] = useState(props.name);
    const [age,setAge] =useState(props.age);

    const Abh=()=>{
        setName('Aman kundu');
        setAge(22);
        console.log("Yoy have clicked on the  buttn");
    }
    return(
        <div>
            <div><h1>This is my First page</h1></div>
            <div>{name}</div>
            <div>{age}</div>
            <div className="btn"><button onClick={Abh}>Click Here</button></div>
        </div>
    )
}
export default Abhi;