"use client";

import "./modal.css";

import { MODAL_TYPES } from "@/common/modalTypes";

import { Button } from "../button/Button";

import { createReservation } from "@/services/reservationsServices";

type Props = {
  closeHandler: () => void;
  object: string | null;
  reference: number | null;
  type: string;
};

export const Modal = ({
  closeHandler,
  object = null,
  reference = null,
  type,
}: Props) => {
  const submitReservationHandle = async (formData: FormData) => {
    const newReservation = {
      contactName: formData.get("contactName")?.toString() ?? "",
      contactPhoneNumber: formData.get("contactPhoneNumber")?.toString() ?? "",
      mealId: reference ?? 0,
      numberOfGuests: Number(formData.get("numberOfGuests")),
    };

    try {
      const response = await createReservation(newReservation);
      console.log(response);
    } catch (e) {
      throw e;
    }

    closeHandler();
  };

  return (
    <div className="modal-bg">
      <div
        className={
          type === MODAL_TYPES.Create ? "modal-box modal-create" : "modal-box"
        }
      >
        <div className="modal-header">
          {object === "reservation" && (
            <p className="modal-head">Create Reservation</p>
          )}
        </div>
        <form action={submitReservationHandle}>
          <div className="modal-body">
            {object === "reservation" && (
              <div className="form-body">
                <label className="form-label">
                  Contact Name
                  <input
                    className="form-input"
                    type="text"
                    name="contactName"
                  />
                </label>
                <label className="form-label">
                  Contact Number
                  <input
                    className="form-input"
                    type="text"
                    name="contactPhoneNumber"
                  />
                </label>
                <label className="form-label">
                  Number of Guests
                  <input
                    min={1}
                    max={20}
                    className="form-input"
                    type="number"
                    name="numberOfGuests"
                  />
                </label>
              </div>
            )}
          </div>
          <div className="modal-foot">
            <Button
              action={() => {
                return;
              }}
              appearance="primary"
              type="submit"
              text="Submit"
            />
            <Button
              action={closeHandler}
              appearance="cancel"
              text="cancel"
              type="button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
