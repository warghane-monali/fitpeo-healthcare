import Injection from "../assets/syringe-svgrepo-com.svg";
import Eye from "../assets/eye-svgrepo-com.svg";
import Heart from "../assets/heart-svgrepo-com.svg";
import Man from "../assets/man-office-worker-light-skin-tone-svgrepo-com.svg";
import { ScheduleItem } from "./types";

export const upcomingScheduleData: ScheduleItem[] = [
  {
    day: 'Thursday',
    appointments: [
      {
        id: 1,
        appointmentName: "Health Checkup Complete",
        icon: Injection,
        time: "11:00 AM",
      },
      {
        id: 2,
        appointmentName: "Ophthalmologist",
        icon: Eye,
        time: "14:00 PM",
      },
    ],
  },
  {
    day: 'Saturday',
    appointments: [
      {
        id: 1,
        appointmentName: "Cardiologist",
        icon: Heart,
        time: "12:00 AM",
      },
      {
        id: 2,
        appointmentName: "Neurologist",
        icon: Man,
        time: "16:00 PM",
      },
    ],
  },
];
