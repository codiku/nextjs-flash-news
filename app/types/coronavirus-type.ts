export interface CovidData {
  fips: string;
  country: string;
  state: string | null;
  county: string | null;
  hsa: string | null;
  hsaName: string | null;
  level: string;
  lat: number | null;
  locationId: string;
  long: number | null;
  population: number;
  hsaPopulation: number | null;
  metrics: CovidActNowMetricsData;
  riskLevels: CovidActNowRiskLevelData;
  cdcTransmissionLevel: number;
  communityLevels: CovidActNowCommunityLevelsData;
  actuals: CovidActNowActualsData;
  annotations: CovidActNowAnnotationsData;
  lastUpdatedDate: string;
  url: string | null;
}

interface CovidActNowMetricsData {
  testPositivityRatio: number | null;
  testPositivityRatioDetails: CovidActNowTestPositivityRatioDetailsData;
  caseDensity: number | null;
  weeklyNewCasesPer100k: number | null;
  contactTracerCapacityRatio: number | null;
  infectionRate: number | null;
  infectionRateCI90: number | null;
  icuCapacityRatio: number;
  bedsWithCovidPatientsRatio: number;
  weeklyCovidAdmissionsPer100k: number;
  vaccinationsInitiatedRatio: number;
  vaccinationsCompletedRatio: number;
  vaccinationsAdditionalDoseRatio: number;
  vaccinationsFall2022BivalentBoosterRatio: number;
}

interface CovidActNowTestPositivityRatioDetailsData {
  source: string;
}

interface CovidActNowRiskLevelData {
  overall: number;
  testPositivityRatio: number;
  caseDensity: number;
  contactTracerCapacityRatio: number;
  infectionRate: number;
  icuCapacityRatio: number;
}

interface CovidActNowCommunityLevelsData {
  cdcCommunityLevel: number | null;
  canCommunityLevel: number;
}

interface CovidActNowActualsData {
  cases: number;
  deaths: number;
  positiveTests: number;
  negativeTests: number;
  contactTracers: number;
  hospitalBeds: CovidActNowHospitalBedsData;
  hsaHospitalBeds: CovidActNowHospitalBedsData | null;
  icuBeds: CovidActNowIcuBedsData;
  hsaIcuBeds: CovidActNowIcuBedsData | null;
  newCases: number;
  newDeaths: number;
  vaccinesDistributed: number;
  vaccinationsInitiated: number;
  vaccinationsCompleted: number;
  vaccinationsAdditionalDose: number;
  vaccinationsFall2022BivalentBooster: number;
  vaccinesAdministered: number;
  vaccinesAdministeredDemographics: null | unknown;
  vaccinationsInitiatedDemographics: null | unknown;
}

interface CovidActNowHospitalBedsData {
  capacity: number;
  currentUsageTotal: number;
  currentUsageCovid: number;
  weeklyCovidAdmissions: number;
}

interface CovidActNowIcuBedsData {
  capacity: number;
  currentUsageTotal: number;
  currentUsageCovid: number;
}

interface CovidActNowAnnotationsData {
  // All properties are of type 'null | string'
  cases: null | string;
  deaths: null | string;
  positiveTests: null | string;
  negativeTests: null | string;
  contactTracers: null | string;
  hospitalBeds: null | string;
  hsaHospitalBeds: null | string;
  icuBeds: null | string;
  hsaIcuBeds: null | string;
  newCases: null | string;
  newDeaths: null | string;
  vaccinesDistributed: null | string;
  vaccinationsInitiated: null | string;
  vaccinationsCompleted: null | string;
  vaccinationsAdditionalDose: null | string;
  vaccinationsFall2022BivalentBooster: null | string;
  vaccinesAdministered: null | string;
  testPositivityRatio: null | string;
  caseDensity: null | string;
  weeklyNewCasesPer100k: null | string;
  contactTracerCapacityRatio: null | string;
  infectionRate: null | string;
  infectionRateCI90: null | string;
  icuCapacityRatio: null | string;
  bedsWithCovidPatientsRatio: null;
}
