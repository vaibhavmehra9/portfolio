const Skills = () => {
  const skillArr = ['JS', 'React', 'html5', 'css3', 'Next', 'Node', 'PYTHON'];
  return (
    <div className="">
      <h1 className="text-center font-bold text-4xl my-20 text-gray-800">
        Tech Skills
      </h1>
      <div className="grid grid-cols-4 gap-10">
        {skillArr.map((skill) => (
          <div className="bg-blue-100 px-5 py-3 rounded-xl shadow-md text-2xl font-bold text-blue-500 text-center uppercase">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
