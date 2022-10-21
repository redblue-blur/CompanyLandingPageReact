import '../componentsCss/owlC.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlC = () => {
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
	    		<button type="button" class="btn btn-warning " id="button1"herf="#form">READ MORE</button>
	    	</div>
        </div>
        <div className='item helim'>
            <img className="fluid" src="assets/img2.jpeg" />
            <div class="owl-dots dotText">
	    		<h1>WE ARE EXPERTS</h1>
	    		<p> sgcfvjbj,kg jygyjfv gygyjvyv jjyfkdtd </p>
	    		<button type="button" class="btn btn-warning " id="button1">READ MORE</button>
	    	</div>
        </div>
        <div className='item helim'>
            <img src="assets/img3.jpeg" />
            <div class="owl-dots dotText">
	    		<h1>WE ARE EXPERTS</h1>
	    		<p> sgcfvjbj,kg jygyjfv gygyjvyv jjyfkdtd </p>
	    		<button type="button" class="btn btn-warning " id="button1">READ MORE</button>
	    	</div>
        </div>
    </OwlCarousel>
    </>
    )
};

export default OwlC;