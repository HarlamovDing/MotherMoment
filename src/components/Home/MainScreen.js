import useWindowDimensions from '../../hooks/useWindowDimensions';

const Mainscreen = () => {
  const { width } = useWindowDimensions();
  
  return(
    <div id="mainscreen" className="mainscreen">
      <div className="container">
        <div className="mainscreen__wrapper">
          <div className="mainscreen__content">
            <h1>Helping your<br/><span className="pink">child get</span><br/>better sleep.</h1>
            <div className="mainscreen__list">
              <div className="mainscreen__list-item">
                <img widht="40px" height="40px" src="/images/svg/atom.svg" alt="" />
                <p>
                We apply <span>science-based</span><br/>methodology for sleep trainings
                </p>
              </div>
              <div className="mainscreen__list-item">
                <img widht="40px" height="40px" src="/images/svg/toy.svg" alt="" />
                <p>
                  <span>85%</span> of children fall asleep independently<br/>after 10 days of training
                </p>
              </div>
              <div className="mainscreen__list-item">
                <img widht="40px" height="40px" src="/images/svg/globus.svg" alt="" />
                <p>
                  Our certified consultants graduated from the<br/>international <span>Family Sleep Institute</span>
                </p>
              </div>
            </div>
            {
              width >= 768 ? <a className="btn mainscreen__btn" href="/#prices">Find a solution</a> : <></>
            }
          </div>
          <div className="mainscreen__image">
            <img src="/images/Home/MainscreenImage.png" alt="" />
          </div>
          {
              width < 768 ? <a className="btn mainscreen__btn" href="/#prices">Find a solution</a> : <></>
            }
        </div>
      </div>
    </div>
  )
}

export default Mainscreen;