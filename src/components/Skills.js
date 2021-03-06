import { skills } from '../data.json';

const Skills = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-4xl  text-gray-800">
        Tech Skills
      </h1>
      <div className="grid sm:grid-cols-3  gap-10 grid-cols-1 my-20">
        {skills.map((skill, index) => (
          <div
            className="bg-green-50 px-5 py-3 rounded-xl  text-2xl font-bold text-green-500 text-center uppercase"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
