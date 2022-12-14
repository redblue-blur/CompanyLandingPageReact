import '../componentsCss/owlC.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useRef } from 'react';

const OwlC = () => {
    const scollToRef = useRef();
    return (
    <>
    <OwlCarousel 
        className='owl-theme' 
        center 
        loop 
        items={1} 
        autoHeight 
        nav={true} 
        navText={['<h1 class="navftsz"><</h1>','<h1 class="navftsz">></h1>']}
    >
        <div className='item helim'>
            <img src="assets/img1.jpeg" alt="cloud"/>
	    	<div class="owl-dots dotText">
	    		<h1>WE ARE EXPERTS</h1>
	    		<p> sgcfvjbj,kg jygyjfv gygyjvyv jjyfkdtd </p>
                <br/>
	    		<a href='#form' class="btn btn-warning ">READ MORE</a>
	    	</div>
        </div>
        <div className='item helim'>
            <img className="fluid" src="assets/img2.jpeg" />
            <div class="owl-dots dotText">
	    		<h1>WE ARE EXPERTS</h1>
	    		<p> sgcfvjbj,kg jygyjfv gygyjvyv jjyfkdtd </p>
	    		<a href='#form' class="btn btn-warning ">READ MORE</a>
	    	</div>
        </div>
        <div className='item helim'>
            <img src="assets/img3.jpeg" />
            <div class="owl-dots dotText">
	    		<h1>WE ARE EXPERTS</h1>
	    		<p> sgcfvjbj,kg jygyjfv gygyjvyv jjyfkdtd </p>
	    		<a href='#form' class="btn btn-warning ">READ MORE</a>
	    	</div>
        </div>
    </OwlCarousel>
    <div ref={scollToRef}></div>
    </>
    )
};

export default OwlC;