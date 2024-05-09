import { registerUser } from 'src/api/localhost/Login/RegisterAPI';
export async function RegisterHelper(
    email: string,
    password: string,
    rep_password: string,
    role: string,
) {
  
    if (password != rep_password) {
        return -1;
    }

    const result = await registerUser(email, password, role);
    return result;
}
