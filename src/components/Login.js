import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <section className="h-screen">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="flex justify-center items-center grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <i className="text-[180px] lg:text-[260px] mx-3 text-slate-500 bi bi-person-circle"></i>
      </div>
      <div className="border rounded-md border-red-500 p-5 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>
          <div className="my-4 flex flex-row items-center justify-center lg:justify-start">
            <p className="text-lg mb-0 mr-4">Login to account</p>
           
          </div>

          
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
            />
          </div>

          
          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <a href="#!" className="text-gray-800">Forgot password?</a>
          </div>

          <div className="text-center lg:text-left">
            <Link to={'/instruction1'}><button
              type="button"
              className="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button></Link>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link
                to='/signup'
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
        </section>
    </div>
  )
}

export default Login