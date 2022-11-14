import { MOCK_USER_PROFILE } from "../../api/mocks";
import { UserProfile, ChartsComponent } from "../../components";

const Home = () => {
  return (
    <div className="flex flex-column md:flex-row flex-col gap-3 py-4">
      <UserProfile user={MOCK_USER_PROFILE} />
      <div className="dark:text-white dark:bg-slate-800 shadow-md w-full rounded-md relative bg-white p-2 h-full">
        <ChartsComponent />
      </div>
    </div>
  );
};

export default Home;
