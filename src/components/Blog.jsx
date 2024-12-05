import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div className="w-11/12 mx-auto px-5 md:px-10 lg:px-14">
             <h2 className="text-center text-4xl font-bold text-red-500 mb-10">Our Blogs</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* blog one */}
              <div>
                <img className="rounded-xl w-full h-[250px] object-cover" src="https://i.ibb.co.com/gDWprXC/istockphoto-1317927924-612x612.jpg" alt="" />
                <h4 className="text-center text-xl font-bold text-red-500 mt-5 mb-3">Have you watched the latest video ?</h4>
                <p className="text-sm text-center text-gray-600"> It asks whether the person has seen the most recent video that was released or shared.The speaker likely wants to discuss the content of the video or knows something important.</p>
              </div>
               {/* blog two */}
               <div>
                <img className="rounded-xl w-full h-[250px] object-cover" src="https://i.ibb.co.com/kJq1THV/istockphoto-1412871535-612x612.jpg" alt="" />
                <h4 className="text-center text-xl font-bold text-red-500 mt-5 mb-3">promote video on playtube ?</h4>
                <p className="text-sm text-center text-gray-600"> Promoting a video on PlayTube involves increasing its visibility and reach to attract more viewers. This can be achieved through various strategies such as optimizing the video’s title, description.</p>
              </div>
              {/* blog three */}
              <div>
                <img className="rounded-xl w-full h-[250px] object-cover" src="https://i.ibb.co.com/Dwrh2pj/Person-Using-Facebook-on-Laptop-and-Phone.jpg" alt="" />
                <h4 className="text-center text-xl font-bold text-red-500 mt-5 mb-3">promote video on Facebook ?</h4>
                <p className="text-sm text-center text-gray-600"> Promoting a video on Facebook involves increasing its visibility and reach to attract more viewers. This can be achieved through various strategies such as optimizing the video’s title, description.</p>
              </div>
             </div>
             <div className="flex justify-center my-14">
              <Link to="/allMovies"><button className="btn text-lg font-semibold text-white bg-red-500">See More</button></Link>
              </div>
        </div>
    );
};

export default Blog;