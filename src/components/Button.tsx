import { HTMLProps } from 'react';

interface MyButtonProps extends HTMLProps<HTMLButtonElement> {
    title: string;
}
export function Button({ title, type, ...rest }: MyButtonProps) {
    return (
        <button className="text-white w-10/12 
                duration-150 bg-green-600 hover:bg-green-500"
                type="button"
                {...rest}
                >{title}</button>
    )
}