export default function Video({ src, replacementImg, height }) {
    return (
        <div className={"video-container " + height}>
            <video className="video-content rounded-lg" autoPlay playsInline loop muted controls poster={replacementImg}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}