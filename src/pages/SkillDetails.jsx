import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillsDetailsCard from "../components/SkillsDetailsCard";

export default function SkillDetails() {
  const [skill, setSkill] = useState({});
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const skillDetails = data.find((skillData) => skillData.skillId == id);
    setSkill(skillDetails);
  }, [data, id]);

  return (
    <div>
      <SkillsDetailsCard skill={skill} />
    </div>
  );
}
