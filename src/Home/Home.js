import React, { Component } from 'react';


class Home extends Component{
  render() {
    return(
        <section id ="home" className='flex'>
          <div className='home-container flex col'>
            <span className='small-word'>CREATIVE AGENCY</span>
            <h1>WE ARE <span className='special-word'>CREATIVE </span>DESIGN AGENCY</h1>
            <span className='hr'></span>         
            <p>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
              Vestibulum facilisis quam eget ex
               blandit cursus. Proin est magna, 
               semper a porta sed, lacinia eu lectus.</p>
               </div>
        </section>
     )
  }
}
export default Home;
