import Button from '../button/Button';
import './Card.css';

const Card = ({ title, content }) => {
  return (
    <div className='w-lg bg-indigo-500/50 p-6 rounded-md border-black grid place-content-center'>
      <div className='text-3xl font-bold underline'>{title}</div>
      <p>{content}</p>
      <Button />
    </div>
  );
};

export default Card;
