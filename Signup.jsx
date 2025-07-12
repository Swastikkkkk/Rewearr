// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { auth, googleProvider, db } from './FirebaseConfig';
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithPopup,
// // } from 'firebase/auth';
// // import { doc, setDoc } from 'firebase/firestore';

// // const Signup = () => {
// //   const navigate = useNavigate();

// //   const [email, setEmail] = useState('');
// //   const [name, setName] = useState('');
// //   const [role, setRole] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleEmailSignup = async (e) => {
// //     e.preventDefault();
// //     setError('');

// //     if (!role) {
// //       setError('⚠️ Please select a role before signing up.');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;

// //       await setDoc(doc(db, 'users', user.uid), {
// //         name,
// //         email,
// //         uid: user.uid,
// //         role,
// //         createdAt: new Date(),
// //       });

// //       // Redirect based on role
// //       navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
// //     } catch (err) {
// //       setError(err.message || 'Signup failed. Try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleGoogleSignup = async () => {
// //     setError('');
// //     try {
// //       const result = await signInWithPopup(auth, googleProvider);
// //       const user = result.user;

// //       let confirmedRole = prompt('Enter your role (admin or user):', 'user');
// //       if (!confirmedRole) {
// //         setError('⚠️ Role is required for Google signup.');
// //         return;
// //       }

// //       confirmedRole = confirmedRole.toLowerCase();
// //       if (confirmedRole !== 'admin' && confirmedRole !== 'user') {
// //         setError('❌ Invalid role. Enter "admin" or "user".');
// //         return;
// //       }

// //       await setDoc(doc(db, 'users', user.uid), {
// //         name: user.displayName,
// //         email: user.email,
// //         uid: user.uid,
// //         role: confirmedRole,
// //         photoURL: user.photoURL || '',
// //         createdAt: new Date(),
// //       }, { merge: true });

// //       navigate(confirmedRole === 'admin' ? '/admin-dashboard' : '/user-dashboard');
// //     } catch (err) {
// //       setError(err.message || 'Google signup failed.');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-[#f0f4f3] px-4">
// //       <div className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/30">
// //         <h2 className="text-3xl font-semibold text-[#1a3d35] mb-6 text-center">Join Rewear</h2>

// //         <form onSubmit={handleEmailSignup} className="space-y-4">
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           <select
// //             value={role}
// //             onChange={(e) => setRole(e.target.value)}
// //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
// //             required
// //           >
// //             <option value="">Select Role</option>
// //             <option value="user">User</option>
// //             <option value="admin">Admin</option>
// //           </select>

// //           {error && (
// //             <p className="text-sm text-red-600 text-center bg-red-100 py-2 rounded">{error}</p>
// //           )}

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full py-3 bg-[#447d68] text-white rounded-xl hover:bg-[#366755] transition disabled:opacity-50"
// //           >
// //             {loading ? 'Creating Account...' : 'Sign Up'}
// //           </button>
// //         </form>

// //         <div className="mt-6 text-center text-sm text-[#1a3d35]">— or sign up with —</div>

// //         <button
// //           onClick={handleGoogleSignup}
// //           className="mt-4 w-full flex items-center justify-center gap-3 bg-white py-3 border border-gray-300 rounded-xl hover:shadow-md transition"
// //         >
// //           <img
// //             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
// //             alt="Google"
// //             className="w-5 h-5"
// //           />
// //           <span className="text-[#1a3d35] font-medium">Sign up with Google</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, googleProvider, db } from './FirebaseConfig';
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
// } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';

// const Signup = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleEmailSignup = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!role) {
//       setError('⚠️ Please select a role before signing up.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await setDoc(doc(db, 'users', user.uid), {
//         name,
//         email,
//         uid: user.uid,
//         role,
//         createdAt: new Date(),
//       });

//       // Redirect based on role
//       navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
//     } catch (err) {
//       setError(err.message || 'Signup failed. Try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     setError('');
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       let confirmedRole = prompt('Enter your role (admin or user):', 'user');
//       if (!confirmedRole) {
//         setError('⚠️ Role is required for Google signup.');
//         return;
//       }

//       confirmedRole = confirmedRole.toLowerCase();
//       if (confirmedRole !== 'admin' && confirmedRole !== 'user') {
//         setError('❌ Invalid role. Enter "admin" or "user".');
//         return;
//       }

//       await setDoc(doc(db, 'users', user.uid), {
//         name: user.displayName,
//         email: user.email,
//         uid: user.uid,
//         role: confirmedRole,
//         photoURL: user.photoURL || '',
//         createdAt: new Date(),
//       }, { merge: true });

//       navigate(confirmedRole === 'admin' ? '/admin-dashboard' : '/user-dashboard');
//     } catch (err) {
//       setError(err.message || 'Google signup failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f0f4f3] px-4">
//       <div className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/30">
//         <h2 className="text-3xl font-semibold text-[#1a3d35] mb-6 text-center">Join Rewear</h2>

//         <form onSubmit={handleEmailSignup} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>

//           {error && (
//             <p className="text-sm text-red-600 text-center bg-red-100 py-2 rounded">{error}</p>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-[#447d68] text-white rounded-xl hover:bg-[#366755] transition disabled:opacity-50"
//           >
//             {loading ? 'Creating Account...' : 'Sign Up'}
//           </button>
//         </form>

//         <div className="mt-6 text-center text-sm text-[#1a3d35]">— or sign up with —</div>

//         <button
//           onClick={handleGoogleSignup}
//           className="mt-4 w-full flex items-center justify-center gap-3 bg-white py-3 border border-gray-300 rounded-xl hover:shadow-md transition"
//         >
//           <img
//             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//             alt="Google"
//             className="w-5 h-5"
//           />
//           <span className="text-[#1a3d35] font-medium">Sign up with Google</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, db } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './Particles.css'; // keep this for animated circles bg

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!role) {
      setError('⚠️ Please select a role before signing up.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        uid: user.uid,
        role,
        createdAt: new Date(),
      });

      navigate(role === 'admin' ? '/admin-dashboard' : '/user');
    } catch (err) {
      setError(err.message || 'Signup failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      let confirmedRole = prompt('Enter your role (admin or user):', 'user');
      if (!confirmedRole) {
        setError('⚠️ Role is required for Google signup.');
        return;
      }

      confirmedRole = confirmedRole.toLowerCase();
      if (!['admin', 'user'].includes(confirmedRole)) {
        setError('❌ Invalid role. Enter "admin" or "user".');
        return;
      }

      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        role: confirmedRole,
        photoURL: user.photoURL || '',
        createdAt: new Date(),
      }, { merge: true });

      navigate(confirmedRole === 'admin' ? '/admin-dashboard' : '/user');
    } catch (err) {
      setError(err.message || 'Google signup failed.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#e6f4f1] overflow-hidden">
      {/* Particles background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>

      {/* Signup Card */}
      <div className="relative z-10 bg-white/50 backdrop-blur-2xl border border-white/20 p-10 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-md w-full hover:shadow-[0_0_30px_rgba(68,125,104,0.4)] transition-all duration-300">
        <h2 className="text-4xl font-bold text-center text-[#1a3d35] mb-8">
           Join <span className="text-[#447d68]">ReWear</span>
        </h2>

        <form onSubmit={handleEmailSignup} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#447d68] transition shadow-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#447d68] transition shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#447d68] transition shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#447d68] transition shadow-sm"
            required
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {error && (
            <p className="text-sm text-red-700 text-center bg-red-100 py-2 px-3 rounded-lg">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#447d68] text-white rounded-2xl font-medium hover:bg-[#366755] transition disabled:opacity-60"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#1a3d35]">— or sign up with —</div>

        <button
          onClick={handleGoogleSignup}
          className="mt-4 w-full flex items-center justify-center gap-3 bg-white py-3 border border-gray-300 rounded-2xl hover:shadow-lg transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-[#1a3d35] font-medium">Sign up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
