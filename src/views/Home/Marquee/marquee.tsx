import './marquee.css'
function Marquee() {

    return (
        <div>
            <p className="text-[23px] text-center font-semibold mb-6">
                Trusted by 1,000+ Brands as their preferred Digital Marketing agency in
                Mumbai. Chosen for One Reason: Results.
            </p>

            <div className="marquee">
                <div className="marquee-track">
                    <img src="/HDB.png" alt="Logo 1" />
                    <img src="/HDB.png" alt="Logo 1" />
                    <img src="/HDB.png" alt="Logo 1" />
                    <img src="/HDB.png" alt="Logo 1" />

                    {/* Duplicate logos for seamless infinite loop */}
                    <img src="/HDB.png" alt="Logo 1" />
                    <img src="/HDB.png" alt="Logo 1" />
                    <img src="/HDB.png" alt="Logo 1" />
                    <img src="/HDB.png" alt="Logo 1" />
                </div>
            </div>
        </div>
    );
}

export default Marquee