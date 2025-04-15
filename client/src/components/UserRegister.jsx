// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserRegister = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
// const navigate = useNavigate();


//   const handleRegister = async (e) => {
//     e.preventDefault();
    
//     // Mock registration logic
//     alert(`Registration successful for ${name}`);
//     navigate('/login');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
//       <div className="w-full max-w-md p-8 transition duration-500 transform bg-white shadow-2xl rounded-xl hover:scale-105">
//         <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Create an Account</h2>
//         <form onSubmit={handleRegister} className="flex flex-col gap-4">
//           <input 
//             type="text" 
//             placeholder="Full Name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             className="p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-green-400" 
//             required 
//           />
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             className="p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400" 
//             required 
//           />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             className="p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400" 
//             required 
//           />
//           <button 
//             type="submit" 
//             className="p-3 text-lg font-semibold text-white transition duration-300 bg-green-500 rounded-lg shadow-md hover:bg-green-600"
//           >
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-700">
//           Already have an account? 
//           <span 
//             className="font-semibold text-blue-600 cursor-pointer hover:underline" 
//             onClick={() => navigate('/login')}
//           > Login</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;
