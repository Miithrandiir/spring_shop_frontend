import React, {DetailedHTMLProps} from "react";

export interface InputProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: string | undefined;
}


const Input = function ({icon = undefined, ...props}: InputProps) {

    return <div className="app-input">
        <input {...(props)}/>
    </div>
}

export default Input;
