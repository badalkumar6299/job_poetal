// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

  
//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     // Mock authentication logic
  
//     if (email === 'test@example.com' && password === 'password') {
//       alert('Login successful');
//       navigate('/dashboard');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="w-full max-w-md p-8 transition duration-500 transform bg-white shadow-2xl rounded-xl hover:scale-105">
//         <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">User Login</h2>
//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             className="p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400" 
//             required 
//           />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             className="p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400" 
//             required 
//           />
//           <button 
//             type="submit" 
//             className="p-3 text-lg font-semibold text-white transition duration-300 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-700">
//           Don't have an account? 
//           <span 
//             className="font-semibold text-indigo-600 cursor-pointer hover:underline" 
//             onClick={() => navigate('/register')}
//           > Register</span>
//         </p>
//         <div className="flex justify-center mt-6">
//         <span 
//             className="font-semibold text-indigo-600 cursor-pointer hover:underline" 
//             onClick={() => navigate('/')}
//           > Back</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
