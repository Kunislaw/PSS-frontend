import {Role} from "./Role";
import {Delegation} from "./Delegation";

export interface User {
    id: number;
    companyName: string;
    companyAddress: string;
    companyNip: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    status: boolean;
    registrationDate: Date;
    role: Set<Role>
    delegations: Array<Delegation>;
}
