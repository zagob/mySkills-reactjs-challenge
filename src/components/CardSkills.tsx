
interface CardSkillsProps {
    title: string;
    onclick: () => void;
}

export function CardSkills({ title, onclick }:CardSkillsProps) {
    return (
            <button 
                onClick={onclick} 
                className="rounded-md my-3 bg-black flex 
                justify-center items-center w-full h-8 
                text-gray-300 hover:bg-gray-900">{title}</button>
    )
}