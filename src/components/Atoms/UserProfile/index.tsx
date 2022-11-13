import { FC } from "react";
import { TUserProfileComponentProps } from "./types";

const UserProfile: FC<TUserProfileComponentProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-2 md:w-auto w-full">
      <div className="bg-white shadow-md gap-3 flex justify-start py-2 px-3 rounded-md items-start flex-col dark:bg-slate-800 md:max-w-sm">
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex relative w-16 h-w-16 justify-center items-center">
            <img
              className="rounded-full"
              src={user.avatar}
              alt={`Foto de perfil de ${user.name}`}
            />
            <div className="bg-green-500 rounded-full w-3 h-3 absolute bottom-0 right-0 border border-white shadow-md"></div>
          </div>
          <h2 className="text-lg font-bold">{user.name}</h2>
        </div>
        <div className="flex items-start flex-col gap-1">
          <div className="flex items-center gap-2">
            <i className="bx bxs-trophy text-lg"></i>
            <p>Conquistas</p>
          </div>
          <div className="flex items-start gap-2">
            {user.badges.map((badge) => (
              <i className={`bx ${badge.icon} text-blue text-lg`}></i>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-sm">
        <button className="w-full flex items-center bg-white dark:bg-slate-800 shadow-md rounded-md py-2 px-3 gap-2 select-none cursor-pointer transition-all hover:bg-blue hover:text-black">
          <i className="bx bx-exit"/>
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
