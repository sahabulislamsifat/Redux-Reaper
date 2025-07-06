import type { IUser } from "@/types";

interface UserCardProps {
  user: IUser;
  onEdit: (user: IUser) => void;
  onDelete: (id: string) => void;
}

const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  return (
    <div className="outline-5 shadow-md rounded-none p-4 flex items-center justify-between my-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-200">{user?.title}</h2>
        <p className="text-sm text-gray-300">ID: {user.id}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(user)}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
