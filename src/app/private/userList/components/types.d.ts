export interface FormDataProps {
  name: string;
  roles: "admin" | "write" | "read";
  email: string;
}

export interface EditUserModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  user: UserProps | null;
  refetch: () => void;
}

export interface TableProps {
  users: UserProps[];
  handleUseredit: (user: UserProps) => void;
}
