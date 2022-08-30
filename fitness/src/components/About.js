import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <>
            <body class="main-layout inner_page">



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
                                                    <NavLink to="/StartPage" className={"nav-link active"}>StartPage</NavLink>

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


                </header>

                <div class="back_re">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <h2>About Us</h2>
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

export default About;
