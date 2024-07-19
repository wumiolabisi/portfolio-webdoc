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

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;
        function animate() {
            renderer.render(scene, camera);
        }
        renderer.setAnimationLoop(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
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