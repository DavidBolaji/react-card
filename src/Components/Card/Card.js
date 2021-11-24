import React, { useState} from 'react';
import '../../Style/style.css';
import Equilibrum from '../../Assets/images/image-equilibrium.jpg';
import Avatar from '../../Assets/images/crop.jpg';
import Eth from '../../Assets/images/icon-ethereum.svg';
import Clock from '../../Assets/images/icon-clock.svg';
import View from '../../Assets/images/icon-view.svg';

const Card = () => {
    const [active, setActive] = useState(false);
    const [hoverAuthor, setHoverAuthor] = useState(false);
    const [hoverTitle, setHoverTitle] = useState(false);
    const clickHandler = () => {
        setActive(prev => !prev)
    }

    const hoverHandler = () => {
        setHoverAuthor(prev => !prev)
    }

    const hoverTitleHandler = () => {
        setHoverTitle(prev => !prev)
    }
    return (
        <div className="card">
            <div className="image"  onMouseEnter={clickHandler} onMouseLeave={clickHandler}>
                <img src={Equilibrum} alt="cube" />
                {active && 
                <div className="box">
                    <img src={View} alt="cube" />
                </div>
                }
            </div>
            <div className="text-group">
                <h1 className="title" onMouseEnter={hoverTitleHandler} onMouseLeave={hoverTitleHandler} style={{color: hoverTitle && 'cyan'}}>Equilibrium #3429</h1>
                <p className="para">Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <div className="ratings">
                <div className="currency">
                    <img src={Eth} alt="Ethereum" />
                    <span>0.041 ETH</span> 
                </div>
                <div className="time">
                    <img src={Clock} alt="Ethereum" />
                    <span> 3 days left</span>
                </div>
            </div>
            <hr className="hr_line" />
            <div className="profile">
                <div className="profile_img">
                    <img src={Avatar} alt="david" />
                </div>
                <div className="profile_text">
                    <p>Creation of <b onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} style={{color: hoverAuthor && 'cyan'}}>Ologunleko David</b></p>
                </div>
            </div>
        </div>
    )
}

export default Card
