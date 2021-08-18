import { useState } from "react"
import { Button } from "../components/Button";
import { CardSkills } from "../components/CardSkills";

interface MyPropsSkills {
    id: string;
    title: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<MyPropsSkills[]>([]);

    function handleAddNewSkill() {
        const newDateSkill = {
            id: String(new Date().getTime()),
            title: newSkill
        }
        setMySkills(oldState => [...oldState, newDateSkill])
    }

    function handleDeleteSkill(id: string) {
        setMySkills(oldState => oldState.filter(item => 
            item.id !== id
        ))
    }

    return (
        <div className="bg-gray-700 h-screen w-screen flex justify-center items-center">
            <section className="w-11/12 h-5/6 flex flex-col justify-start py-5 
            gap-2 items-center sm:w-2/5">
                <input 
                    className="bg-transparent border bg-gray-600 text-white w-10/12 px-2"
                    value={newSkill}
                    onChange={e => setNewSkill(e.target.value)}
                />
                <Button 
                    title="Add"
                    onClick={handleAddNewSkill}
                />

                <div className=" h-screen w-10/12 p-5 overflow-y-scroll">
                    {mySkills.map(item => (
                        <CardSkills 
                            key={item.id} 
                            title={item.title} 
                            onclick={() => handleDeleteSkill(item.id)} 
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}