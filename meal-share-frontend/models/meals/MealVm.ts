export class MealVm {
  MealId: number = 0;
  Title: string = "";
  Description: string = "";
  Location: string = "";
  MaxReservation: number = 0;
  When: string = "";
  Price: number = 0;
  CreatedDate: string = "";

  constructor(
    mealId: number,
    title: string,
    description: string,
    location: string,
    maxReservation: number,
    when: string,
    price: number,
    createdDate: string
  ) {
    this.MealId = mealId;
    this.Title = title;
    this.Description = description;
    this.Location = location;
    this.MaxReservation = maxReservation;
    this.When = when;
    this.Price = price;
    this.CreatedDate = createdDate;
  }
}
