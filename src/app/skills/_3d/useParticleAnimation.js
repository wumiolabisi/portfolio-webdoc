import { useEffect } from 'react';


const useParticleAnimation = (particlesGeometry) => {
    useEffect(() => {
        const animateParticles = () => {
            const positions = particlesGeometry.attributes.position.array;
            const time = Date.now() * 0.001;

            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += Math.sin(time + positions[i]) * 0.01;
                positions[i + 1] += Math.cos(time + positions[i + 1]) * 0.01;
                positions[i + 2] += Math.sin(time + positions[i + 2]) * 0.01;
            }
            particlesGeometry.attributes.position.needsUpdate = true;
        };

        const animate = () => {
            requestAnimationFrame(animate);
            animateParticles();
        };

        animate();
    }, [particlesGeometry]);
};

export default useParticleAnimation;
