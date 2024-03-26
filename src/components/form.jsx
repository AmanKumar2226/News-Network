import React from "react";
import '../component-styles/form.css'

export default function Form() {
  //javascript goes here.......
  const toSignUp = () =>{
    document.querySelector('#sign-in-container').style.display='none';
    document.querySelector('#sign-up-container').style.display='block';
    document.querySelector('#heading-form').innerText='Register to get connected with us';
    document.querySelector('#welcome-paragraph').innerText='Hey friend! Enter your details to get registered to us';
    document.querySelector('#btn-sign-in').style.display='block';
    document.querySelector('#btn-sign-up').style.display='none';
  }

  const toSignIn = () =>{
    document.querySelector('#sign-in-container').style.display='block';
    document.querySelector('#sign-up-container').style.display='none';
    document.querySelector('#heading-form').innerText='Sign in to your account';
    document.querySelector('#welcome-paragraph').innerText='To keep connected with us please login with your personal info';
    document.querySelector('#btn-sign-in').style.display='none';
    document.querySelector('#btn-sign-up').style.display='block';
  }


  return (
    <>
      <div class="flex mx-96 my-40  flex-row shadow-2xl">
        <div id="main-container" className="flex flex-row w-full">
          <div id="sign-in-container" class="zsm:mx-auto sm:w-full sm:max-w-sm p-10 w-2/5">
          <form class="space-y-6" action="#" method="POST">
            <h1 className="text-2xl font-bold">Sign-In</h1>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
        <div id="sign-up-container" className="zsm:mx-auto sm:w-full sm:max-w-sm p-10 w-2/5">
                <h2 className="text-2xl font-semibold mb-5">Sign Up</h2>
                <div>
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div class="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="first-name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          
            <div>
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div class="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="last-name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div>
              <label
                for="r-email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="r-email"
                  name="r-email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="r-password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="r-password"
                  name="r-password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="confirm-password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="confirm-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
            </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm w-2/5 p-10  flex justify-center items-center flex-col bg-fuchsia-900">  
          <h2 id="heading-form" class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
          <p id="welcome-paragraph" className="text-white">To keep connected with us please login with your personal info</p>
          <button id="btn-sign-up" onClick={toSignUp} className="bg-sky-900 text-white p-2 mt-5 w-40">Sign-Up</button>
          <button id="btn-sign-in" onClick={toSignIn} className="bg-sky-900 text-white p-2 mt-5 w-40">Sign-In</button>
        </div>   
        </div>
      </div>
    </>
  );
}
