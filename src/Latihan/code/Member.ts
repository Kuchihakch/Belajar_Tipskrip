class Member{
    id: string;
    name: string;
    membership: 'guest' | 'admin' | 'member' = 'guest';
    constructor(id: string, name: string,){
        this.id = id;
        this.name = name;
    }
}

export class PremiumMember extends Member{
    premiumSince: number;
    constructor(id:string, name: string ,premiumSince: number){
        super(id, name);
        this.premiumSince = premiumSince
    }
    get memberInfo():string{
        if(this.membership !== 'guest'){
            return `[${this.membership}] - ${this.name}, tergabung sejak ${this.premiumSince} `
        }
        return `[${this.membership}] - ${this.name}`
    }
}