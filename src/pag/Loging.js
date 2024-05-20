




import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';


function Loging() {
  const notify = () =>{
 
    toast.success("This is a toast notification !")
  };
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();


  const api=async()=>{
  if ( !email || !password) {
toast.warning("ples inter input ")
  }
  else{
    const data= await (await axios.post("http://localhost:5000/loging",{email,password})).data
    // await localStorage.setItem('token1',data.token)
    console.log(data);
    toast.success("successfully singup",{
      position:"top-center"
    })
  }
  }
  console.log(username,password,email);
  return (
    <div className="App">
      <button onClick={()=>notify()}>toast</button>
    <h2 className=' bg-red-500'>thisi isis react js </h2>

    <form className=' bg-red-200 p-4 mx-[23vw]'>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">email</label>{email?null:<h2>plese inter email</h2> }
    <input onChange={(e)=>setemail(e.target.value)} type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>{password?null:<h2>plese inter password</h2> }
    <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
</form>

<div className=' flex justify-center'>  <button onClick={()=>api()} type="submit" class="btn btn-primary">Submit</button></div>

{/* <ToastContainer/> */}

<button onClick={()=>toast.success("this is toast")}>toast</button>



    </div>
  );
}

export default Loging;
