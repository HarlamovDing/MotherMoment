import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Prices = () => {
  const { width } = useWindowDimensions();
  const [showMore, setShowMore] = useState(false);
  
  const handlerShowMore = () => {
    setShowMore(!showMore);
  }
  
  return(
  <div id="prices" className="prices">
    <div className="container">
      <div className="prices__wrapper">
        <h2>Sleep Solutions</h2>
        
        {
          width < 922 ? 
          <div className="prices__helper">
            <img width="32px" height="32px" src="/images/svg/Hand.svg" alt="" />
            <span>Scroll left<br/>or right</span>
          </div> : <></>
        }
        <div className="prices__list">
          {
            width < 922 ? 
            <Carousel
            showThumbs={false}
            centerMode={true}
            centerSlidePercentage={95}
            emulateTouch={true}
            swipeable={true}
            selectedItem={1}
            showIndicators={false}
            showStatus={false}
            swipeScrollTolerance={10}
            width={"100%"}
            showArrows={false}
            >
              <div className="prices__item">
                <div className="prices__item-header">
                  <h3>1 Hour<br/>Consultation</h3>
                  <span>60 min audio/video consultation<br/>+ 2 support emails<br/><br/></span>
                </div>
                <div className="prices__item-price">
                  <span>49<bdi>€</bdi></span>
                </div>
                <div className="prices__item-list">
                  <h4>What you will get:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Detailed analysis of your child’s current sleep schedule and issues</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Recommendations for improving your child’s sleep</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>2 email responses to your questions during 1 week after the consultation</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-devider"></div>
                <div className="prices__item-list">
                  <h4>How it works:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Email.svg" alt=""/>
                      <span>After payment fill out an online questionnaire</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Calendar.svg" alt=""/>
                      <span>Choose a convenient date and time for the consultation</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Siren.svg" alt=""/>
                      <span>Receive a reminder on the day of the consultation</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-actions">
                  <button className="btn btn--buy btn--blue">Buy</button>
                </div>
              </div>
              <div className="prices__item">
                <div className="prices__item-header">
                  <h3>Sleep Training<br/>Package</h3>
                  <span>60 min audio/video consultation<br/>
                  + detailed sleep training plan tailored<br/> to your needs per email</span>
                </div>
                <div className="prices__item-price">
                  <span>99<bdi>€</bdi></span>
                </div>
                <div className="prices__item-list">
                  <h4>What you will get:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Detailed analysis of your child’s current sleep schedule and issues</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Recommendations for improving your child’s sleep</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Step by step custom sleep training plan (incl. sleep schedule and recommendations) sent per email</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-devider"></div>
                <div className="prices__item-list">
                  <h4>How it works:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Email.svg" alt=""/>
                      <span>After payment fill out an online questionnaire</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Siren.svg" alt=""/>
                      <span>Receive a reminder on the day of the consultation</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Moon.svg" alt=""/>
                      <span>Get a detailed custom sleep training plan and recommendations per email</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-actions">
                  <button className="btn btn--buy btn--blue">Buy</button>
                </div>
              </div>
              <div className="prices__item">
                <div className="prices__item-header">
                  <h3>Sleep Training<br/>All Inclusive</h3>
                  <span>60 min audio/video consultation<br/>+ 3 weeks unlimited daily support<br/> during sleep training process</span>
                </div>
                <div className="prices__item-price">
                  <span>249<bdi>€</bdi></span>
                </div>
                <div className="prices__item-list">
                  <h4>What you will get:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>60 min introduction consultation and creation of a custom sleep training plan</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>1 week of daily sleep schedule analysis and recommendations</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>2 weeks of daily support by phone or messenger during the sleep training process</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Follow up questions per email during 1 year after sleep training</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-devider"></div>
                <div className={showMore ? 'prices__item-list vissible' : 'prices__item-list hidden'}>
                  <h4>How it works:</h4>
                  <ul>
                      <li>
                        <img width="30px" height="30px" src="/images/svg/Email.svg" alt=""/>
                        <span>After payment fill out an online questionnaire</span>
                      </li>
                      <li>
                        <img width="30px" height="30px" src="/images/svg/Calendar.svg" alt=""/>
                        <span>Choose a convenient date and time for the first consultation</span>
                      </li>
                      <li>
                        <img width="30px" height="30px" src="/images/svg/Siren.svg" alt=""/>
                        <span>Receive a reminder on the day of the first consultation</span>
                      </li>
                      <CSSTransition
                      in={showMore}
                      timeout={200}
                      className="prices__transition"
                      unmountOnExit
                      >
                        <li>
                          <img width="30px" height="30px" src="/images/svg/PaperPlane.svg" alt=""/>
                          <span>Get 3 weeks of daily support during the whole sleep training process</span>
                        </li>
                      </CSSTransition>
                  </ul>
                </div>
                <div className="prices__item-actions">
                  <button onClick={handlerShowMore} className="btn btn--showmore">
                    <img className={showMore ? 'rotate' : ''} wudht="24px" height="24px" src="/images/svg/AboutChevron.svg" alt="" />
                    <span>{showMore ? 'Hide More' : 'Show More'}</span>
                  </button>
                  <button className="btn btn--buy btn--blue">Buy</button>
                </div>
              </div>
            </Carousel> : 
            <>
              <div className="prices__item">
                <div className="prices__item-header">
                  <h3>1 Hour<br/>Consultation</h3>
                  <span>60 min audio/video consultation<br/>+ 2 support emails<br/><br/></span>
                </div>
                <div className="prices__item-price">
                  <span>49<bdi>€</bdi></span>
                </div>
                <div className="prices__item-list">
                  <h4>What you will get:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Detailed analysis of your child’s current sleep schedule and issues</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Recommendations for improving your child’s sleep</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>2 email responses to your questions during 1 week after the consultation</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-devider"></div>
                <div className="prices__item-list">
                  <h4>How it works:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Email.svg" alt=""/>
                      <span>After payment fill out an online questionnaire</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Calendar.svg" alt=""/>
                      <span>Choose a convenient date and time for the consultation</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Siren.svg" alt=""/>
                      <span>Receive a reminder on the day of the consultation</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-actions">
                  <button className="btn btn--buy btn--blue">Buy</button>
                </div>
              </div>
              <div className="prices__item">
                <div className="prices__item-header">
                  <h3>Sleep Training<br/>Package</h3>
                  <span>60 min audio/video consultation<br/>
                  + detailed sleep training plan tailored<br/> to your needs per email</span>
                </div>
                <div className="prices__item-price">
                  <span>99<bdi>€</bdi></span>
                </div>
                <div className="prices__item-list">
                  <h4>What you will get:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Detailed analysis of your child’s current sleep schedule and issues</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Recommendations for improving your child’s sleep</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                      <span>Step by step custom sleep training plan (incl. sleep schedule and recommendations) sent per email</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-devider"></div>
                <div className="prices__item-list">
                  <h4>How it works:</h4>
                  <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Email.svg" alt=""/>
                      <span>After payment fill out an online questionnaire</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Siren.svg" alt=""/>
                      <span>Receive a reminder on the day of the consultation</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Moon.svg" alt=""/>
                      <span>Get a detailed custom sleep training plan and recommendations per email</span>
                    </li>
                  </ul>
                </div>
                <div className="prices__item-actions">
                  <button className="btn btn--buy btn--blue">Buy</button>
                </div>
              </div>
              <div className="prices__item">
              <div className="prices__item-header">
                <h3>Sleep Training<br/>All Inclusive</h3>
                <span>60 min audio/video consultation<br/>+ 3 weeks unlimited daily support<br/> during sleep training process</span>
              </div>
              <div className="prices__item-price">
                <span>249<bdi>€</bdi></span>
              </div>
              <div className="prices__item-list">
                <h4>What you will get:</h4>
                <ul>
                  <li>
                    <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                    <span>60 min introduction consultation and creation of a custom sleep training plan</span>
                  </li>
                  <li>
                    <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                    <span>1 week of daily sleep schedule analysis and recommendations</span>
                  </li>
                  <li>
                    <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                    <span>2 weeks of daily support by phone or messenger during the sleep training process</span>
                  </li>
                  <li>
                    <img width="30px" height="30px" src="/images/svg/Lamp.svg" alt=""/>
                    <span>Follow up questions per email during 1 year after sleep training</span>
                  </li>
                </ul>
              </div>
              <div className="prices__item-devider"></div>
              <div className={showMore ? 'prices__item-list vissible' : 'prices__item-list hidden'}>
                <h4>How it works:</h4>
                <ul>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Email.svg" alt=""/>
                      <span>After payment fill out an online questionnaire</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Calendar.svg" alt=""/>
                      <span>Choose a convenient date and time for the first consultation</span>
                    </li>
                    <li>
                      <img width="30px" height="30px" src="/images/svg/Siren.svg" alt=""/>
                      <span>Receive a reminder on the day of the first consultation</span>
                    </li>
                    <CSSTransition
                    in={showMore}
                    timeout={200}
                    className="prices__transition"
                    unmountOnExit
                    >
                      <li>
                        <img width="30px" height="30px" src="/images/svg/PaperPlane.svg" alt=""/>
                        <span>Get 3 weeks of daily support during the whole sleep training process</span>
                      </li>
                    </CSSTransition>
                </ul>
              </div>
              <div className="prices__item-actions">
                <button onClick={handlerShowMore} className="btn btn--showmore">
                  <img className={showMore ? 'rotate' : ''} wudht="24px" height="24px" src="/images/svg/AboutChevron.svg" alt="" />
                  <span>{showMore ? 'Hide More' : 'Show More'}</span>
                </button>
                <button className="btn btn--buy btn--blue">Buy</button>
              </div>
            </div>
            </>
          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default Prices;