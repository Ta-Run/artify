import React from 'react'
import Navbar from '../Navbar'


function Home() {
  return (
    <div>
          <Navbar/>
        <section class="background firstSection">
        <div class="box-main">
            <div class="firstHalf">
                <p class="text-big">The future of the art is here</p>
                <p class="text-small">To those who rarely create art, it may seem as though the process of creation is easy and comes without any challenges.</p>
                <div class="buttons">
                    <button class="btn">Subscribe</button>
                    <button class="btn">Watch video</button>
                </div>
            </div>

            <div class="secondHalf">
                <img src="../../../" alt="Artist Image"/>
            </div>
        </div>

    </section>
        <section class="section">
        <div class="paras">
        <p class="sectionTag text-big">The end of your serach if here</p>
        <p class="sectionSubTag text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe veniam adipisci quisquam eos porro sunt architecto? Sunt molestiae esse iusto corporis quos, fuga nulla vero, corrupti minima excepturi perferendis.</p>
    </div>
        <div class="thumbnail">
            <img src="bg.jpg.jpg" alt="Artist Image" class="imgFluid"/>
        </div>
    </section>
    <section class="section section-left">
        <div class="paras">
        <p class="sectionTag text-big">The end of your serach if here</p>
        <p class="sectionSubTag text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe veniam adipisci quisquam eos porro sunt architecto? Sunt molestiae esse iusto corporis quos, fuga nulla vero, corrupti minima excepturi perferendis.</p>
    </div>
        <div class="thumbnail">
            <img src="img.jpg.jpg" alt="Artist Image" class="imgFluid"/>
        </div>
    </section>
    <section class="section">
        <div class="paras">
        <p class="sectionTag text-big">The end of your serach if here</p>
        <p class="sectionSubTag text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe veniam adipisci quisquam eos porro sunt architecto? Sunt molestiae esse iusto corporis quos, fuga nulla vero, corrupti minima excepturi perferendis.</p>
    </div>
        <div class="thumbnail">
            <img src="img.jpg.jpg" alt="Artist Image" class="imgFluid"/>
        </div>
    </section>
    </div>
  )
}

export default Home