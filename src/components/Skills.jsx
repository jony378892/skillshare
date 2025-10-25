import { use } from "react";
import SkillCard from "./SkillCard";

const skillsPromise = fetch("/data.json").then((res) => res.json());

export default function Skills() {
  const skillsData = use(skillsPromise);

  return (
    <section className=" bg-white py-10 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
        Popular Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill) => (
          <SkillCard skill={skill} key={skill.skillId} />
        ))}
      </div>
    </section>
  );
}
