import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
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

  // Cursor movement animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Apply rotation smoothly
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
    <motion.group
      ref={groupRef}
      scale={0.9}
      position={[0, -3.6, 0]}
    >
      <primitive object={scene} />
    </motion.group>
  );
};

const SciFiComp = () => {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 45 }} >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <spotLight position={[0, 5, 10]} angle={0.3} intensity={2} penumbra={1} castShadow />
      <Model />
    </Canvas>
  );
};

export default SciFiComp;



// import React, { useRef, useEffect, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// const Model = () => {
//   const { scene } = useGLTF('/portfolio_assets/sci-fi_computer.glb');
//   const modelRef = useRef();

//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   // Track mouse movement
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const x = (event.clientX / window.innerWidth) * 2 - 1;
//       const y = -(event.clientY / window.innerHeight) * 2 + 1;
//       setMouse({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Animate rotation slightly based on mouse
//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += (mouse.x * 0.5 - modelRef.current.rotation.y) * 0.05;
//       modelRef.current.rotation.x += (mouse.y * 0.2 - modelRef.current.rotation.x) * 0.05;
//     }
//   });

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={0.9}
//       position={[0, -2, 0]}
//       rotation={[0, 0, 0]} // Remove static rotation for interactivity
//     />
//   );
// };

// const SciFiComp = () => {
//   return (
//     <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} intensity={1.5} />
//       <spotLight position={[0, 5, 10]} angle={0.3} intensity={2} penumbra={1} castShadow />
      
//       {/* Replace direct primitive with animated Model component */}
//       <Model />

//       <OrbitControls enableZoom={false} enableRotate={false} />
//     </Canvas>
//   );
// };

// export default SciFiComp;

// import React, { useRef, useEffect, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { useSpring, a } from '@react-spring/three';

// const Model = () => {
//   const { scene } = useGLTF('/portfolio_assets/sci-fi_computer.glb');
//   const modelRef = useRef();
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const x = (event.clientX / window.innerWidth) * 2 - 1;
//       const y = -(event.clientY / window.innerHeight) * 2 + 1;
//       setMouse({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += (mouse.x * 0.5 - modelRef.current.rotation.y) * 0.05;
//       modelRef.current.rotation.x += (mouse.y * 0.2 - modelRef.current.rotation.x) * 0.05;
//     }
//   });

//   const spring = useSpring({
//     scale: 0.9,
//     opacity: 1,
//     from: { scale: 0.5, opacity: 0 },
//     config: { mass: 1, tension: 120, friction: 14 },
//     delay: 500,
//   });

//   return (
//     <a.primitive
//       ref={modelRef}
//       object={scene}
//       scale={spring.scale}
//       position={[0, -2, 0]}
//       rotation={[0, 0, 0]}
//     />
//   );
// };

// const SciFiComp = () => {
//   return (
//     <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} intensity={1.5} />
//       <spotLight position={[0, 5, 10]} angle={0.3} intensity={2} penumbra={1} castShadow />
//       <Model />
//       <OrbitControls enableZoom={false} enableRotate={false} />
//     </Canvas>
//   );
// };

// export default SciFiComp;

// import React, { useRef, useEffect, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { useSpring, a } from '@react-spring/three';

// const Model = () => {
//   const { scene } = useGLTF('/portfolio_assets/sci-fi_computer.glb');
//   const modelRef = useRef();
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const x = (event.clientX / window.innerWidth) * 2 - 1;
//       const y = -(event.clientY / window.innerHeight) * 2 + 1;
//       setMouse({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += (mouse.x * 0.5 - modelRef.current.rotation.y) * 0.05;
//       modelRef.current.rotation.x += (mouse.y * 0.2 - modelRef.current.rotation.x) * 0.05;
//     }
//   });

//   const spring = useSpring({
//     scale: 0.9,
//     from: { scale: 0.5 },
//     config: { mass: 1, tension: 120, friction: 14 },
//     delay: 500,
//   });

//   return (
//     <a.primitive
//       ref={modelRef}
//       object={scene}
//       scale={spring.scale}
//       position={[0, -2, 0]}
//       rotation={[0, 0, 0]}
//     />
//   );
// };

// const SciFiComp = () => {
//   return (
//     <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} intensity={1.5} />
//       <spotLight position={[0, 5, 10]} angle={0.3} intensity={2} penumbra={1} castShadow />
//       <Model />
//     </Canvas>
//   );
// };

// export default SciFiComp;
