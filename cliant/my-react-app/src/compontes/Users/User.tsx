import { useState } from "react";
import { useNavigate } from "react-router";
import { signUp, login } from "../../api/usersApi"

export type TypeCard = {
    type: "Login" | "Signup";
};

export default function User({ type }: TypeCard) {
    const [user, setUser] = useState({ name: "", password: "" })
    let navigate = useNavigate()

    return (

        <div className='addUser' >
            <h2>{type}</h2>
            <input type="text" id='userName' placeholder=" name" required onChange={(e) =>
                setUser({ ...user, name: e.target.value })} />
            <input type="password" id='passweord' placeholder="password" required onChange={(e) =>
                setUser({ ...user, password: e.target.value })} />
            <button type='submit' onClick={() =>
                type === "Login" ? login(user, navigate) : signUp(user, navigate)}>submit</button>
        </div>
    )
}

