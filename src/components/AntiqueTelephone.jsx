// import React, { useEffect, useRef, useState, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import * as THREE from "three";

// const Model = () => {
//   const { scene } = useGLTF("/portfolio_assets/antique_telephone.glb");
//   const groupRef = useRef();
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   // Center and prepare model
//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = new THREE.Vector3();
//     box.getCenter(center);
//     scene.position.sub(center);

//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });
//   }, [scene]);

//   // Track only mouse movement
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMouse({
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: -(e.clientY / window.innerHeight) * 2 + 1,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Rotate based on cursor (only slightly)
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = THREE.MathUtils.lerp(
//         groupRef.current.rotation.y,
//         mouse.x * 0.3, // subtle rotation
//         0.05
//       );
//       groupRef.current.rotation.x = THREE.MathUtils.lerp(
//         groupRef.current.rotation.x,
//         mouse.y * 0.15,
//         0.05
//       );
//     }
//   });

//   return (
//     <group
//       ref={groupRef}
//       scale={680}
//       position={[0, 0, 0]}
//       rotation={[0, Math.PI, 0]} // 👈 Face directly forward
//     >
//       <primitive object={scene} />
//     </group>
//   );
// };

// const AntiqueTelephone = () => {
//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 0, 20], fov: 50 }} // 👈 Directly in front
//       style={{ width: "500px", height: "500px" }}
//     >
//       <ambientLight intensity={1.2} />
//       <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
//       <spotLight
//         position={[0, 5, 10]}
//         angle={0.3}
//         intensity={1.5}
//         penumbra={1}
//         castShadow
//       />

//       <Suspense
//         fallback={
//           <Html>
//             <p style={{ color: "white" }}>Loading model...</p>
//           </Html>
//         }
//       >
//         <Model />
//       </Suspense>

//       {/* OrbitControls disabled */}
//       <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
//     </Canvas>
//   );
// };

// export default AntiqueTelephone;





import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("/portfolio_assets/antique_telephone.glb");
  const groupRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Center the model and enable shadows
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Smooth mouse tracking with rAF
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

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Animate rotation based on cursor
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.15,
        0.05
      );
    }
  });

  return (
    <group
      ref={groupRef}
      scale={680}
      position={[0, 0, 0]}
      rotation={[0, Math.PI, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};

const AntiqueTelephone = () => {
  return (
    <Canvas
      shadows
      frameloop="always" // ✅ Keeps animation running
      camera={{ position: [0, 0, 20], fov: 50 }}
      style={{ width: "500px", height: "500px" }}
    >
      {/* Lights */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
      <spotLight
        position={[0, 5, 10]}
        angle={0.3}
        intensity={1.5}
        penumbra={1}
        castShadow
      />

      {/* 3D Model */}
      <Suspense
        fallback={
          <Html center>
            <p style={{ color: "white" }}>Loading model...</p>
          </Html>
        }
      >
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default AntiqueTelephone;
