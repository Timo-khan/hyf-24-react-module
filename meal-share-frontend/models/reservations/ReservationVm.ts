export class ReservationVm {
  Id: number = 0;
  NumberOfGuests: number = 0;
  ContactName: string = "";
  ContactPhoneNumber: string = "";
  CreatedDate: string = "";
  MealId: number = 0;

  constructor(
    id: number,
    numberOfGuests: number,
    contactName: string,
    contactPhoneNumber: string,
    createdDate: string,
    mealId: number
  ) {
    this.Id = id;
    this.NumberOfGuests = numberOfGuests;
    this.ContactName = contactName;
    this.ContactPhoneNumber = contactPhoneNumber;
    this.CreatedDate = createdDate;
    this.MealId = mealId;
  }
}
