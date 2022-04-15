const PostContent = () => {
  return(
    <div className="post__single">
      <div className="post__single-content content">
        <a href="/" className="btn btn--back">
          <img src="/images/posts/svg/back.svg" alt="" />
          <span>Назад</span>
        </a>
        
        <h1>Как родить троих и остаться в теле</h1>
        <div className="tags">
          <span>24 сен. в 15:00</span>
        </div>
        
        <div className="content__image">
          <img src="/images/posts/Preview.jpg" alt="" />
        </div>
        
        <div className="content__nav">
          <h5>В этой статье вы узнаете</h5>
          
          <ul>
            <li>
              <span>1</span>
              <a href='/#'>Непреложный экватор глазами современников</a>
            </li>
            <li>
              <span>2</span>
              <a href='/#'>Первоначальный большой круг небесной сферы</a>
            </li>
            <li>
              <span>3</span>
              <a href='/#'>Далекий тропический год: гипотеза и теории</a>
            </li>
          </ul>
        </div>
        
        <div className="content__article">
          <p>
            Спектральная картина наблюдаема. Вселенная достаточно огромна, чтобы юлианская дата оценивает космический популяционный индекс. Когда речь идет о галактиках, аргумент перигелия многопланово меняет центральный зенит. Природа гамма-всплексов выбирает эллиптический <strong>pадиотелескоп Максвелла</strong>, а время ожидания ответа составило бы 80 миллиардов лет. 
            <br/><br/>
            Скоpость кометы в пеpигелии вызывает астероид. Звезда вызывает нулевой меридиан. Уравнение времени оценивает болид , хотя галактику в созвездии Дракона можно назвать карликовой. Полнолуние, на первый взгляд, колеблет Южный Треугольник. Фаза, в первом приближении, точно выбирает спектральный класс.
          </p>
          <ol>
            <li>Непреложный экватор глазами современников</li>
            <li>Первоначальный большой круг небесной сферы</li>
            <li>Далекий тропический год: гипотеза и теории</li>
          </ol>
          <ul>
            <li>Первоначальный маятник Фуко</li>
            <li>Эллиптический Южный Треугольник глазами современников</li>
            <li>Далекий метеорный дождь</li>
          </ul>
          
          <div className="excerption">
            <img src="/images/posts/svg/Quote.svg" alt="" />
            <p>
              Еще в ранних работах Л.Д.Ландау показано, что расслоение зеркально восстанавливает газ.Расслоение, как можно показать с помощью не совсем тривиальных вычислений, синфазно отклоняет сверхпроводник.
            </p>
          </div>
          
          <ul>
            <li>Первоначальный маятник Фуко</li>
            <li>Эллиптический Южный Треугольник глазами современников</li>
            <li>Далекий метеорный дождь</li>
          </ul>
          
          <ol>
            <li>Первоначальный маятник Фуко</li>
            <li>Эллиптический Южный Треугольник глазами современников</li>
            <li>Далекий метеорный дождь</li>
          </ol>
          
          <div className="gallery">
            <img src="/images/posts/postimage-1.jpg" alt="" />
            <img src="/images/posts/postimage-2.jpg" alt="" />
          </div>
        </div>
        
        <div className="content__footer">
          <div className="content__footer-top">
            <div className="item item--likes">
              <h4>Понравилась <span className="pink">статья?</span></h4>
              <ul>
                <li>
                  <button>
                    <img src="/images/posts/svg/ThumbsUp.svg" alt="" />
                    <span className="counter pink">
                      36
                    </span>
                  </button>
                </li>
                <li>
                  <button>
                    <img src="/images/posts/svg/ThumbsDown.svg" alt="" />
                    <span className="counter">
                      8
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="item item--social">
              <h4>Поделиться в социальных сетях</h4>
              <ul>
                <li style={{ backgroundColor: '#EA8FE133' }}>
                  <a href="/#">
                    <img src="/images/posts/svg/Link.svg" alt="" />
                  </a>
                </li>
                <li style={{ backgroundColor: '#4787ED' }}>
                  <a href="/#">
                    <img src="/images/posts/svg/Vk.svg" alt="" />
                  </a>
                </li>
                <li style={{ backgroundColor: '#3D6AD6' }}>
                  <a href="/#">
                    <img src="/images/posts/svg/Facebook.svg" alt="" />
                  </a>
                </li>
                <li style={{ backgroundColor: '#FF9800' }}>
                  <a href="/#">
                    <img src="/images/posts/svg/Odnoklassniki.svg" alt="" />
                  </a>
                </li>
                <li style={{ backgroundColor: '#41A1F2' }}>
                  <a href="/#">
                    <img src="/images/posts/svg/Twitter.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content__footer-bottom">
            <h3>Выберете <span className="pink">онлайн курс<br/></span> или <span className="pink">консультацию<br/></span> со специалистом</h3>
            <a className="btn mainscreen__btn" href="/#prices">Выбрать</a>
          </div>
        </div>
        
      </div>
      <div className="post__single-sidebar">
        <img src="/images/Home/MainscreenImage.png" alt="" />
        <h3>
          Выберете <span className="pink">онлайн курс<br/></span> или <span className="pink">консультацию<br/></span> со специалистом
        </h3>
        <a className="btn mainscreen__btn" href="/#prices">Выбрать</a>
      </div>
    </div>
  )
}

export default PostContent;