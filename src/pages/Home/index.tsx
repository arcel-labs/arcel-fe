import { MOCK_RECOMMENDED_BOOKS, MOCK_USER_PROFILE } from "../../api/mocks";
import { UserProfile, ChartsComponent } from "../../components";
import Recommended from "../../components/Atoms/Recommended";

const Home = () => {
  return (
    <>
      <div className="flex flex-column md:flex-row flex-col gap-3 py-4">
        <UserProfile user={MOCK_USER_PROFILE} />
        <div className="mb-5 dark:text-white dark:bg-slate-800 shadow-md w-full rounded-md relative bg-white p-2 h-full">
          <ChartsComponent />
          <h2>Recomendações</h2>
          <div className="flex flex-wrap gap-3 mt-5 items-baseline justify-center bg-primary-white dark:bg-slate-900 p-3 rounded-md shadow-md transition">
            {MOCK_RECOMMENDED_BOOKS.map((content: any) => (
              <Recommended content={content} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
