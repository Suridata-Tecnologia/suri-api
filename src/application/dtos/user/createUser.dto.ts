export interface CreateUserDto {
   
    name: string;
    email: string;
    emailSendAt: Date;
    password: string;
    access: number;
    company: number;
    viewDash: number;
    seeMargin: number;
    rememberToken: string;
    inactive: number;
    emailVerifiedAt: Date;
    receivedEmail: number;
    isSuridataUser: number;
    isBusinessUser: number;
    statusPolicy: string;
    responseDatePolicy: string;
    hasSuriwalletAccess: string;
    birthday: string;
    languageId: number;
    
}