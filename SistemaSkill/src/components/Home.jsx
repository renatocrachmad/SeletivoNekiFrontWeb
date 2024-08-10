import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import SkillItem from './SkillItem';
import SkillModal from './SkillModal';
import { getSkills, addSkill, deleteSkill } from '../services/api';
import '../styles/Home.css';

const Home = () => {
  const { logout } = useAuth();
  const [skills, setSkills] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Chamada de API para obter as skills
    const fetchSkills = async () => {
      const result = await getSkills();
      setSkills(result);
    };
    fetchSkills();
  }, []);

  const handleAddSkill = async (skill) => {
    const newSkill = await addSkill(skill);
    setSkills([...skills, newSkill]);
    setShowModal(false);
  };

  const handleDeleteSkill = async (skillId) => {
    await deleteSkill(skillId);
    setSkills(skills.filter((skill) => skill.id !== skillId));
  };

  return (
    <div className="home-container">
      <h1>Minhas Skills</h1>
      <ul>
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} onDelete={handleDeleteSkill} />
        ))}
      </ul>
      <button onClick={() => setShowModal(true)}>Adicionar Skill</button>
      <button onClick={logout}>Logout</button>
      {showModal && <SkillModal onSave={handleAddSkill} onCancel={() => setShowModal(false)} />}
    </div>
  );
};

export default Home;
