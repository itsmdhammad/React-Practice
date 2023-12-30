import { useState } from "react";

function Login(updateState) {

  return (
    <>
      <div className="w-screen h-screen pt-20 font-serif flex justify-center items-center bg-cover bg-[url(https://play-lh.googleusercontent.com/h49kBKdleiFFF7vWwCvSM2rW2mwl-HgXDdHwulflEF3rDanOtGk-GS3c5FauoERcRQ=w3840-h2160-rw)]">
        <form className="w-1/3 h-max p-2 border-2 border-white rounded-3xl bg-cover bg-[url(https://play-lh.googleusercontent.com/h49kBKdleiFFF7vWwCvSM2rW2mwl-HgXDdHwulflEF3rDanOtGk-GS3c5FauoERcRQ=w3840-h2160-rw)]">
          <div className="flex justify-center text-white">
            <p className="text-4xl m-2 font-semibold">Login</p>
          </div>
          <div className="text-2xl p-2 ">
            <input type="email" placeholder="abc@gmail.com" className="placeholder-white w-96 m-2 p-2 pl-4 rounded-full outline-none border-2 border-white bg-transparent text-white" required />
            <input type="password" placeholder="Password" className="placeholder-white w-96 m-2 p-2 pl-4 rounded-full outline-none border-2 border-white bg-transparent text-white" required />
          </div>
          <div className="text-3xl ml-4">
            <button className="bg-white p-2 font-semibold border-none outline-none w-96 rounded-full text-black text-2xl">
              Login
            </button>
          </div>
          <div>
            <p className="m-2 text-center text-white text-lg hover:cursor-pointer"
              onClick={() => updateState.updateState(true)}
            >
              Don't have an account? Register YourSelf!
            </p>
          </div>
        </form>

      </div>
    </>
  )
}

export default Login
