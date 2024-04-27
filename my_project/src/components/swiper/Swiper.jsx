

function Swiper () {
return (
    <div className="component">
    <div className="carousel">
    <div className="carousel__wrapper">
 
      <img className="carousel--image active" src="images/carousel/1.jpg" alt="image1" />
       <img className="carousel--image" src="images/carousel/2.jpg" alt="image2" />
        <img className="carousel--image" src="images/carousel/3.jpg" alt="image3" />
        <img className="carousel--image" src="images/carousel/4.jpg" alt="image4" />
     
      <button aria-label="text" type="button" className="carousel__btn-left controls"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
      </svg> </button>
      <button aria-label="text" type="button" className="carousel__btn-right controls"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
      </svg> </button>
      
    <div className="carousel__footer"></div>
    </div>

    
  </div>
  </div>
)
}

export default Swiper