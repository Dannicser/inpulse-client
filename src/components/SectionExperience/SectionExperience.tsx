import React from "react";

import style from "./SectionExperience.module.css";

import icon1 from './assets/experience-icon-1.svg'
import icon2 from './assets/experience-icon-2.svg'
import icon3 from './assets/experience-icon-3.svg'

import arrow from './assets/arrow.svg'


interface ISectionExperience {
    classes?: string;
}

export const SectionExperience: React.FC<ISectionExperience> = ({ classes = "" }) => {
    return (
        <section className={`${style.classes}`} id={`${style.experience}`}>
            <div className={`${style.experience_container}`}>
                <div className={`${style.experience_item}`}>
                    <img src={icon1} alt="" className={`${style.experience_item_image}`}/>
                        <h3 className={`${style.experience_item_name}`}>We increase</h3>
                        <p className={`${style.experience_item_description} ${style.grey}`}>your brand awareness, image and cultural relevance through
                            collaborations with digital artists.</p>
                        <img src={arrow} alt="arrow" className={`${style.experience_item_arrow}`}/>

                </div>
                <div className={`${style.experience_item}`}>
                    <img src={icon2} alt="" className={`${style.experience_item_image}`}/>
                        <h3 className={`${style.experience_item_name}`}>We engage</h3>
                        <p className={`${style.experience_item_description} ${style.grey}`}>audiences through event launches, communication strategy
                            development and media outreach.</p>
                        <img src={arrow} alt="arrow" className={`${style.experience_item_arrow}`}/>

                </div>
                <div className={`${style.experience_item}`}>
                    <img src={icon3} alt="" className={`${style.experience_item_image}`}/>
                        <h3 className={`${style.experience_item_name}`}>We develop</h3>
                        <p className={`${style.experience_item_description} ${style.grey}`}>We develop creative concepts tailored to your needs that aim to
                            engage your audience in an interactive way.</p>
                        <img src={arrow} alt="arrow" className={`${style.experience_item_arrow}`}/>

                </div>
            </div>
        </section>
    );
};
