export interface RegisterUserSchema {
    login:string;
    password: string;
    repeat_password:string;
    isLoading: boolean;
    error: string;
}