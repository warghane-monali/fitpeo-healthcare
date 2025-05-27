import { Schedule } from "./types";
import Tooth from "../assets/tooth-svgrepo-com.svg";
import Biceps from "../assets/flexed-biceps-svgrepo-com.svg"


export const scheduleData: Schedule[] = [
    {
        id : 1,
        appointmentName: "Dentist",
        icon : Tooth,
        time : "9:00 - 11:00",
        drName : "Dr Cameron Williamson",
        selected : true
    },
    {
        id : 2,
        appointmentName: "Physiotherapy Appointment",
        icon : Biceps,
        time : "11:00 - 12:00",
        drName : " Dr Kevin Djones",
        selected : false
    }
]