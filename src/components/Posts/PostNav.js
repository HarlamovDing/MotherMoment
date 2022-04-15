import useWindowDimensions from "../../hooks/useWindowDimensions";

const PostNav = () => {
  const { width } = useWindowDimensions();
  return(
    <div className="post__nav">
      <div className="post__nav-wrapper">
        <ul>
          <li className="active">
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">Самозасыпание</a>
          </li>
          <li>
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">Питание</a>
          </li>
          <li>
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">После родов</a>
          </li>
          <li>
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">Самозасыпание</a>
          </li>
          <li>
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">Питание</a>
          </li>
          <li>
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">После родов</a>
          </li>
          <li>
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">Самозасыпание</a>
          </li>
          <li>
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">Питание</a>
          </li>
          <li>
            {
              width < 768 ? <div className="icon"><img src="" alt="" /></div> : <></>
            }
            <a href="/#">После родов</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostNav;