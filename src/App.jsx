import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";  
// import "boot strap/dist/js/bootstrap.bundle.min";
import Rectangle from './assets/images/Rectangle.png'
import idea from './assets/images/idea.png'
import requirementgathering from './assets/images/requirementgathering.png'
import development from './assets/images/development.png'
import prototype from '../src/assets/images/prototype.png'
import ios from './assets/images/ios.png'
import php from './assets/images/php.png'
import js from './assets/images/js.png'
import nextjs from './assets/images/nextjs.png'
import springboot from './assets/images/springboot.png'
import reactjs from './assets/images/reactjs.png'
import './App.css'

function App() {

  return (
    <div className='fuji'>
      <div className="header">
        <div className="bg-center container-fluid p-4 bg-primary text-white text-center">
          <h1 className="h1header">WELCOME TO FUJISAKURA</h1>
          <h3 className="h3header">We are Team of Talented Engineers </h3>
        </div>
      </div>
      <div className="ourexpertize">
        <h1 className="h1-ourexpertize">Our Expertize</h1>
        <p className="p-ourexpertize pb-2">FujiSakura Technologies specialized in crafting latest Mobile Application, Software Application, Web Application and also in extending services like<br></br> Digital Marketing. Quality Testing, atent Development and Management, SEO and through many more.</p>
        <div className="container" >
          <div className="row g-0">
            <div className="col-6 g-2">
              <img className="" src={Rectangle} />
            </div>
            <div className="col-6" >
              <div className="row">
                <div className="col-6 p-4">
                  <div className="" class="gridimage">
                  <img class="image" className="" src={idea} />
                  <p class="p-expertisegrid">Idea</p>
                  </div>
                </div>
                <div className="col-6 p-4">
                  <div class="gridimage">
                    <img class="image" className="" src={requirementgathering} />
                  <p class="p-expertisegrid">Requirement Gathering</p>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 p-4">
                  <div className="" class="gridimage">
                  <img class="image" className=""  src={development} />
                  <p class="p-expertisegrid">Development</p>
                </div></div>
                <div className="col-6 p-4">
                  <div class="gridimage">
                  <img class="image" className=""  src={prototype} />
                  <p class="p-expertisegrid">Prototype</p>
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="technologyweexpertize">

        <h1 className="h-technologyweexpertize">Technology We Expertize</h1>
        <p className="p-technologyweexpertize">FujiSakura Technologies specialized in crafting latest Mobile Application, Software Application, Web Application and also in extending services like Digital Marketing, Quality Testing. Content Development and Management, SEO and through many more.</p>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md">
              <div class="card">
                <img src={ios} className="card-img-top" alt="Image 1" />
                <div class="card-body">
                  <span class="card-text"></span>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <img src={js} class="card-img-top" alt="Image 2" />
                <div class="card-body">
                  <span class="card-text"></span>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <img src={nextjs} class="card-img-top" alt="Image 3" />
                <div class="card-body">
                  <span class="card-text"></span>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <img src={php} class="card-img-top" alt="Image 4" />
                <div class="card-body">
                  <span class="card-text"></span>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <img src={springboot} class="card-img-top" alt="Image 5" />
                <div class="card-body">
                  <span class="card-text"></span>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <img src={reactjs} class="card-img-top" alt="Image 6" />
                <div class="card-body">
                  <span class="card-text"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





  );
};



export default App
