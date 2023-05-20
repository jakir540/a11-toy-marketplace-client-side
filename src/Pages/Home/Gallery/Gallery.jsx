import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
  },[])
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div class="-m-1 flex flex-wrap md:-m-2">

        
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2" data-aos="fade-up">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1581235707960-23b7e8612c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"

              //https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
            />
          </div>
          <div class="w-1/2 p-1 md:p-2" data-aos="fade-right">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1613536491198-a0afa1916b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
            />
          </div>
          <div class="w-full p-1 md:p-2" data-aos="fade-up">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1587839871379-2d6c28071f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1218&q=80"
            />
          </div>
        </div>


        


        <div class="flex w-1/2 flex-wrap">


          <div class="w-full p-1 md:p-2 " data-aos="fade-right">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center "
              src="https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
          </div>


          <div class="w-1/2 p-1 md:p-2"data-aos="fade-up">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1589404838530-8f697535fa4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
          </div>


          <div class="w-1/2 p-1 md:p-2"data-aos="fade-right">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1594787317554-dcc17c53f741?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
          </div>


        </div>

        
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2"data-aos="fade-up">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1610019080778-471083eb5965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2"data-aos="fade-right">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1679942761565-73d86c4d686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
            />
          </div>
          <div class="w-full p-1 md:p-2"data-aos="fade-up">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1652014492155-9a64bbcf2542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1725&q=80"
            />
          </div>
        </div>


        


        <div class="flex w-1/2 flex-wrap">


          <div class="w-full p-1 md:p-2"data-aos="fade-right">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1674717397031-3841482f25d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
            />
          </div>


          <div class="w-1/2 p-1 md:p-2"data-aos="fade-up">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1644913320210-3b84c4d91986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
            />
          </div>


          <div class="w-1/2 p-1 md:p-2"data-aos="fade-right">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1559816933-0b5b4de2bbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            />
          </div>


        </div>

        


      </div>
    </div>
  );
};

export default Gallery;
