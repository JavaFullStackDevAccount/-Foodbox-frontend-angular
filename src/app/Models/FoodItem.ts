export class FoodItem {
  constructor(
    private id: number,

    private title: string,

    private price: number,

    private discount: number,

    private category: string,

    private imageUrl: string,

    private rating: number,

    private description: string,

    private publicVisiblity: boolean
  ) {}
}
