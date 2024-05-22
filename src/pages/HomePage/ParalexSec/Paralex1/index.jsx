import React from 'react'

export default function ParalexOne() {
  return (
    <>
     <div className="parallax-image panel2" id="scroll-next" style={{"position": "relative"}}>
            <img src="img/send_desktop_layer_01.webp" alt="" />
            <div className="panel2-content panels">
                <h2>HIRE<br/> <span>APPLICATION</span> <br/>DEVELOPERS</h2>
                <div className="d-lg-flex d-md-flex d-inherit mt-4">
                    <button>Learn More</button>
                    <p className="text-white ms-lg-4 ms-md-4 ms-0 para-mini"> And Do Gaming App Development</p>
                </div>
                <p className="mt-3">As a leading player in the app development industry, our focus is on creating
                    cutting-edge gaming apps that not only entertain but also push the boundaries of technology.
                </p>
            </div>

        </div>
    </>
  )
}
