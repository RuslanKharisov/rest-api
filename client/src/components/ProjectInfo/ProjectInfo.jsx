import React, { useEffect, useState } from 'react'
import './styles.css'
import roomIco from '../../images/icons/room_black_24dp.svg'
import wcIco from '../../images/icons/checkroom_black_24dp.svg'
import deckIco from '../../images/icons/deck_black_24dp.svg'
import wardropeIco from '../../images/icons/bathtub_black_24dp.svg'
import {useParams} from 'react-router-dom'
import { fetchOneProduct } from '../../http/deviceAPI'

const ProjectInfo = () => {
    const [product, setProduct] = useState({info:[]})
    const {id} = useParams()

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))

    }, [])
    

  return (
      <div className='project-info'>
          <section id={id} className="main-container">


                  <div className="row">
                      <div className="col-lg-8">
                          <div id="page-slider" className="page-slider small-bg">
                              <div className="item">
                                  <img loading="lazy" className="img-fluid" src={process.env.REACT_APP_API_URL + product.img} alt="project-image" />
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 mt-5 mt-lg-0">

                          <h3 className="column-title mrt-0">{product.title}</h3>
                          <p>Проект уютного дома в аутентичном стиле совместивший в себе все природные материалы и современные технологии.</p>
                          <ul className="project-info list-unstyled">
                              <li>
                                  <p className="project-info-label">Стоимость от : <span className="project-info-content"> {product.price} руб. </span> </p>
                              </li>
                              <li>
                                  <p className="project-info-label">Площадь дома : <span className="project-info-content"> {product.area} кв.м </span> </p>
                              </li>
                          </ul>
                          <ul className="project-info list-unstyled">
                              {product.info.map(option =>
                                  <li key={option.id}>
                                      {/* <img src={option.icon} alt="" /> */}
                                      <p className="project-info-label">{option.title} : <span className="project-info-content"> {option.description} </span> </p>
                                  </li>

                              )}

                          </ul>

                          <p className="project-link">
                              <a className="btn btn-primary" target="_blank" href="#">View Project</a>
                          </p>

                      </div>

                  </div>


          </section>

      </div>
  )
}

export default ProjectInfo