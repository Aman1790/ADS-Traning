import { useEffect, useRef, useState } from 'react';
import '../indexForm.css'


const SimpleInput = () => {

  const thisref = useRef()
  const [isvalid, setIsvalid] = useState(true)
  const [touched, setTouched] = useState(false)
  const [formisvalid, setFormisvalid] = useState(false)
  // const inputHandler = () => {
  //   if (thisref.current.value.length === 0) {

  //     setIsvalid(false)
  //     return;
  //   }

  //   else if (!thisref.current.value.includes('@')) {
  //     setIsvalid(false)
  //     return;
  //   }
  //   else if (thisref.current?.value?.includes('@')) {
  //     setTouched(true)
  //     setIsvalid(true)
  //     return;

  //   }
  // }
  const SubmitHandler = (event) => {
  console.log("on click called")
    setTouched(true);
    event.preventDefault();

    if (thisref.current.value.length === 0) {

      setIsvalid(false)
      return;
    }
    else if (!thisref.current?.value?.includes('@')) {
      setIsvalid(false)
      setFormisvalid(true)
      return
    }
    else if (thisref.current?.value?.includes('@')) {
      setTouched(true)
      setIsvalid(true)
      setFormisvalid(true)
      return;
    }

  }
  useEffect(() => {
    setTouched(true)
  }, [])
  const handelChange = () => {
    if (thisref.current.value.length === 0) {
      setFormisvalid(true)
      setIsvalid(false)
      return;
    }
    else if (!thisref.current?.value?.includes('@')) {
      setFormisvalid(true)
      setIsvalid(false)
      return
    }
    else if (thisref.current?.value?.includes('@')) {
      setFormisvalid(true)
      setTouched(true)
      setIsvalid(true)
      return;
    }
  }
  const isvalids = isvalid && touched;
  console.log(touched, '"touch"', isvalid, "is vakid", isvalids, "is valids variable")
  let css = !isvalids ? 'form-control invalid' : 'form-control'
  console.log(formisvalid,'"form is valid ')
  return (
    <form>
      <div className={css}>
        <label htmlFor='name'>Your Name</label>
        {/* <input type='text' ref={thisref} onBlur={inputHandler} id='name' onChange={handelChange} /> */}
        <input type='text' ref={thisref} id='name' onChange={handelChange} />
        {!isvalid && <p className='error-text'>Enter a valid Email </p>}
      </div>
      <div className="form-actions">
        <button  onClick={SubmitHandler} disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
}


export default SimpleInput;
