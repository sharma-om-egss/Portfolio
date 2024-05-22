import react from "react";
export default function MainBanner(){
    return(
        <>
        <section className="home-banner">
        <div className="banner-video">
            <video autoPlay muted loop>
                <source src="img/v1.mp4" />
            </video>
            <div className="banner2-content" type="video/mp4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner_content">
                                <h1>Well Known App Development Platform</h1>
                                <p>As a leading player in the app development industry,
                                    our focus is on creating cutting-edge gaming apps that not
                                    only entertain but also push the boundaries of technology.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-image text-center">
                                <img src="img/img_04.png" className="img-fluid w-75" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <a href="#scroll-next">
                <div className="container_mouse">
                    <span className="mouse-btn">
                        <span className="mouse-scroll"></span>
                    </span>
                </div>
            </a>
        </div>
    </section>

        </>
    )
}