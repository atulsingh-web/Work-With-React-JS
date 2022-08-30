import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Home.css";

function StartPage() {
   return (
      <>
         <body class="main-layout">



            <header class="full_bg">

               <div class="header">
                  <div class="container-fluid">
                     <div class="row">
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                           <div class="full">
                              <div class="center-desk">
                                 <div class="logo">
                                    <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                           <nav class="navigation navbar navbar-expand-md navbar-dark ">
                              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                 <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarsExample04">
                                 <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                       <NavLink to="/Home" className={"nav-link active"}>Home</NavLink>

                                    </li>
                                    <li class="nav-item">
                                       <NavLink to="/About" className={"nav-link active"}>About</NavLink>

                                    </li>
                                    <li class="nav-item">
                                       <NavLink to="/Class" className={"nav-link active"}>Class</NavLink>

                                    </li>
                                    <li class="nav-item">
                                       <NavLink to="/Yoga" className={"nav-link active"}>Yoga</NavLink>

                                    </li>
                                    <li class="nav-item">
                                       <NavLink to="/Pricing" className={"nav-link active"}>Pricing</NavLink>

                                    </li>
                                    <li class="nav-item">
                                       <NavLink to="/Contact" className={"nav-link active"}>Contact</NavLink>

                                    </li>
                                 </ul>
                              </div>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>

               <section class="banner_main">
                  <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container">
                              <div class="carousel-caption  banner_po">
                                 <div class="row">
                                    <div class="col-md-5">
                                       <div class="yo_img">
                                          <figure><img src="images/yo_img.png" alt="#" /></figure>
                                       </div>
                                    </div>
                                    <div class="col-md-7">
                                       <div class="yoga_box">
                                          <span>Now started</span>
                                          <h1> <strong>Y</strong> O <strong>G</strong> A</h1>
                                          <a class="read_more yoga_btn" href="contact.html" role="button">Contact us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption banner_po">
                                 <div class="row">
                                    <div class="col-md-5">
                                       <div class="yo_img">
                                          <figure><img src="images/yo_img.png" alt="#" /></figure>
                                       </div>
                                    </div>
                                    <div class="col-md-7">
                                       <div class="yoga_box">
                                          <span>Now started</span>
                                          <h1> <strong>Y</strong> O <strong>G</strong> A</h1>
                                          <a class="read_more yoga_btn" href="contact.html" role="button">Contact us</a>

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption banner_po">
                                 <div class="row">
                                    <div class="col-md-5">
                                       <div class="yo_img">
                                          <figure><img src="images/yo_img.png" alt="#" /></figure>
                                       </div>
                                    </div>
                                    <div class="col-md-7">
                                       <div class="yoga_box">
                                          <span>Now started</span>
                                          <h1> <strong>Y</strong> O <strong>G</strong> A</h1>
                                          <a class="read_more yoga_btn " href="contact.html" role="button">Contact us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        <span class="sr-only">Previous</span>
                     </a>
                     <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <span class="sr-only">Next</span>
                     </a>
                  </div>
               </section>
            </header>

            <div class="classes">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-12">
                        <div class="titlepage">
                           <h2>Our Classes</h2>
                           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                           </span>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-4 col-sm-6 d_none">
                     </div>
                     <div class="col-md-4 col-sm-6 margin_bott">
                        <div class="our_yoga">
                           <figure><img src="images/our_yoga1.png" alt="#" /></figure>
                           <h3>HATHA YOGA</h3>
                           <span>Lorem ipsum dolor sit amet</span>
                        </div>
                     </div>
                     <div class="col-md-4 col-sm-6 d_none">
                     </div>
                     <div class="col-md-4 col-sm-6">
                        <div class="our_yoga">
                           <figure><img src="images/our_yoga2.png" alt="#" /></figure>
                           <h3>HATHA YOGA</h3>
                           <span>Lorem ipsum dolor sit amet</span>
                        </div>
                     </div>
                     <div class="col-md-4 col-sm-6 d_none">
                     </div>
                     <div class="col-md-4 col-sm-6">
                        <div class="our_yoga">
                           <figure><img src="images/our_yoga3.png" alt="#" /></figure>
                           <h3>HATHA YOGA</h3>
                           <span>Lorem ipsum dolor sit amet</span>
                        </div>
                     </div>
                     <div class="col-md-4 offset-md-4 col-sm-6  margin_top">
                        <div class="our_yoga">
                           <figure><img src="images/our_yoga4.png" alt="#" /></figure>
                           <h3>HATHA YOGA</h3>
                           <span>Lorem ipsum dolor sit amet</span>
                           <a class="read_more yoga_btn" href="Javascript:void(0)"> Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="middle">
               <div class="container-fluid">
                  <div class="row d_flex">
                     <div class="col-md-6">
                        <div class="titlepage">
                           <h2 >The Inner Middle.</h2>
                           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu</p>
                           <a class="read_more ye_b5n " href="Javascript:void(0)"> Read More</a>
                        </div>
                     </div>
                     <div class="col-md-5 offset-md-1 padding_right0">
                        <div class="yoga_img">
                           <figure><img src="images/yoga_mo.png" alt="#" /></figure>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="about">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-md-6 offset-md-3">
                        <div class="titlepage">
                           <h2>About Us</h2>
                           <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu</span>
                        </div>
                     </div>
                     <div class="col-md-12">
                        <div class="about_img">
                           <figure><img src="images/about.png" alt="#" /></figure>
                           <a class="read_more yoga_btn" href="Javascript:void(0)"> Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="balance">
               <div class="container-fluid">
                  <div class="row d_flex">
                     <div class="col-md-5 padding_left0">
                        <div class="yoga_img">
                           <figure><img src="images/yoga_mo1.png" alt="#" /></figure>
                        </div>
                     </div>
                     <div class="col-md-6 offset-md-1">
                        <div class="titlepage">
                           <h2 class="padd_top30">Mind in Balance</h2>
                           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu</p>
                           <a class="read_more ye_b5n " href="Javascript:void(0)"> Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="pricing_main">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="titlepage">
                           <h2>Pricing</h2>
                           <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="pricing">
                           <h4>STARTER PLAN</h4>
                           <h3><span>$</span>60</h3>
                           <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard</p>
                           <a class="read_more dark_bg" href="Javascript:void(0)"> Starte Now</a>
                        </div>
                     </div>
                     <div class="col-md-4 ho_bor">
                        <div class="pricing ">
                           <h4>STARTER PLAN</h4>
                           <h3><span>$</span>60</h3>
                           <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard</p>
                           <a class="read_more dark_bg" href="Javascript:void(0)"> Starte Now</a>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="pricing">
                           <h4>STARTER PLAN</h4>
                           <h3><span>$</span>60</h3>
                           <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard</p>
                           <a class="read_more dark_bg" href="Javascript:void(0)"> Starte Now</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="pepole">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="titlepage">
                           <h2>What Says Pepole</h2>
                           <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-8 offset-md-2">
                        <div class="testimo_ban_bg">
                           <div id="testimo" class="carousel slide testimo_ban" data-ride="carousel">
                              <ol class="carousel-indicators">
                                 <li data-target="#testimo" data-slide-to="0" class="active"></li>
                                 <li data-target="#testimo" data-slide-to="1"></li>
                                 <li data-target="#testimo" data-slide-to="2"></li>
                              </ol>
                              <div class="carousel-inner">
                                 <div class="carousel-item active">
                                    <div class="container parile0">
                                       <div class="carousel-caption relative2">
                                          <div class="row d_flex">
                                             <div class="col-md-12">
                                                <i><img class="qusright" src="images/t.png" alt="#" /><img src="images/tes.png" alt="#" /><img class="qusleft" src="images/t.png" alt="#" /></i>
                                                <div class="aliq">
                                                   <span>Aliqua</span>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="carousel-item">
                                    <div class="container parile0">
                                       <div class="carousel-caption relative2">
                                          <div class="row d_flex">
                                             <div class="col-md-12">
                                                <i><img class="qusright" src="images/t.png" alt="#" /><img src="images/tes.png" alt="#" /><img class="qusleft" src="images/t.png" alt="#" /></i>
                                                <div class="aliq">
                                                   <span>Aliqua</span>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="carousel-item">
                                    <div class="container parile0">
                                       <div class="carousel-caption relative2">
                                          <div class="row d_flex">
                                             <div class="col-md-12">
                                                <i><img class="qusright" src="images/t.png" alt="#" /><img src="images/tes.png" alt="#" /><img class="qusleft" src="images/t.png" alt="#" /></i>
                                                <div class="aliq">
                                                   <span>Aliqua</span>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <a class="carousel-control-prev" href="#testimo" role="button" data-slide="prev">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    <span class="sr-only">Previous</span>
                                 </a>
                                 <a class="carousel-control-next" href="#testimo" role="button" data-slide="next">
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    <span class="sr-only">Next</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="contact">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="titlepage">
                           <h2>Contact Us</h2>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6 padding_right0">
                        <form id="request" class="main_form">
                           <div class="row">
                              <div class="col-md-12">
                                 <input class="contactus" placeholder="Name" type="type" name="Name" />
                              </div>
                              <div class="col-md-12">
                                 <input class="contactus" placeholder="Email" type="type" name="Email" />
                              </div>
                              <div class="col-md-12">
                                 <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                              </div>
                              <div class="col-md-12">
                                 <textarea class="textarea" placeholder="Message" type="type" Message="Name">Message</textarea>
                              </div>
                              <div class="col-md-12">
                                 <button class="send_btn">Send</button>
                              </div>
                           </div>
                        </form>
                     </div>
                     <div class="col-md-6 padding_left0">
                        <div class="map_main">
                           <div class="map-responsive">
                          
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <footer>
               <div class="footer">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-8 offset-md-2">
                           <div class="newslatter">
                              <h4>Subscribe Our Newsletter</h4>
                              <form class="bottom_form">
                                 <input class="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                                 <button class="sub_btn">subscribe</button>
                              </form>
                           </div>
                        </div>
                        <div class="col-sm-12">
                           <div class=" border_top1"></div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-4">
                           <h3>QUICK LINKS</h3>
                           <ul class="link_menu">
                              <li><a href="#">Home</a></li>
                              <li><a href="about.html"> About</a></li>
                              <li><a href="classes.html">Classes</a></li>
                              <li><a href="yoga.html">Yoga</a></li>
                              <li><a href="pricing.html">pricing</a></li>
                              <li><a href="contact.html">Contact Us</a></li>
                           </ul>
                        </div>
                        <div class=" col-md-3">
                           <h3>TOP Yoga</h3>
                           <p class="many">
                              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou
                           </p>
                        </div>
                        <div class="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
                           <h3>Contact </h3>
                           <ul class="conta">
                              <li><i class="fa fa-map-marker" aria-hidden="true"></i> Location</li>
                              <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="#"> atul800023@gmail.com</a></li>
                              <li><i class="fa fa-mobile" aria-hidden="true"></i> Call : +917009564258</li>
                           </ul>
                           <ul class="social_icon">
                              <li><a href="https://www.facebook.com/profile.php?id=100006816698536"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="https://twitter.com/"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="https://www.linkedin.com/in/atul-bhardwaj-6b3a44183/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BGQrN2L7pQDayD%2BEuagNY1Q%3D%3D"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                              <li><a href="https://www.instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="copyright">
                     <div class="container">
                        <div class="row">
                           <div class="col-md-10 offset-md-1">
                              <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>

            <script src="js/jquery.min.js"></script>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="js/jquery-3.0.0.min.js"></script>

            <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
            <script src="js/custom.js"></script>
         </body>

      </>
   );
}

export default StartPage;
