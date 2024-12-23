import { IsString, MaxLength, MinLength } from "class-validator";

export class LoginDTO {
    @IsString()
    @MinLength(3, {message: "Min length login 3 characters"})
    @MaxLength(10,{message: "Max length login 10 characters"})
    login:string;
    
    @IsString()
    password:string;
}

export class RegisterDTO {
    @IsString()
    @MinLength(3, {message: "Min length login 3 characters"})
    @MaxLength(10,{message: "Max length login 10 characters"})
    login:string;
    
    @IsString()
    password: string;
    
    @IsString()
    repeat_password: string;
}


export interface RefreshDTO {
    token:string;
}

