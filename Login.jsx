
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// // import { doc, getDoc, setDoc } from 'firebase/firestore';
// // import { auth, db, googleProvider } from './FirebaseConfig';

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   // Email login handler
// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       const uid = userCredential.user.uid;
// //       const userRef = doc(db, 'users', uid);
// //       const userSnap = await getDoc(userRef);

// //       if (userSnap.exists()) {
// //         const role = userSnap.data().role;
// //         const redirectPath = localStorage.getItem('postLoginRedirect');
// //         localStorage.removeItem('postLoginRedirect');
// //         if (role === 'user') {
// //           navigate(redirectPath || '/user');
// //         } else if (role === 'admin') {
// //           navigate('/admin');
// //         } else {
// //           setError('Invalid role assigned.');
// //         }
// //       } else {
// //         setError('No user data found.');
// //       }
// //     } catch (err) {
// //       setError(err.message || 'Login failed.');
// //     }
// //   };

// //   // Google login handler
// //   const handleGoogleLogin = async () => {
// //     setError('');
// //     try {
// //       const result = await signInWithPopup(auth, googleProvider);
// //       const user = result.user;

// //       const userRef = doc(db, 'users', user.uid);
// //       const userSnap = await getDoc(userRef);

// //       const redirectPath = localStorage.getItem('postLoginRedirect');
// //       localStorage.removeItem('postLoginRedirect');

// //       if (!userSnap.exists()) {
// //         const role = prompt('Enter your role (user/admin):', 'user');
// //         if (!role) {
// //           setError('Role is required.');
// //           return;
// //         }

// //         await setDoc(userRef, {
// //           name: user.displayName,
// //           email: user.email,
// //           role: role.toLowerCase(),
// //           uid: user.uid,
// //           photoURL: user.photoURL || '',
// //           createdAt: new Date(),
// //         });

// //         navigate(role === 'admin' ? '/admin' : redirectPath || '/user');
// //       } else {
// //         const role = userSnap.data().role;
// //         navigate(role === 'admin' ? '/admin' : redirectPath || '/user');
// //       }
// //     } catch (err) {
// //       setError(err.message || 'Google login failed.');
// //     }
// //   };

// //   return (
// //     <div
// //       className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
// //       style={{
// //         backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1470&q=80')`,
// //       }}
// //     >
// //       <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

// //       <div className="relative z-10 bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/20">
// //         <h2 className="text-3xl font-semibold text-center text-white mb-6">Welcome Back 👋</h2>

// //         <form onSubmit={handleLogin} className="space-y-4">
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] bg-white placeholder-gray-500"
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] bg-white placeholder-gray-500"
// //             required
// //           />

// //           {error && (
// //             <p className="text-sm text-red-200 bg-red-500/30 px-3 py-2 rounded text-center">
// //               {error}
// //             </p>
// //           )}

// //           <button
// //             type="submit"
// //             className="w-full py-3 bg-[#447d68] text-white rounded-xl font-medium hover:bg-[#366755] transition"
// //           >
// //             Log In
// //           </button>
// //         </form>

// //         <div className="my-4 text-center text-white text-sm">— or —</div>

// //         <button
// //           onClick={handleGoogleLogin}
// //           className="w-full flex items-center justify-center gap-3 bg-white py-3 border border-gray-300 rounded-xl hover:shadow-md transition"
// //         >
// //           <img
// //             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
// //             alt="Google"
// //             className="w-5 h-5"
// //           />
// //           <span className="text-[#1a3d35] font-medium">Sign in with Google</span>
// //         </button>

// //         <p className="mt-6 text-center text-white text-sm">
// //           Don’t have an account?{' '}
// //           <span
// //             className="underline cursor-pointer"
// //             onClick={() => navigate('/signup')}
// //           >
// //             Sign Up
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { auth, db, googleProvider } from './FirebaseConfig';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const uid = userCredential.user.uid;
//       const userRef = doc(db, 'users', uid);
//       const userSnap = await getDoc(userRef);

//       const redirectPath = localStorage.getItem('postLoginRedirect');
//       localStorage.removeItem('postLoginRedirect');

//       if (userSnap.exists()) {
//         const role = userSnap.data().role;
//         if (role === 'user') {
//           navigate(redirectPath || '/user');
//         } else if (role === 'admin') {
//           navigate('/admin');
//         } else {
//           setError('Invalid role assigned.');
//         }
//       } else {
//         setError('No user data found.');
//       }
//     } catch (err) {
//       setError(err.message || 'Login failed.');
//     }
//   };

//   const handleGoogleLogin = async () => {
//     setError('');
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       const userRef = doc(db, 'users', user.uid);
//       const userSnap = await getDoc(userRef);

//       const redirectPath = localStorage.getItem('postLoginRedirect');
//       localStorage.removeItem('postLoginRedirect');

//       if (!userSnap.exists()) {
//         const role = prompt('Enter your role (user/admin):', 'user');
//         if (!role) {
//           setError('Role is required.');
//           return;
//         }

//         await setDoc(userRef, {
//           name: user.displayName,
//           email: user.email,
//           role: role.toLowerCase(),
//           uid: user.uid,
//           photoURL: user.photoURL || '',
//           createdAt: new Date(),
//         });

//         navigate(role === 'admin' ? '/admin' : redirectPath || '/user');
//       } else {
//         const role = userSnap.data().role;
//         navigate(role === 'admin' ? '/admin' : redirectPath || '/user');
//       }
//     } catch (err) {
//       setError(err.message || 'Google login failed.');
//     }
//   };

//   return (
//     <div
//       className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1533113354174-449bb6f38c85?auto=format&fit=crop&w=1500&q=80')",
//       }}
//     >
//       {/* Soft gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#ffffffcc] to-[#e6f4f1cc] backdrop-blur-xl z-0" />

//       {/* Login Card */}
//       <div className="relative z-10 bg-white/50 border border-white/30 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-md w-full transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
//         <h2 className="text-3xl font-bold text-center text-[#1a3d35] mb-6 tracking-wide">
//           👋 Welcome Back to <span className="text-[#447d68]">ReWear</span>
//         </h2>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] bg-white placeholder-gray-500 transition"
//             required
//           />
//           <input
//             type="password"
//             placeholder="••••••••"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] bg-white placeholder-gray-500 transition"
//             required
//           />

//           {error && (
//             <p className="text-sm text-red-600 bg-red-100 px-4 py-2 rounded-lg text-center">
//               {error}
//             </p>
//           )}

//           <button
//             type="submit"
//             className="w-full py-3 bg-[#447d68] text-white rounded-xl font-semibold hover:bg-[#366755] transition-all"
//           >
//             Log In
//           </button>
//         </form>

//         <div className="my-4 text-center text-sm text-[#1a3d35]">— or —</div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full flex items-center justify-center gap-3 bg-white py-3 border border-gray-300 rounded-xl hover:shadow-md transition-all"
//         >
//           <img
//             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//             alt="Google"
//             className="w-5 h-5"
//           />
//           <span className="text-[#1a3d35] font-medium">Sign in with Google</span>
//         </button>

//         <p className="mt-6 text-center text-sm text-[#1a3d35]">
//           Don’t have an account?{' '}
//           <span
//             className="underline cursor-pointer hover:text-[#366755]"
//             onClick={() => navigate('/signup')}
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from './FirebaseConfig';
import './Particles.css'; // <-- Add this CSS file (see below)

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);

      const redirectPath = localStorage.getItem('postLoginRedirect');
      localStorage.removeItem('postLoginRedirect');

      if (userSnap.exists()) {
        const role = userSnap.data().role;
        navigate(role === 'admin' ? '/admin' : redirectPath || '/user');
      } else {
        setError('No user data found.');
      }
    } catch (err) {
      setError(err.message || 'Login failed.');
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      const redirectPath = localStorage.getItem('postLoginRedirect');
      localStorage.removeItem('postLoginRedirect');

      if (!userSnap.exists()) {
        const role = prompt('Enter your role (user/admin):', 'user');
        if (!role) {
          setError('Role is required.');
          return;
        }

        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          role: role.toLowerCase(),
          uid: user.uid,
          photoURL: user.photoURL || '',
          createdAt: new Date(),
        });

        navigate(role === 'admin' ? '/admin' : redirectPath || '/user');
      } else {
        const role = userSnap.data().role;
        navigate(role === 'admin' ? '/admin' : redirectPath || '/user');
      }
    } catch (err) {
      setError(err.message || 'Google login failed.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#e6f4f1]">
      {/* Glowy background particles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>

      {/* Login card */}
      <div className="relative z-10 bg-white/60 border border-white/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-md w-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all">
        <h2 className="text-3xl font-bold text-center text-[#1a3d35] mb-6 tracking-wide">
          👋 Welcome Back to <span className="text-[#447d68]">ReWear</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] bg-white placeholder-gray-500 transition"
            required
          />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] bg-white placeholder-gray-500 transition"
            required
          />

          {error && (
            <p className="text-sm text-red-600 bg-red-100 px-4 py-2 rounded-lg text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#447d68] text-white rounded-xl font-semibold hover:bg-[#366755] transition-all"
          >
            Log In
          </button>
        </form>

        <div className="my-4 text-center text-sm text-[#1a3d35]">— or —</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white py-3 border border-gray-300 rounded-xl hover:shadow-md transition-all"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-[#1a3d35] font-medium">Sign in with Google</span>
        </button>

        <p className="mt-6 text-center text-sm text-[#1a3d35]">
          Don’t have an account?{' '}
          <span
            className="underline cursor-pointer hover:text-[#366755]"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
