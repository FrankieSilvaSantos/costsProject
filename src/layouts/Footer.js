import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    return(

        <div className='footer-positioning'>
            <footer class="bg-dark text-center text-white">
 
  <div className="container p-4 pb-0">
    
    <section class="mb-4">
      
      <a className="btn btn-outline-light btn-floating m-1 socials-style" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

   
      <a className="btn btn-outline-light btn-floating m-1 socials-style" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

    
      <a class="btn btn-outline-light btn-floating m-1 socials-style" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1 socials-style" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

     
      <a className="btn btn-outline-light btn-floating m-1 socials-style" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

     
      <a className="btn btn-outline-light btn-floating m-1 socials-style" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
    
  </div>
  

 
  <div className="text-center p-3"    style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    Costs© 
    <Link className="text-white copyright-style" to="https://www.linkedin.com/in/frankie-silva-santos-5968451ab/"> <span className='span-style'> FrankieSilvaSantos</span></Link>
  </div>
  
</footer>
        </div>
    )
}

export default Footer;