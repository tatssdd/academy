import { DatePickerInput } from '@mantine/dates';
import { useState } from 'react';
import '@mantine/core/styles.css';
import './my-calendar.css';

function MyCalendar() {
  const [value, setValue] = useState<Date[]>([]);

  return (
    <div>
      <DatePickerInput
        type="multiple"
        label="Pick dates"
        placeholder="Pick dates"
        value={value}
        onChange={setValue}
      />
      <div className="date-cells"></div>
    </div>
  );
}

export default MyCalendar;
