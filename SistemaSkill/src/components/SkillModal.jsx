import React, { useState, useEffect } from 'react';
import '../styles/SkillModal.css';

const SkillModal = ({ onSave, onCancel }) => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    // Chamada de API para obter as skills
    const fetchSkills = async () => {
      const result = await api.getAvailableSkills();
      setSkills(result);
    };
    fetchSkills();
  }, []);

  const handleSave = () => {
    if (selectedSkill) {
      onSave(selectedSkill);
    }
  };

  return (
    <div className="modal">
      <h2>Selecione a Skill</h2>
      <select onChange={(e) => setSelectedSkill(e.target.value)}>
        <option value="">Selecione a skill</option>
        {skills.map((skill) => (
          <option key={skill.id} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </select>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default SkillModal;
