import http from "../data/api/httpCommon";

type CreateReservationRequest = {
  contactName: string;
  contactPhoneNumber: string;
  mealId: number;
  numberOfGuests: number;
};

export const createReservation = async (data: CreateReservationRequest) => {
  const response = await http.post("reservations", data);
  console.log(response);
  return response;
};
