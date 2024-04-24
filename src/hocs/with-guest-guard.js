import { GuestGuard } from '../components/authentication/guest-guard';

export const withGuestGuard = (Component) => (props) => (
  <GuestGuard>
    <Component {...props} />
  </GuestGuard>
);
