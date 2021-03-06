const About = () => {
  return (
    <div className="h-screen flex flex-col justify-center text-center">
      <h1 className="font-bold text-6xl text-gray-800">
        Hi, I'm <span className="text-indigo-500">Vaibhav Mehra</span>
      </h1>
      <div className="my-10 mx-auto px-5 py-3 rounded-xl shadow-md text-2xl font-bold bg-indigo-100 text-indigo-500">
        Software Engineer
      </div>
      <p className="text-gray-500 text-xl max-w-xl mx-auto leading-10">
        Hi I'm Vaibhav Mehra a 24 years old Web Developer from Delhi, India. I'm
        currently working as a Software Engineer at Tata AIG.
      </p>
    </div>
  );
};

export default About;
