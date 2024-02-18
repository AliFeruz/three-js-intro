import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import bg2 from '../assets/bg-2.jpg'

const ThreeAnimation = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const loader = new THREE.TextureLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(14, 8, 15, 9);
    const material = new THREE.MeshBasicMaterial({
      map: loader.load(bg2)
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 5;

    const count = geometry.attributes.position.count;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();
      for (let i = 0; i < count; i++) {
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);

        const anime1 = 0.25 * Math.sin(x + time * 0.7);
        const anime2 = 0.35 * Math.sin(x + 1 + time * 0.7);
        const anime3 = 0.1 * Math.sin(y + 15 + time * 0.7);

        geometry.attributes.position.setZ(i, anime1 + anime2 + anime3);
      }
      geometry.computeVertexNormals();
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeAnimation;
