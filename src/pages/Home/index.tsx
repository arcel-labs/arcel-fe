import { MOCK_USER_PROFILE } from "../../api/mocks";
import { UserProfile } from "../../components";

const Home = () => {
  return (
    <div className="flex flex-column md:flex-row py-4">
      <UserProfile user={MOCK_USER_PROFILE} />
    </div>
  );
};

export default Home;
