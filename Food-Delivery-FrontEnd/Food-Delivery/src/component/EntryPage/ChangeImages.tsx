import './style/ChangeImages.css';
import Image1 from 'src/assets/Images/EntryPage/img1.jpg';
import Image2 from 'src/assets/Images/EntryPage/img2.jpg';
import Image3 from 'src/assets/Images/EntryPage/img3.jpg';
import Image4 from 'src/assets/Images/EntryPage/img4.jpg';

function ChangeImages() {
    const images = [Image1, Image2, Image3, Image4];
    
   const handleNext = () => {
     moveSlider('next');
   }
   const handlePrev = () => {
    moveSlider('prev');
  }

 
  
    
    let sliderList: Element;
    const slider = document.querySelector('.slider');
    if (slider !== null) {
        sliderList = slider.querySelector('.list')!;
    }

    let thumbnail = document.querySelector('.slider .thumbnail');
    let thumbnailItems: NodeListOf<Element>;

    if (thumbnail !== null) {
        thumbnailItems = thumbnail.querySelectorAll('.item');
        thumbnail.appendChild(thumbnailItems[0]);
    }

   


   
  

    function moveSlider(direction: any) {
        let sliderItems = sliderList.querySelectorAll('.item')
        let thumbnailItems = document.querySelectorAll('.thumbnail .item')
        
        if(direction === 'next'){
            sliderList.appendChild(sliderItems[0])
            if(thumbnail != null && slider != null){
                thumbnail.appendChild(thumbnailItems[0])
                slider.classList.add('next')
            }
           
            
        } else {
            sliderList.prepend(sliderItems[sliderItems.length - 1])
            if(thumbnail != null && slider != null){
                thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
            slider.classList.add('prev')
            }
            
        }
    
    
        if(slider != null){
            slider.addEventListener('animationend', function() {
                if(direction === 'next'){
                    slider.classList.remove('next')
                } else {
                    slider.classList.remove('prev')
                }
            }, {once: true}) // Remove the event listener after it's triggered once
    }
    }

  
    return (
        <div className="slider">
            <div className="list">
                <div className="item">
                    <img src={Image1} alt="" />

                    <div className="content">
                        <div className="title">MAGIC SLIDER</div>
                        <div className="type">FLOWER</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                            temporibus quis eum consequuntur voluptate quae doloribus distinctio.
                            Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sequi, aut.
                        </div>
                        <div className="button">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src={Image2} alt="" />

                    <div className="content">
                        <div className="title">MAGIC SLIDER</div>
                        <div className="type">NATURE</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                            temporibus quis eum consequuntur voluptate quae doloribus distinctio.
                            Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sequi, aut.
                        </div>
                        <div className="button">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src={Image3} alt="" />

                    <div className="content">
                        <div className="title">MAGIC SLIDER</div>
                        <div className="type">PLANT</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                            temporibus quis eum consequuntur voluptate quae doloribus distinctio.
                            Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sequi, aut.
                        </div>
                        <div className="button">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src={Image4} alt="" />

                    <div className="content">
                        <div className="title">MAGIC SLIDER</div>
                        <div className="type">NATURE</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                            temporibus quis eum consequuntur voluptate quae doloribus distinctio.
                            Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sequi, aut.
                        </div>
                        <div className="button">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="thumbnail">
                <div className="item">
                    <img src={Image4} alt="" />
                </div>
                <div className="item">
                    <img src={Image3} alt="" />
                </div>
                <div className="item">
                    <img src={Image2} alt="" />
                </div>
                <div className="item">
                    <img src={Image1} alt="" />
                </div>
            </div>

            <div className="nextPrevArrows">
                <button className="prev" onClick={handlePrev}> {'<'} </button>
                <button className="next" onClick={handleNext}> {'>'} </button>
            </div>
        </div>
    );
}

export default ChangeImages