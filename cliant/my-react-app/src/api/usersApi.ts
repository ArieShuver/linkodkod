export async function signUp(user: {}, navigate: any) {
    try {
        console.log("data sent to server:", { user });
        const response = await fetch("http://localhost:3000/users/addUsers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user })
        });
        const result = await response.json();
        navigate("/")
        return result.user;
    }
    catch (error) {
        return (error)

    }
}


export async function login(user: {}, navigate: any) {
    {
        try {
            const response = await fetch("http://localhost:3000/users/chacUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
            const data = await response.json();
            // const token: any = response.token;
            // console.log('data chakuser', data);
            console.log(response);

            if (response.status >= 200 && response.status <= 300) {
                navigate("/")
            }
        } catch (error) {
            console.log('error chekuser', error);
            // navigate("/Login")
        }
    }
}
