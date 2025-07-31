// Certifications.jsx (renommé depuis Testimonial.jsx)
import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { certificationsData } from './CertificationsData';

const Certifications = () => {
   const sliderRef = useRef();

   const [swiper, setSwiper] = React.useState();
   const prevRef = React.useRef();
   const nextRef = React.useRef();

   React.useEffect(() => {
       if (swiper) {
           console.log("Swiper instance:", swiper);
           swiper.params.navigation.prevEl = prevRef.current;
           swiper.params.navigation.nextEl = nextRef.current;
           swiper.navigation.init();
           swiper.navigation.update();
       }
   }, [swiper]);

   return (
       <div className="section-box mt-4" id="certifications">
           <div className="row align-items-center">
               <div className="col-6">
                   <p className="title-heading-titre-six mb-3" data-backdrop-text={certificationsData.mainData.title}>{certificationsData.mainData.title}</p>
                   <h2>{certificationsData.mainData.title2}</h2>
               </div>
               <div className="col-6 text-end">
                   {/* Slider Navigation */}
                   <div className="button-circle button-circle-sm button-circle-outline-dark swiper-custom-prev" onClick={() => sliderRef.current?.slidePrev()}>
                       <i className="bi bi-arrow-left"></i>
                   </div>
                   <div className="button-circle button-circle-sm button-circle-outline-dark swiper-custom-next" onClick={() => sliderRef.current?.slideNext()}>
                       <i className="bi bi-arrow-right"></i>
                   </div>
                   {/* end Slider Navigation */}
               </div>
           </div>
           <Swiper
               onSwiper={it => (sliderRef.current = it)}
               slidesPerView={1}
               spaceBetween={30}
               breakpoints={{
                   // when window width is >= 768px
                   768: {
                       slidesPerView: 1,
                       spaceBetween: 30,
                   },
                   // when window width is >= 992px
                   992: {
                       slidesPerView: 1,
                       spaceBetween: 40,
                   },
                   // when window width is >= 1200px
                   1200: {
                       slidesPerView: 2,
                       spaceBetween: 40,
                   },
               }}
               autoplay={{
                   delay: 4000,
                   disableOnInteraction: false,
               }}
               className="certifications-swiper mt-2"
           >
               {certificationsData.certifications.map((item, index) => (
                   <SwiperSlide key={index}>
                       <div className="certification-box">
                           {/* Badge de certification */}
                           <div className="d-flex justify-content-between align-items-start mb-3">
                               <div className="certification-badge">
                                   <i className="bi bi-award-fill text-primary"></i>
                                   <span className="badge bg-primary ms-2">{item.date}</span>
                               </div>
                           </div>
                           
                           {/* Description */}
                           <p className="certification-description">{item.description}</p>
                           
                           {/* Compétences */}
                           <div className="skills-tags mb-3">
                               {item.skills?.map((skill, skillIndex) => (
                                   <span key={skillIndex} className="skill-tag">
                                       {skill}
                                   </span>
                               ))}
                           </div>
                       </div>
                       
                       {/* Header avec logo et infos */}
                       <div className="d-flex align-items-center certification-header" style={{ zIndex: '-2', position: 'relative' }}>
                           <div className="d-flex align-items-center justify-content-center me-3" style={{ minWidth: 72, minHeight: 72 }}>
                               <Image
                                   className="certification-logo bg-white"
                                   src={item.avatar}
                                   alt={`Logo de ${item.name}`}
                                   width={72}
                                   height={72}
                                   placeholder="blur"
                               />
                           </div>
                           <div className="d-inline-block">
                               <p className="titre-cinq fw-medium m-0 line-height-140">{item.name}</p>
                               <span className="font-small fw-normal text-muted">{item.jobTitle}</span>
                           </div>
                       </div>
                   </SwiperSlide>
               ))}
           </Swiper>
       </div>
   );
}

export default Certifications;