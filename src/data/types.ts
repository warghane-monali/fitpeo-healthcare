export interface Appointment {
    id: number;
    appointmentName: string;
    icon: string; // assuming SVG imported as string (default behavior with Vite/webpack)
    time: string;
}

export interface ScheduleItem {
    day: string;
    appointments: Appointment[];
}

export interface Schedule {
    id: number;
    appointmentName: string;
    icon: string; // assuming SVG imported as string (default behavior with Vite/webpack)
    time: string;
    drName :string
    selected : boolean
}

export interface TimeSlot {
  day : string;
  date: string;
  times: string[];
}