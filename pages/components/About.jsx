import React from 'react'
import Image from 'next/image';


const About = () => {

  return (
<div className="h-screen  py-14  ">
      <div className="  container  mx-auto flex items-center text-white gap-20 justify-center flex-wrap ">
        <div className="md:flex  md:justify-center sm:inline-block  ">
          <div className="relative sm:w-[445px] sm:h-[600px] w-full flex justify-center " >
          <p className="  text-8xl font-dancing md:mt-48   animate-pulse text-fuchsia-700    ">Hakkımda</p>
          </div>
          
        
        <div className=" md:w-1/2   ">
          <p className="my-5 flex flex-col items-center font-sans text-black ">
          Atılım Üniversitesi Mekatronik Mühendisliği bölümünden mezun oldum. T.C. Sağlık Bakanlığında 
          çalışmaktayım. Saglık Anket Yazılımında görev almaktayım. Veri tabanı oluşturma, verileri raporlama, 
          verileri veri tabanına aktarmakla sorumluyum. Saglık Anket yazılımına istenilen araştırmanın 
          uygunluğuna göre verileri aktarıp Alo 184 Sabim ile aramaları yapmaktayız. Ayrıca Alo 184 Sabim içerisinde bulunan anketör grubuna yazılım sayfasının
          eğitimini verme, grubu koordine etme gibi görevlerim bulunmakta. Bunun dışında React, tailwindcss, next.js ile websitesi geliştirmekteyim.
          </p>
          <p className="text-2xl text-sky-600   ">GERÇEKLEŞTİRDİĞİMİZ ARAŞTIRMALAR</p>
          <p className='text-black'>Turkovac Aşısı Yan Etki Araştırması</p>
          <p className='text-black'>Sağlık Çalışanı Memnuniyet Araştırması</p>
          <p className='text-black'>Evde Sağlık Hizmetileri Hasta Deneyim Araştırması</p>
          <p className='text-black '>Deprem Bölgesi Talep Araştırması</p>
      <div className='flex py-4'>
      <a href="/cv/cv.pdf" download className="button">
      Cv İndir
    </a>
      </div>
      
      </div>
     

   
 
  
        </div>
      </div>
    </div>

  );
  
};

export default About;
