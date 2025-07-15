import React from "react";

const phoneImages = [
  "/about/iMockup - iPhone 15 Pro Max.png",
  "/about/iMockup - iPhone 15 Pro Max-1.png",
  "/about/iMockup - iPhone 15 Pro Max-2.png",
];

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Blue Header Section */}
      <section className="bg-[#0060FE] w-full pt-8 px-4 flex flex-col items-center h-[596px] max-h-h-[600x] overflow-hidden relative">
        <div className="w-full flex flex-col items-center max-w-[80rem] mx-auto">
          <span className="text-white text-sm mb-2 mt-2" style={{fontFamily: 'Product Sans'}}>About us</span>
          <h1 className="text-white text-[40px] md:text-[64px] font-bold text-center leading-tight mb-8" style={{fontFamily: 'Product Sans'}}>
            Powering Everyday Solutions<br className="hidden md:block" /> with Smart Technology.
          </h1>
          {/* Phone mockups */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-3xl mx-auto gap-6 mt-10 absolute top-[272px] md:top-[305px] w-full">
            {phoneImages.map((src, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={src} alt={`Phone mockup ${i+1}`} className="w-[201.62380981445312px] h-auto rounded-xl shadow-lg" />
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Info Section */}
      <section className="w-full bg-white px-4 py-12 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col gap-[40px]">
          {/* Left: Who we are */}
          <div className="flex justify-start flex-wrap">
           <div className="max-w-[736px] ">
           <h2 className="text-[#0060FE] text-3xl md:text-[40px] font-bold mb-6" style={{fontFamily: 'Product Sans'}}>Who we are</h2>
            <p className="text-[#222] text-[20px] leading-relaxed" style={{fontFamily: 'Product Sans'}}>
              Welcome to Vast App, a product of Nikri Synergies LTD. We are a dynamic company that leverages technology to drive innovation in various sectors. Our mission is to provide efficient, reliable, and sustainable solutions that meet the evolving needs of our customers.
            </p>
           </div>
          </div>

          <div className="flex justify-end flex-wrap">
           <div className="max-w-[736px] ">
           <h3 className="text-[#0060FE] text-3xl md:text-[40px] font-bold mb-6" style={{fontFamily: 'Product Sans'}}>Our Mission</h3>
              <p className="text-[#222] text-base md:text-lg leading-relaxed" style={{fontFamily: 'Product Sans'}}>
                At Vast App, powered by Nikri Synergies LTD, our mission is to harness the power of technology to drive innovation and excellence in our services. We are committed to providing exceptional customer service, building long-term relationships, and contributing to the growth and development of our community.<br/><br/>
                To empower individuals and businesses by providing a comprehensive platform that connects service providers, riders, and customers.
              </p>
           </div>
          </div>

          <div className="flex justify-start flex-wrap">
           <div className="max-w-[736px] ">
           <h3 className="text-[#0060FE] text-3xl md:text-[40px] font-bold mb-6" style={{fontFamily: 'Product Sans'}}>Our Vision</h3>
              <p className="text-[#222] text-base md:text-lg leading-relaxed" style={{fontFamily: 'Product Sans'}}>
              Our vision is to become a leading provider of innovative solutions, revolutionizing the way people work, travel, and transact, driving our business with technology to deliver exceptional customer service, and commitment to excellence. We aim to make a positive impact on our community and contribute to the country’s economic growth and development.
              </p>
           </div>
          </div>

          
        </div>
      </section>
      
      {/* Blue Callout Section */}
      <section className="w-full flex justify-center items-center py-8 px-4 min-h-[250px]">
        <div className="bg-[#0060FE] rounded-[20px] w-full max-w-7xl flex items-center justify-center  bg-[url('/geometiric-bg.png')] bg-cover bg-center bg-no-repeat">
          <span className="text-white text-lg md:text-2xl bg-[#0060FE]/80 rounded-[20px] font-semibold text-center py-[95px] px-[24px] md:px-[110px]" style={{fontFamily: 'Product Sans'}}>
            VAST empowers individuals and businesses across Nigeria with access to essential services, secure payments, and tools to work, move, and earn all in one app.
          </span>
        </div>
      </section>
    </main>
  );
} 