import { getUser } from "../database/users";
import DetailRow from "./DetailRow";
import ChangePasswordForm from "./ChangePasswordForm";

export default async function AccountPage() {
  const user = await getUser();

  return (
    <main>
      <section>
        <h1>Personal details</h1>
        <DetailRow label="First Name">{user?.firstName}</DetailRow>
        <DetailRow label="Last Name">{user?.lastName}</DetailRow>
        <DetailRow label="Email">{user?.email}</DetailRow>
      </section>
      <section>
        <h1>Account</h1>
        <ChangePasswordForm />
      </section>
    </main>
  );
}
