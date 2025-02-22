import Button from "@/components/button";

const Register = function () {
  return (
    <div className="flex flex-col justify-center w-full p-5">
      <h1 className="text-2xl font-bold pb-[10px]">Register Individual Account!</h1>
      <p className="pb-[20px]">For the purpose of industry regulation, your <br/>details are required.</p>

      <div className="">
      <form>
        <div className="flex flex-col pb-[20px]">
          <label className="pb-[5px]">Your Fullname</label>
          <input className="border border-slate-400 p-3 rounded-md hover:border-blue-500 hover:shadow-xl" 
          type="string"
          placeholder="Enter Your Name" required/>
        </div>

        <div className="flex flex-col pb-[20px]">
          <label className="pb-[5px]">Email Address</label>
          <input className="border border-slate-400 p-3 rounded-md  hover:border-blue-500 hover:shadow-xl" 
          type="email"
          placeholder="Email Address" required/>
        </div>

        <div className="flex flex-col pb-[20px]">
          <label className="pb-[5px]">Create Password</label>
          <input className="border border-slate-400 p-3 rounded-md  hover:border-blue-500 hover:shadow-xl" 
          type="password"
          placeholder="Password" required/>
        </div>

        <div className="pb-[20px]">
          <label className="flex flex-col pb-[5px]">Department</label>
          <select className="border border-slate-400 p-3 rounded-md  hover:border-blue-500 hover:shadow-xl w-[100%]" required>
              <option value="">--Department--</option>
              <option value="">Technology</option>
              <option value="">Legal</option>
              <option value="">Customer Service</option>
              <option value="">Administration</option>
              <option value="">Digital banking</option>
              <option value="">Treasury</option>
          </select>
        </div>

        <div className="pb-[30px] ">
          <label for="Terms and Conditions" >
            <input required type="checkbox" 
            className="h-5 w-5 cursor-pointer hover:shadow-md border border-slate-300"  
            id="Terms and Conditions"/>
              I agree to terms & conditions
          </label>
        </div>

        <Button className="">Register Account</Button>
      </form>
      
      </div>
    </div>
  );
};

export default Register;
