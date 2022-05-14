
import React from 'react'

const SubmitHndler=()=>{
    let ab =document.getElementById('name').value;
    if(ab ==''? alert('Enter a name') : alert('valid'));
}
const InputForm =()=>{
<div>
    <form>
    <label value="name">Name</label>
    <input type="text" id="name"  />
    <br/>
    <label value="age">Age</label>
    <input type="number" id="age"/>
    <button onclick="" >Submit</button>

    </form>

</div>

}
export default InputForm;