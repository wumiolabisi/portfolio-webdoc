'use client'
import * as THREE from 'three';
import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const aspectRatio = window.innerWidth / window.innerHeight
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
        scene.background = new THREE.Color(0x21132b);

        renderer.setSize(window.innerWidth, window.innerHeight, true);
        renderer.setPixelRatio(window.devicePixelRatio);



        // Initialisation des particules
        const numParticles = 1000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(numParticles * 3);

        for (let i = 0; i < numParticles * 3; i++) {
            positions[i] = Math.random() * 200 - 100;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
            sizeAttenuation: true,
            transparent: true,
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        camera.position.z = 5;

        function animateParticles() {
            const positions = particlesGeometry.attributes.position.array;
            const time = Date.now() * 0.0001;

            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += Math.sin(time + positions[i]) * 0.01;
                positions[i + 1] += Math.cos(time + positions[i + 1]) * 0.01;
                positions[i + 2] += Math.sin(time + positions[i + 2]) * 0.01;
            }
            particlesGeometry.attributes.position.needsUpdate = true;
        }

        function animate() {
            requestAnimationFrame(animate);
            animateParticles();
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            const width = window.innerWidth;
            const height = window.screen.height;

            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', onWindowResize);

        animate();

        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ParticleBackground;
