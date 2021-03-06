import { Images } from '../assets/resource';

const About = () => {
  return (
    <div className="flex flex-col justify-center text-center my-20">
      <h1 className="font-bold text-4xl sm:text-7xl text-gray-800">
        Hi, I'm <span className="text-blue-500">Vaibhav Mehra</span>
      </h1>
      <div className="my-10 mx-auto px-5 py-3 rounded-xl  text-2xl font-bold bg-blue-50 text-blue-500">
        Software Engineer
      </div>
      <div className="mx-auto mb-10">
        <img
          src={Images.vaibhav}
          alt="vaibhav mehra"
          className="h-full max-h-80 rounded-xl"
        />
      </div>
      <p className="text-gray-500 text-2xl max-w-2xl mx-auto leading-10">
        Hi I'm Vaibhav Mehra a 24 years old Web Developer from India, currently
        working as a Software Engineer at Tata AIG.
      </p>
    </div>
  );
};

export default About;
