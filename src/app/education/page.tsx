import Image from "next/image";

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col flex-1 items-center justify-center bg-[#031825]">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#031825] sm:items-start">        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
            Welcome to My Education Section
          </h1>          
        </div>
      </main>
    </div>
  );
}
