import React, { useState } from "react";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

export const MuiDateAndTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  console.log({ SelectedDate: selectedDate && selectedDate.toDate() });
  console.log({ SelectedTime: selectedTime && selectedTime.locale() });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />

      <TimePicker
        label="Select Time"
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />
    </LocalizationProvider>
  );
};
