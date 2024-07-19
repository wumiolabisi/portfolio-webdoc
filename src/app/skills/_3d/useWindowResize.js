'use client'

const useWindowResize = (renderer, camera) => {
    useEffect(() => {
        const onWindowResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', onWindowResize);
        onWindowResize(); // Initial call to set size correctly

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, [renderer, camera]);
};

export default useWindowResize;
