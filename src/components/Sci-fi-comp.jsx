import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';



const SciFiComp = () => {
  const { scene } = useGLTF('/portfolio_assets/sci-fi_computer.glb');

  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
      {/* Ambient light for soft overall lighting */}
      <ambientLight intensity={0.8} />
      
      {/* Directional light for shadows and highlights */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      
      {/* Spotlight for more dramatic lighting */}
      <spotLight position={[0, 5, 10]} angle={0.3} intensity={2} penumbra={1} castShadow />
      
      {/* Position and scale your model properly */}
      <primitive object={scene} scale={0.9} position={[0, -2, 0]} rotation={[-9.6, -110, 91.1]} />

      {/* Enable OrbitControls for interaction */}
      <OrbitControls enableZoom={false} />
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
