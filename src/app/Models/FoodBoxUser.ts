export class FoodBoxUser {
  constructor(
    private id: number,

    private name: string,

    private email: string,

    private password: string,

    private address: string,

    private phoneNumber: string,

    private userTypeAdmin:boolean
  ) {}
}
