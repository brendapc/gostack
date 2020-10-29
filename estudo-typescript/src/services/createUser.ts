interface TechObject {
    title: string;
    experience: number;
}

interface UserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}

export default function createUser({ name = '', email, password }: UserData){
    const user = {
        name,
        email,
        password,
    }
    return user
}