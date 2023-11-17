export interface IssResponse {
  message: string;
  iss_position: {
    longitude: string;
    latitude: string;
  };
  timestamp: number;
}
