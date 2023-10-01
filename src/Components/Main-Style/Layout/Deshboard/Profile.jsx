import useAuth from "../../../../🟢AuthProvider/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="flex h-screen flex-col px-8 text-center items-center w-full justify-center space-y-5">
      <h2 className="text-3xl font-bold">
        Hi <span className="text-green-500">{user.displayName} </span>

      </h2>
    </div>
  );
};

export default Profile;
