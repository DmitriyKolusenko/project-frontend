export class Client {

    constructor(
    public id: number,
    public name: string,
    public surname: string,
    public birthdate: Date,
    public email: string,
//    public password: string,
    public roles: string,
    public adress:{
        city: string,
        country: string,
        postalcode: string,
        street: string,
        house: string,
        flat: string
        })
 {}

}
