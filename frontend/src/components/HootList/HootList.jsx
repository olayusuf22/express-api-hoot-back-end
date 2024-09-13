// src/components/HootList/HootList.jsx
import { Link } from 'react-router-dom';

const HootList = ({ hoots }) => {
  return (
    <div>
      {hoots.map((hoot) => (
        <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
          <div>
            <h3>{hoot.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HootList;
