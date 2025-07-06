import { UserAddModal } from "@/components/ui/modules/UserAddModal";
import UserCard from "@/components/ui/modules/UserCard";
import { useAppDispatch, useAppSelector } from "@/features/hook/hook";
import { removeUser, selectUser } from "@/features/user/userSlice";

const User = () => {
  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeUser(id));
  };

  const handleEdit = (user: any) => {
    console.log("Edit user:", user);
    // এখানে modal বা edit ফর্ম trigger করতে পারো
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">User List</h1>
      <div className="flex justify-end">
        <UserAddModal></UserAddModal>
      </div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default User;
