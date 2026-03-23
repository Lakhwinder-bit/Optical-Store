

export default function sectionPage({hadding, title, img}){
    return(

        <>


<div className="group relative overflow-hidden cursor-pointer ">
  
  {/* Image */}
  <img
    src={img}
    alt=""
    className="max-w-[500px] h-[450px] object-cover transition duration-500 group-hover:scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300"></div>

  {/* Text (Hidden → Show on Hover) */}
  <div className="absolute bottom-10 left-4 right-4 
                  opacity-0 translate-y-5 
                  group-hover:opacity-100 group-hover:translate-y-0 
                  transition duration-300 ease-in-out">

    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-black">
        {hadding}
      </h3>
      <p className="text-sm text-gray-700">
        {title}
      </p>
    </div>

  </div>
</div>



  
   
        </>
    )
}