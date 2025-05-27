interface RawDataItem {
  day: string;
  values: [number, number, number];
}

export interface FormattedDataItem {
  day: string;
  val1: number;
  val2: number;
  val3: number;
}

export const Data: RawDataItem[] = [
  { day: 'Mon', values: [40, 60, 80] },
  { day: 'Tue', values: [30, 50, 70] },
  { day: 'Wed', values: [20, 40, 60] },
  { day: 'Thu', values: [50, 70, 90] },
  { day: 'Fri', values: [60, 30, 100] },
  { day: 'Sat', values: [30, 50, 70] },
  { day: 'Sun', values: [20, 40, 60] },
];