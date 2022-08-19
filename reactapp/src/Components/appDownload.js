import React from "react";
import downloadImg from "./Images/cardmapr-nl-5x7Zl8QXFvg-unsplash.jpg"
export default function AppSection(){
    return(
        <>
        <div className="appDownload">
            <div className="text-area" data-aos="fade-up">
                <h1 className="text-center">Get Things Done. By A Scan.</h1>
                <p>Pay for goods and services by scanning QR Codes,
                    or using your Facial Recognition and Biometrics
                </p>
                    <h3 className="text-center">Companies That Accept our Services:</h3>
                    <br></br>
                <div className="companies">
                    <i class="fa-brands fa-airbnb"></i>
                    <i class="fa-brands fa-apple"></i>
                    <i class="fa-brands fa-windows"></i>
                    <i class="fa-brands fa-amazon"></i>
                    <i class="fa-brands fa-ebay"></i>
                    <i class="fa-brands fa-fedex"></i>
                    <i class="fa-brands fa-google"></i>
                </div>
                <br></br>
                <br></br>
                 <a className="btn">DOWNLOAD NOW</a>
            </div>
            <div className="img-area">
                <img src={downloadImg}></img>
            </div>
        </div>
        </>
    )
}