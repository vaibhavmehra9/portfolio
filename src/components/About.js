import { Images } from '../assets/resource';
import { name, description, title } from '../data.json';

const About = () => {
  return (
    <div className="flex flex-col justify-center text-center my-20">
      <h1 className="font-bold text-4xl sm:text-7xl text-gray-800">
        Hi, I'm <span className="text-green-500">{name}</span>
      </h1>
      <div className="my-10 mx-auto px-5 py-3 rounded-xl  text-2xl font-bold bg-green-50 text-green-500">
        {title}
      </div>
      <div className="mx-auto mb-10">
        <img
          src={Images.vaibhav}
          alt="vaibhav mehra"
          className="h-full max-h-80 rounded-xl"
        />
      </div>
      <p className="text-gray-500 text-2xl max-w-2xl mx-auto leading-10">
        {description}
      </p>
    </div>
  );
};

export default About;
