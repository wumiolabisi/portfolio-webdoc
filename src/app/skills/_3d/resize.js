/**
 * Canvas elements have 2 sizes :
 * One is the size the canvas is displayed on the page (setted in CSS)
 * The other one is the number of pixels in the canvas itself (the resolution aka drawing buffer size)
 */
export default function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}