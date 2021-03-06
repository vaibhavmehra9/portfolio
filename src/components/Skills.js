const Skills = () => {
  const skillArr = [
    'JS',
    'React',
    'html5',
    'css3',
    'Next',
    'Node',
    'PYTHON',
    'DS',
    'EXPRESS',
  ];
  return (
    <div className="">
      <h1 className="text-center font-bold text-4xl  text-gray-800">
        Tech Skills
      </h1>
      <div className="grid sm:grid-cols-3  gap-10 grid-cols-1 my-20">
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
