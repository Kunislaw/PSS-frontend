enum transportType {
    CAR,
    TRAIN,
    BUS
}
enum autoCapacity {
    above900,
    beloow900
}
export interface Delegation {
  id: number;
  description: string;
  dateTimeStart: Date;
  dateTimeStop: Date;
  travelDietAmount: number;
  breakfastNumber: number;
  dinnerNumber: number;
  supperNumber: number;
  transportType: transportType;
  registrationData: Date;
  ticketPrice: number;
  autoCapacity: autoCapacity;
  km: number;
  accomodationPrice: number;
  otherTicketsPrice: number;
  otherOutlayDesc: number;
  otherOutlayPrice: number,
}
