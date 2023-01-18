export class Products {
  public _id?: number;
  public name: string;
  public price: number;
  public description: string;
  public image: string;
  public category: string;
  public quantity: number;

  constructor(
    name: string,
    price: number,
    description: string,
    image: string,
    category: string,
    quantity: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
    this.quantity = quantity;
  }
}
