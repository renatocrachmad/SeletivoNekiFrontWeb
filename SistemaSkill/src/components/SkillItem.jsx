import React, { useState } from 'react';
import '../styles/SkillItem.css';

const SkillItem = ({ skill, onDelete }) => {
  const [level, setLevel] = useState(skill.level);

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  return (
    <li className="skill-item">
      <img src={skill.imageUrl} alt={skill.name} />
      <div>
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
        <input
          type="text"
          value={level}
          onChange={handleLevelChange}
        />
      </div>
      <button onClick={() => onDelete(skill.id)}>Delete</button>
    </li>
  );
};

export default SkillItem;
