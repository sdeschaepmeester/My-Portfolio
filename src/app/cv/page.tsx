export default function CV() {
  return (
    <div className="h-[calc(100vh-64px)] bg-gray-100 py-10 px-4 flex flex-col items-center">
      <div className="max-w-6xl text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#705949]">Mon CV</h1>
        <p className="text-gray-600 mb-12">
          Je recherche activement un emploi en tant que chef de projet technique / PO. Disponibilité immédiate.
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <iframe
          src="/CV_Deschaepmeester_Samantha.pdf"
          className="w-[85%] max-w-7xl h-[85vh] border-2 border-gray-300 shadow-lg"
          title="Mon CV"
        />
      </div>
    </div>
  );
}