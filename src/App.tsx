export default function App() {
    return (
       <>
           <nav className="bg-gray-800">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="flex items-center justify-between h-16">
                       <div className="flex-shrink-0">
                           <a href="#" className="text-white font-bold text-xl">Logo</a>
                       </div>
                       <div className="hidden md:block">
                           <ul className="flex space-x-4">
                               <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                               <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                               <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                               <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                           </ul>
                       </div>
                   </div>
               </div>
           </nav>

       </>
    )
}
