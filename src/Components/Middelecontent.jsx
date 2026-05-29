import './style/Middelecontent.css'

function Middelecontent(){
return <div className="h-screen">
      <div className="h-[calc(100vh-100px)] bg-no-repeat bg-fill bg-right flex justify-between">
        
        <div className=" w-3/6 min-h-full flex justify-center items-center ">
          <div className="h-96 w-80">
            <img
              src=""
              alt=""
              className="object-cover w-full h-full border-4 rounded-2xl border-gray-600"
            />
          </div>
        </div>
        <div className=" w-3/6 min-h-full flex  items-center">
          <div className="w-3/4 pl-11">
            <h2 className="text-4xl font-extrabold leading-20 text-amber-600">Who We Are</h2>
            <p className="pt-6 pl-2">
             We are She Can Foundation, a non-governmental organization registered under the Indian Society Act, 1860, dedicated to empowering women and creating a more equitable society. We provide support, resources, and training to women in communities across the globe, working closely with local organizations, governments, and communities to ensure that our programs are effective and sustainable. Through advocacy campaigns and initiatives, we raise awareness of women's issues. We rely on the support of individuals, corporations, and other organizations to achieve our vision. We believe that by working together, we can revolutionize society and create a better world for all.
            </p>

          </div>
        </div>
      </div>
    </div>


}




export default Middelecontent;