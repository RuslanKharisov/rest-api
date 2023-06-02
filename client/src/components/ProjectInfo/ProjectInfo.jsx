import React from 'react'
import './styles.css'
import roomIco from '../../images/icons/room_black_24dp.svg'
import wcIco from '../../images/icons/checkroom_black_24dp.svg'
import deckIco from '../../images/icons/deck_black_24dp.svg'
import wardropeIco from '../../images/icons/bathtub_black_24dp.svg'

const ProjectInfo = () => {
    const product = {
        id: 6,
        sku: "СР-7",
        title: "Бирибджан",
        price: 8350000,
        area: 340,
        rating: "0",
        img: "https://images.unsplash.com/photo-1683802175943-c71b4bd66c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2286&q=80",
    }
    const details = [
        {id:1, title: "комнат", value: 2, icon: roomIco },
        {id:2, title: "санузел", value: 1, icon: wcIco },
        {id:3, title: "терасса", value: 1, icon: deckIco},
        {id:4, title: "гардероб", value: 2, icon: wardropeIco}
    ]
  return (
    <div className='project-info'>
        <h1>Проект №1</h1>
        <div className="project-info__row">
            <div className="project-info__media">
                <div className="project-info__slides">
                    <img src="https://img.freepik.com/premium-photo/wall-of-wooden-house_127089-7371.jpg?w=1800" alt="house#1" className="project-info__img" />
                </div>
            </div>
            <div className="project-info__column">
                <div className="project-info__details">
                    <div className="project-info__title">Площадь дома</div>
                    <div className="project-info__info">150 кв.м</div>
                    <div className="project-info__title">Материал стен</div>
                    <div className="project-info__info">Рубленное бревно</div>
                </div>
                <div className="project-info__rooms">

                    {details.map(option => 
                        <div key={option.id} className="project-info__rooms-type">
                            <div className="project-info__rooms-num">
                            <span>{option.value}</span>
                                <img src={option.icon} alt="" />
                            </div>
                            <div className="project-info__rooms-text">{option.title}</div>
                        </div>
                     )}


                    {/* <div className="project-info__rooms-type">
                        <div className="project-info__rooms-num">
                            <span>1</span>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="54px" viewBox="0 0 24 24" width="54px" fill="#D98C50"><g><rect fill="none" height="24" width="24"/></g><g><g><g><circle cx="7" cy="7" r="2"/></g><g><path d=/></g></g></g></svg>
                        </div>
                        <div className="project-info__rooms-text">Санузел</div>
                    </div>
                    <div className="project-info__rooms-type">
                        <div className="project-info__rooms-num">
                            <span>1</span>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="54px" viewBox="0 0 24 24" width="54px" fill="#D98C50"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="22,9 12,2 2,9 11,9 11,22 13,22 13,9"/><polygon points="4.14,12 2.18,12.37 3,16.74 3,22 5,22 5.02,18 7,18 7,22 9,22 9,16 4.9,16"/><polygon points="19.1,16 15,16 15,22 17,22 17,18 18.98,18 19,22 21,22 21,16.74 21.82,12.37 19.86,12"/></g></g></svg>
                        </div>
                        <div className="project-info__rooms-text">Терасса</div>
                    </div>
                    <div className="project-info__rooms-type">
                        <div className="project-info__rooms-num">
                            <span>1</span>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="54px" viewBox="0 0 24 24" width="54px" fill="#D98C50"><g><rect fill="none" height="24" width="24"/><path d=/></g></svg>
                        </div>
                        <div className="project-info__rooms-text">Гардероб</div>
                    </div> */}

                </div>


                <button className="project-info__btn">Узнать стоимость </button>
            </div>
        </div>
    </div>
  )
}

export default ProjectInfo