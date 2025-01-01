import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="h-[calc(100vh-64px)] bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#705949] mb-8">Contactez-moi</h1>

        <div className="flex justify-center gap-16 mt-24">
          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-[#0077b5] text-white flex items-center justify-center rounded-full mb-4 text-3xl">
              <FaLinkedin />
            </div>
            <p className="text-lg text-gray-700">LinkedIn</p>
            <p className="text-sm text-gray-500">https://www.linkedin.com/in/samantha-deschaepmeester/</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-[#333333] text-white flex items-center justify-center rounded-full mb-4 text-3xl">
              <FaEnvelope />
            </div>
            <p className="text-lg text-gray-700">Email</p>
            <p className="text-sm text-gray-500">deschaepmeester.samantha@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}