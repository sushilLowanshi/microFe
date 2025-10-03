export const remotes = {
  auth: () => import("auth/AuthApp"),
  booking: () => import("booking/BookingApp"),
  reporting: () => import("reporting/ReportingApp"),
};
