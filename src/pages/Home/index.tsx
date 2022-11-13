import { MOCK_USER_PROFILE } from "../../api/mocks";
import { UserProfile } from "../../components";
import Charts from "../../components/Atoms/Charts";

const Home = () => {
  return (
    <div className="flex flex-column md:flex-row flex-col gap-3 py-4">
      <UserProfile user={MOCK_USER_PROFILE} />
      <div className="dark:text-white dark:bg-slate-800 w-full max-h-96 h-screen rounded-md">
        <Charts />
      </div>
    </div>
  );
};

export default Home;
