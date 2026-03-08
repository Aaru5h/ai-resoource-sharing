export default function AdBanner({ slot = "default" }: { slot?: string }) {
    return (
        <div style={{
            width: "100%", maxWidth: 728, margin: "2rem auto",
            padding: "1.5rem 2rem", borderRadius: 10,
            border: "1px dashed var(--border)", background: "rgba(255,255,255,0.02)",
            textAlign: "center",
        }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Advertisement
            </p>
            {/* Google AdSense script will go here */}
            {/* <ins className="adsbygoogle" data-ad-client="ca-pub-XXXX" data-ad-slot={slot} /> */}
        </div>
    );
}
