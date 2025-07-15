import React from "react";
import { Icon } from "@iconify/react";

const phoneImages = [
  "/about/iMockup - iPhone 15 Pro Max.png",
  "/about/iMockup - iPhone 15 Pro Max-1.png",
  "/about/iMockup - iPhone 15 Pro Max-3.png",
];

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Blue Header Section */}
      <section className="bg-[#0060FE] w-full pt-8 px-4 flex flex-col items-center h-[596px] max-h-h-[600x] overflow-hidden relative">
        <div className="w-full flex flex-col items-center max-w-[80rem] mx-auto">
          <span className="text-white text-sm mb-2 mt-2" style={{fontFamily: 'Product Sans'}}>Contact us</span>
          <h1 className="text-white text-[40px] md:text-[64px] font-bold text-center leading-tight mb-8" style={{fontFamily: 'Product Sans'}}>
            We’re always available to<br className="hidden md:block" /> answer your questions
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

      {/* Contact Info Section */}
      <section className="w-full bg-white px-4 py-12 flex flex-col items-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* In-App Customer Service */}
          <div className="bg-[#0060FE1A]/10 max-h-[683px] py-[87px] px-[40px] rounded-[20px] p-8 flex flex-col items-start shadow-sm">
            <img src="/support-girl.png" alt="Support" className="w-[104px] h-auto mb-[50px]" />
            <h3 className="text-[#0060FE] text-[28px] font-bold mb-[31px]" style={{fontFamily: 'Product Sans'}}>In-App Customer<br />Service</h3>
            <div className="mb-[33px]">
              <Icon icon="hugeicons:hold-phone" width={40} height={40} color="#0060FE" className="inline-block align-middle mr-2" />
            </div>
            <p className="text-[#222] text-[18px]" style={{fontFamily: 'Product Sans'}}>
              Get 24/7 self-service support from payment or job disputes to ride issues all with real-time updates and quick resolutions. Need more help? Chat live with a VAST support agent anytime, anywhere.
            </p>
          </div>

          {/* Mobile */}
          <div className="bg-[#0060FE1A]/10 max-h-[683px] py-[87px] px-[40px] rounded-[20px] p-8 flex flex-col items-start shadow-sm">
            <img src="/support-girl.png" alt="Call" className="w-[104px] h-auto mb-[50px]" />
            <h3 className="text-[#0060FE] text-[28px] font-bold mb-[28px]" style={{fontFamily: 'Product Sans'}}>Mobile</h3>
            <div className="mb-2 flex gap-2">
            
              
             
            </div>
            <div className="text-[#222] flex flex-col justify-start text-[18px] mb-[30px]" style={{fontFamily: 'Product Sans'}}>
            <Icon icon="solar:phone-linear" width={40} height={40} color="#0060FE" className="mb-[10px] inline-block align-middle" />
              +234 7087 2837 36
            </div>

            <div className="text-[#222] flex flex-col justify-start text-[18px] mb-[30px]" style={{fontFamily: 'Product Sans'}}>
            <Icon icon="proicons:location" width={40} height={40} color="#0060FE" className="mb-[10px] inline-block align-middle" />
              Mayne Avenue Calabar,<br />Cross River State
            </div>
            
            <div className="text-[#222] flex flex-col justify-start text-[18px]" style={{fontFamily: 'Product Sans'}}>
            <Icon icon="solar:letter-linear" width={40} height={40} color="#0060FE" className="mb-[10px] inline-block align-middle" />
              Vast@Example.Exgmail.Com
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-[#0060FE1A]/10 max-h-[683px] py-[87px] px-[40px] rounded-[20px] p-8 flex flex-col items-start shadow-sm">
          <img src="/social.png" alt="Call" className="w-[104px] h-auto mb-[50px]" />
            <h3 className="text-[#0060FE] text-[28px] font-bold mb-[50px]" style={{fontFamily: 'Product Sans'}}>Social Media</h3>
            <ul className="text-[#222] text-[18px] space-y-[39px] mt-2" style={{fontFamily: 'Product Sans'}}>
              <li className="flex items-center gap-[30px]"><Icon icon="ri:instagram-fill" width={40} height={40} color="#ffffff" className="bg-[#0060FE] rounded-full p-2" />Instagram</li>
              <li className="flex items-center gap-[30px]"><Icon icon="prime:twitter" width={40} height={40} color="#ffffff" className="bg-[#0060FE] rounded-full p-2" />Twitter</li>
              <li className="flex items-center gap-[30px]"><Icon icon="ri:linkedin-fill" width={40} height={40} color="#ffffff" className="bg-[#0060FE] rounded-full p-2" />Linkedin</li>
              <li className="flex items-center gap-[30px]"><Icon icon="ri:facebook-fill" width={40} height={40} color="#ffffff" className="bg-[#0060FE] rounded-full p-2" />Facebook</li>
            </ul>
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