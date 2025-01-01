import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="h-[calc(100vh-64px)] bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-3xl md:text-4xl  font-bold text-[#705949] mb-8">Contactez-moi</h1>

        <div className="flex flex-wrap justify-center gap-16 mt-24 px-6">
          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-16 sm:h-16 md:w-32 md:h-32 bg-[#0077b5] text-white flex items-center justify-center rounded-full mb-4 text-3xl sm:text-2xl md:text-6xl">
              <FaLinkedin />
            </div>
            <p className="text-lg sm:text-base md:text-3xl text-gray-700">LinkedIn</p>
            <p className="text-sm sm:text-xs md:text-xl text-gray-500">https://www.linkedin.com/in/samantha-deschaepmeester/</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-16 sm:h-16 md:w-32 md:h-32 bg-[#333333] text-white flex items-center justify-center rounded-full mb-4 text-3xl sm:text-2xl md:text-6xl">
              <FaEnvelope />
            </div>
            <p className="text-lg sm:text-base md:text-3xl text-gray-700">Email</p>
            <p className="text-sm sm:text-xs md:text-xl text-gray-500">deschaepmeester.samantha@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}