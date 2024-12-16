import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import app from "../../firebase";
import { Link } from "react-router-dom";

const LoginPage = () => {
   const auth = getAuth(app);

   const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      // Handle form submission logic
      signInWithEmailAndPassword(auth, email, password)
         .then((res) => {
            console.log(res);
            alert("Login Successful.");
         })

         .catch((res) => {
            console.log(res);
            alert("Error");
         });
   };

   return (
      <div className="flex items-center justify-center min-h-[100%] ">
         <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
               {/* Email Field */}
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     placeholder="Enter your email"
                  />
               </div>
               {/* Password Field */}
               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                     Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     required
                     className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     placeholder="Enter your password"
                  />
               </div>
               {/* Submit Button */}
               <div>
                  <button
                     type="submit"
                     className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                     Login
                  </button>
                  <span>
                     New user?{" "}
                     <Link className="text-blue-500" to="/signup">
                        signup now
                     </Link>
                  </span>
               </div>
            </form>
         </div>
      </div>
   );
};

export default LoginPage;
