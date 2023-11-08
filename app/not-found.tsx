import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transpare">
      <h2 className="text-4xl text-gray-800 font-bold">No Funciona la Ruta</h2>
      <p className="text-lg text-gray-600 mt-4">Could not find the requested resource.</p>
      <Link href="/">
        <div 
                className="
                font-bold px-3 py-2 
                dark:text-slate-200 
                text-slate-700 
                rounded-lg 
                dark:hover:bg-slate-900 
                hover:bg-slate-100
                dark:hover:text-slate-200 
                hover:text-slate-900
                ">
        Return Home
        </div>
      </Link>
    </div>
  );
}