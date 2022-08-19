import React from "react";

export default function Footer(){
    return(
        <footer>
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic">About us</div>
         <p>We Provide the World's fastest and most secure Money Transfer systems.</p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
           <a href="#"><i class="fas fa-phone-volume"></i>+007 9089 6767</a>
         </div>
         <div class="email">
           <a href="#"><i class="fas fa-envelope"></i>abc@gmail.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Our Services</div>
       <div><a href="#">Investments</a></div>
       <div><a href="#">Treasury Bills</a></div>
       <div><a href="#">Money Transfer</a></div>
       <div><a href="#">Savings & Loans</a></div>
       <div><a href="#">Cryptocurrency & Stocks</a></div>
     </div>
     <div class="right box">
       <div class="topic">Contact us</div>
       <form action="#">
            <input type="text" placeholder="Enter email address"></input>
            <input type="submit" name="" value="Send"></input>
            <div class="media-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
       </form>
     </div>
   </div>
   <div class="bottom">
     <p>Copyright © 2020 <a href="#">CodingLab</a> All rights reserved</p>
   </div>
 </footer>
    )
}