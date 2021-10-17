import React, { Component } from 'react';
import "./styles/home.css";

export default class App extends Component {

    render() {
        return (
            <div>
                <header>
                    <div class="overlay"></div>

                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                    </video>


                    <div class="container h-100">
                        <div class="d-flex h-100 text-center align-items-center">
                            <div class="w-100 text-white">
                                <h1 class="display-3">Fox Blog</h1>
                                <p class="lead mb-0">Using HTML5 Video and Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </header>

                <section class="my-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 mx-auto">
                                <p>The HTML5 video element uses an mp4 video as a source. Change the source video to add in your own background! The header text is vertically centered using flex utilities that are built into Bootstrap.</p>
                                <p>The overlay color and opacity can be changed by modifying the <code>background-color</code> and <code>opacity</code> properties of the <code>.overlay</code> class in the CSS.</p>
                                <p>Set the mobile fallback image in the CSS by changing the background image of the header element within the media query at the bottom of the CSS snippet.</p>
                                <p class="mb-0">
                                    Created by <a href="https://startbootstrap.com">Start Bootstrap</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}





