import React from "react";
import img1 from "./Images/img1.jpg"
import img2 from "./Images/img2.jpg"
import img3 from "./Images/img3.jpg"
import img4 from "./Images/img4.jpg"
import img5 from "./Images/img5.jpg"

export default function ImageShow(){
    return(
        <div className="img-show">
            <div className="img-show-header">
                <h1 className="text-center">Why Us?</h1>
                <p className="text-center">Find Out Why Everybody is switching to our services.</p>
            </div>
            <div className="img-slides">
                <div className="img-container main-img">
                    <img src={img1}></img>
                    <div className="img-txt">
                        <h1>Light-Speed Payments.</h1>
                        <p>With a scan from your phone,or with your biometrics,
                            make payments with your card at the fastest speeds possible.
                        </p>
                    </div>
                </div>
               <div className="img-grid">
                <div className="img-container">
                        <img src={img2}></img>
                        <div className="img-txt">
                            <h1>Buy Stocks, and Crypto.</h1>
                            <p>Use Your Card to buy Stocks,and Other Currencies, and yes, you
                                can send it to anyone with the required wallets!
                            </p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={img3}></img>
                        <div className="img-txt">
                            <h1>Transfer To Your Wallets</h1>
                            <p>Move Money From Your Card to your local and international
                                accounts, with ZERO charges!
                            </p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={img4}></img>
                        <div className="img-txt">
                            <h1>Watch Your Investments Grow.</h1>
                            <p>Want to Earn with Us? Sign up for our Investment Option
                                and recieve a whooping 20% R0I!
                            </p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={img5}></img>
                        <div className="img-txt">
                            <h1>24/7 Customer Care.</h1>
                            <p>World-Class Customer Care is what we provide to 
                                our cherished users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}