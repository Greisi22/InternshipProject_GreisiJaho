import { registerUser } from 'src/api/localhost/Login/RegisterAPI';
export async function RegisterHelper(
    email: string,
    password: string,
    rep_password: string,
    role: string,
): Promise<number> {
    if (password != rep_password) {
        return -1;
    }
    const result = await registerUser(email, password, role);
    if (result == 200) {
        return 200;
    }
    return -1;
}
