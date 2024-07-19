'use client'
import { useEffect } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


export default function Skills() {
    useEffect(() => {
        const aspectRatio = window.innerWidth / window.innerHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
        /**
         * Set renderer and where the scene will take place in my HTML page
        */
        const canvas = document.querySelector('#myCanva');
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);
        /**
         * Set camera movement
         */
        const orbit = new OrbitControls(camera, renderer.domElement);
        orbit.update();
        orbit.enableZoom = false;
        orbit.enableDamping = true;


        /**
         * Particules - Définition
         */
        const numParticles = 1000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(numParticles * 3);

        // Initialiser les positions des particules
        for (let i = 0; i < numParticles * 3; i++) {
            positions[i] = Math.random() * 200 - 100;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0xffffff, // Couleur des particules
            size: 0.1,       // Taille des particules
            sizeAttenuation: true, // La taille des particules change en fonction de la distance à la caméra
            transparent: true,
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);

        scene.add(particles)



        camera.position.z = 5;
        function animate() {
            renderer.render(scene, camera);
        }
        renderer.setAnimationLoop(animate);

        return () => {
            renderer.dispose();
        };
    }, []);



    return (
        <div>
            <canvas id="myCanva"></canvas>
        </div>
    )
}