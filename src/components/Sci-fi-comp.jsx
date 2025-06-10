// import React, { useEffect, useRef, useState, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF ,Html} from '@react-three/drei';
// import { motion } from 'framer-motion-3d';
// import * as THREE from 'three';

// const Model = () => {
//   const { scene } = useGLTF('/portfolio_assets/sci-fi_computer.glb');
//   const groupRef = useRef();
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   // Center the model
//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = new THREE.Vector3();
//     box.getCenter(center);
//     scene.position.sub(center);
//   }, [scene]);

//   // Cursor movement animation
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth) * 2 - 1;
//       const y = -(e.clientY / window.innerHeight) * 2 + 1;
//       setMouse({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Apply rotation smoothly
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = THREE.MathUtils.lerp(
//         groupRef.current.rotation.y,
//         mouse.x * 0.5,
//         0.05
//       );
//       groupRef.current.rotation.x = THREE.MathUtils.lerp(
//         groupRef.current.rotation.x,
//         mouse.y * 0.3,
//         0.05    
//       );
//     }
//   });

//   return (
//     <motion.group
//       ref={groupRef}
//       scale={0.7}
//       position={[0, -2, 0]}
//     >
//       <primitive object={scene} />
//     </motion.group>
//   );
// };

// const SciFiComp = () => {
//   return (
//     <Canvas camera={{ position: [0, 2, 8], fov: 45 }} >
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} intensity={1.5} />
//       <spotLight position={[0, 5, 10]} angle={0.3} intensity={2} penumbra={1} castShadow />
     
//        <Suspense
//               fallback={
//                 <Html>
//                   <p style={{ color: "white" }}>Loading model...</p>
//                 </Html>
//               }
//             >
//               <Model />
//             </Suspense>
//     </Canvas>
//   );
// };

// export default SciFiComp;




// import React, { useEffect, useRef, useState, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF, Html } from '@react-three/drei';
// import { motion } from 'framer-motion-3d';
// import * as THREE from 'three';

// const Model = () => {
//   const { scene } = useGLTF('/portfolio_assets/sci-fi_computer.glb');
//   const groupRef = useRef();
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   // Center the model
//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = new THREE.Vector3();
//     box.getCenter(center);
//     scene.position.sub(center);
//   }, [scene]);

//   // Throttled mouse movement using requestAnimationFrame
//   useEffect(() => {
//     let animationFrameId;

//     const handleMouseMove = (e) => {
//       if (animationFrameId) cancelAnimationFrame(animationFrameId);
//       animationFrameId = requestAnimationFrame(() => {
//         const x = (e.clientX / window.innerWidth) * 2 - 1;
//         const y = -(e.clientY / window.innerHeight) * 2 + 1;
//         setMouse({ x, y });
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   // Apply smooth rotation based on mouse
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = THREE.MathUtils.lerp(
//         groupRef.current.rotation.y,
//         mouse.x * 0.5,
//         0.05
//       );
//       groupRef.current.rotation.x = THREE.MathUtils.lerp(
//         groupRef.current.rotation.x,
//         mouse.y * 0.3,
//         0.05
//       );
//     }
//   });

//   return (
//     <motion.group ref={groupRef} scale={0.7} position={[0, -2, 0]}>
//       <primitive object={scene} />
//     </motion.group>
//   );
// };

// const SciFiComp = () => {
//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 1.5]}
//       camera={{ position: [0, 2, 8], fov: 45 }}
//     >
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} intensity={1.5} />
//       <spotLight
//         position={[0, 5, 10]}
//         angle={0.3}
//         intensity={2}
//         penumbra={1}
//         castShadow
//       />

//       <Suspense
//         fallback={
//           <Html center>
//             <p style={{ color: 'white', fontSize: '1rem' }}>Loading model...</p>
//           </Html>
//         }
//       >
//         <Model />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default SciFiComp;























import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

const Model = () => {
  const { scene } = useGLTF('/portfolio_assets/sci-fi_computer.glb');
  const groupRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Center the model
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  // Throttle mouse movement using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        setMouse({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Apply smooth rotation based on mouse
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.5,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.3,
        0.05
      );
    }
  });

  return (
    <motion.group ref={groupRef} scale={0.7} position={[0, -2, 0]}>
      <primitive object={scene} />
    </motion.group>
  );
};

const SciFiComp = () => {
  return (
    <Canvas
      frameloop="always" // ✅ animation works continuously
      dpr={[1, 1.5]}      // ✅ optimized for retina vs normal screens
      camera={{ position: [0, 2, 8], fov: 45 }}
    >
      {/* Lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <spotLight
        position={[0, 5, 10]}
        angle={0.3}
        intensity={2}
        penumbra={1}
        castShadow
      />

      {/* 3D Model with loading fallback */}
      <Suspense
        fallback={
          <Html center>
            <p style={{ color: 'white', fontSize: '1rem' }}>Loading model...</p>
          </Html>
        }
      >
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default SciFiComp;
