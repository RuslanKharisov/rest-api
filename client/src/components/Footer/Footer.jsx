import React from 'react'
import './footer.css'
import vk from '../../images/icons/vk.png'
import whatsapp from '../../images/icons/whatsapp.png'
import telegram from '../../images/icons/tg.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="sb__footer section__padding">
                    <div className="sb__footer-links">
                        <div className="sb__footer-links-div">
                            <h4>Услуги</h4>
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                        <div className="sb__footer-links-div">
                            <h4>Важно</h4>
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                        <div className="sb__footer-links-div">
                            <h4>Важно</h4>
                            <ul>
                                <li>Lorem, ipsum dolor. </li>
                                <li>Lorem, ipsum dolor. </li>
                                <li>Lorem, ipsum dolor. </li>
                                <li>Lorem, ipsum dolor. </li>
                            </ul>
                        </div>
                        <div className="sb__footer-links-div">
                            <h4>Социальные сети</h4>
                            <ul className='sb__footer-social-col'>
                                <img className='sb__footer-social-img' src={vk} alt="vk" />
                                <img className='sb__footer-social-img' src={whatsapp} alt="whatsapp" />
                                <img className='sb__footer-social-img' src={telegram} alt="telegram" />
                            </ul>
                        </div>
                    </div>

                    <hr className="hr-line" />

                    <div className="sb__footer-below">
                        <div className="sb__footer-copyright">
                            <p>
                                @{new Date().getFullYear()} Barbaris, All right reserved.
                            </p>
                        </div>
                        <div className="sb__footer-below-links">
                            <a href="#"><div><p>Terms & Conditions</p></div></a>
                            <a href="#"><div><p>Privacy</p></div></a>
                            <a href="#"><div><p>Security</p></div></a>
                            <a href="#"><div><p>Cookie Declarations</p></div></a>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Footer