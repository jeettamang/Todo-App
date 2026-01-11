import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Amazing{" "}
              <span className="gradient-text bg-gradient-to-r from-pink-500 to-yellow-500">
                Digital Experiences
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              It's your turn to try adding todo list, deleting and editing. Just
              try and get some experience and then try to build the same after
              observed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => {
                  navigate("/todo");
                }}
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:from-pink-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Go to todo List
              </button>
              <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30" />
              <img
                src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                alt="Hero Image"
                className="relative z-10 w-full floating"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
};

export default Home;
