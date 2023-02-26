import Image from 'next/image';

export default function Skill({ skill }) {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="m-auto">
        <Image src={skill.image} width="64px" height="64px" alt="/" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3>{`${skill.name}`}</h3>
      </div>
    </div>
  );
}
