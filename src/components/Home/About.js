const About = () => {
  return(
  <div id="about" className="about">
    <div className="container">
      <div className="about__wrapper">
        <div className="about__video">
        </div>
        <div className="about__cards">
          <div className="about__cards-line">
            <div style={{ backgroundColor: "#FAE8D0" }} className="about__cards-item">
              <p style={{ color: '#826B4C' }}>I am Toma (Tamara), a certified Child Sleep Consultant and a rested mother full of energy <br/><br/>I am here to help<br/>
              your child get<br/>better sleep</p>
              <div className="image">
                <img src="/images/home/Benefit-1.png" alt="" />
              </div>
            </div>
            <div style={{ backgroundColor: "#FBECE9" }} className="about__cards-item">
              <p style={{ color: '#87645D' }}>Member of the International Association of Child Sleep Consultants</p>
              <div className="image">
                <img src="/images/home/Benefit-2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="about__cards-line">
            <div style={{ backgroundColor: "#D0F5FA" }} className="about__cards-item">
              <p style={{ color: '#267782' }}>
              I help parents and their children between 0 and 7 years of age in English and German
              </p>
              <div className="image">
                <img src="/images/home/Benefit-3.png" alt="" />
              </div>
            </div>
            <div className="about__cards-item--double">
              <div style={{ backgroundColor: "#9FC1FF" }} className="about__cards-item">
                <p style={{ color: '#2B4677' }}>Hundreds of my families are now sleeping well </p>
                <div className="image">
                <img src="/images/home/Benefit-4.png" alt="" />
                </div>
              </div>
              <div style={{ backgroundColor: "#EA8FE1" }} className="about__cards-item">
                <p style={{ color: '#772570' }}>Check out my Instagram</p>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <img width="32px" height="32px" src="/images/svg/Arrow.svg" alt="Перейти" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About;