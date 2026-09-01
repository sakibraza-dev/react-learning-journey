import { useState } from 'react'
import Input from './components/Input';
import Gender from './components/Gender';
import Select from './components/Select';

function App() {

  const [form , setForm] = useState({
    name : "" ,
    mail : "",
    password : "",
    confirmPass : "",
    age : "" ,
    gender : "",
    country : "",
    agree : false
  })
  const [showPassword , setShowPassword] = useState(false);
  const [showConfirmPass , setShowConfirmPass] = useState(false);
  const [error , setError] = useState({});

  function validation() {
    const Errors = {};

    // name validation
    if(form.name.trim() === ""){
      Errors.name = "Name is Required";
    }
    else if(!/^[a-zA-Z ]+$/.test(form.name)){
      Errors.name = "Name Only contain letters";
    }

    // mail validation
    if(form.mail.trim() === "") 
      Errors.mail = "Mail is Required";
    else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.mail)){
      Errors.mail = "Invalid formate'abc@gmil.com'";
    }

    if(form.password.trim() === ""){
      Errors.password = "Password is Required";
    }
    else if(!/^.{8,}$/.test(form.password)){
      Errors.password = "Password must be at least 8 characters";
    }

    if(form.confirmPass.trim() === ""){
      Errors.confirmPass = "Please confirm your password";
    }
    else if(form.confirmPass != form.password) {
      Errors.confirmPass = "Passwords do not match";
    }

    if(form.age.trim() === ""){
      Errors.age = "Age is required";
    }
    else if(Number(form.age) < 18){
      Errors.age = "You must be at least 18";
    }

    if(form.gender == ""){
      Errors.gender = "Chosee Gender";
    }

    if(form.country == ""){
      Errors.country = "Choose Country";
    }

    if(form.agree == false){
      alert("Please Agree");
    }
    return Errors;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validation();
    setError(validationErrors);
  }

  const hadleChange = (e) => {
    const {type , name , value , checked} = e.target;

    setForm(prev => ({
      ...prev , [name] : type === "checkbox" ? checked : value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">

      <div className='w-full max-w-lg bg-white rounded-xl shadow-2xl p-8'>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">Registration Form</h1>
        <form 
          onSubmit={submitHandler}
        >
          <Input 
            label="Name*" 
            type="text" 
            name="name"
            value={form.name} 
            onChange={hadleChange} 
            error = {error.name}
          />
          
          <Input 
            label="Mail*"
            type="email"
            name="mail" 
            value={form.mail} 
            onChange={hadleChange} 
            error = {error.mail}
          />

          
          <Input 
            label="Password*" 
            type="password" 
            name="password"
            value={form.password} 
            onChange={hadleChange}
            error = {error.password}
            showPassword = {showPassword}
            setShowPassword = {setShowPassword}
          />
          
          <Input 
            label="Confirm*" 
            type="password"
            name="confirmPass" 
            value={form.confirmPass} 
            onChange={hadleChange} 
            error = {error.confirmPass}
            showPassword = {showConfirmPass}
            setShowPassword = {setShowConfirmPass}
          />
          
          <Input 
            label="Age*" 
            type="number" 
            name="age"
            value={form.age} 
            onChange={hadleChange}
            error = {error.age}
          />

          
          <div className='mb-5 mt-2'>
            <p className="block mb-1 font-medium text-gray-700">Gender*</p>

            <div className="flex gap-6">

              <Gender 
                label="Male"
                id="male"
                value="male"
                checked={form.gender === "male"}
                onChange={hadleChange}
              />
              <Gender 
                label="Female"
                id="female"
                value="female"
                checked={form.gender === "female"}
                onChange={hadleChange}
              />

            </div>
            {
              error.gender && 
              <p className="text-sm text-red-600 mt-1">{error.gender}</p>
            }
          </div>
          
          <Select 
            name="country"
            value={form.country}
            onChange={hadleChange}
            options={['india' , 'nepal' , 'china']}
            error={error.country}
          />

          
          <div className='mb-2'>
            <label 
              htmlFor="agree"
              className='flex items-center justify-center gap-3'
            >
              <input 
                className='w-4 h-4 accent-green-600 cursor-pointer'
                type="checkbox" 
                name='agree' 
                id='agree'
                onChange={hadleChange}
              />
              I agree to the Terms & Conditions
            </label>
          </div>

          <button
            className='w-full py-2 rounded bg-green-600 text-white font-semibold transition hover:bg-green-700'
          >
            Register
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default App
