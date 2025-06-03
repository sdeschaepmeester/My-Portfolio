import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="h-[calc(100vh-64px)] bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#705949] mb-12">Contactez-moi</h1>

        <div className="flex flex-wrap justify-center gap-12 mt-12 px-2 md:px-6">
          {/* LinkedIn */}
          <div className="flex flex-col items-center w-44 md:w-56">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0077b5] text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
              <FaLinkedin />
            </div>
            <p className="text-lg md:text-xl text-gray-700 font-semibold">LinkedIn</p>
            <p className="text-sm md:text-base text-gray-500 break-words text-center">
              samantha-deschaepmeester
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center w-44 md:w-56">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#333333] text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
              <FaEnvelope />
            </div>
            <p className="text-lg md:text-xl text-gray-700 font-semibold">Email</p>
            <p className="text-sm md:text-base text-gray-500 break-words text-center">
              deschaepmeester.samantha@gmail.com
            </p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center w-44 md:w-56">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#24292e] text-white flex items-center justify-center rounded-full mb-4 text-3xl md:text-5xl">
              <FaGithub />
            </div>
            <p className="text-lg md:text-xl text-gray-700 font-semibold">GitHub</p>
            <p className="text-sm md:text-base text-gray-500 break-words text-center">
              https://github.com/sdeschaepmeester
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}