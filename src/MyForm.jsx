import { useEffect, useRef, useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

export function MyForm() {
  const [data, setData] = useState(createData());

  const mountedRef = useRef(false)

  const inputRef= useRef(null);

  useEffect(()=>{
    if(!mountedRef.current) {
      mountedRef.current = true
      console.log('mounting for the first time')
    }else{
      console.log('mounting again')
    }


  inputRef.current?.focus()
  },[])


  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleResetForm() {
    setData(createData());
  }

  function handleLoginSubmit(event){
 event.preventDefault()

 console.log('login button pressed', data);
  }

console.log(inputRef);

  return (
    <form onSubmit = {handleLoginSubmit}>
      <h1>My Form</h1>
      <input ref={inputRef}
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      />
      <button type= "submit" disabled={!data.username || !data.password}>Login</button>
      <button type= "button" onClick={handleResetForm}>Reset</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
