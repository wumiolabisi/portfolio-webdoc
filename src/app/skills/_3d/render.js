import resizeRendererToDisplaySize from "./resize";

export default function render(renderer) {

    /**
     * Correction for the bluriness by default
     * By resizing if needed the canvas' resolution
     */

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }


    renderer.render(scene, camera);
    requestAnimationFrame(render);

}
