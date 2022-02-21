import { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <section className='card'>
        <div className='job-info'>
          <div className='avatar-content'>
            <img src="./images/photosnap.svg" alt="" />
          </div>
          <div className='div-text-info'>
            <div className='company-info'>
              <span className='company'>Photosnap</span>
              <span className='new'>New!</span>
              <span className='featured'>Featured</span>
            </div>
            <div className='job-position'>
              <p>
                <strong>Senior Frontend Developer</strong>
              </p>
            </div>
            <div className='job-description'>
              <span>1d ago</span> .
              <span>Full Time</span> .
              <span>Remote</span>
            </div>
          </div>
        </div>
        <div className='dev-competence'>
          <div>
            <span>Frontend</span>
          </div>
          <div>
            <span>Senior</span>
          </div>
          <div>
            <span>HTML</span>
          </div>
          <div>
            <span>CSS</span>
          </div>
          <div>
            <span>JavaScript</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;