import {UserProps, UserPaginationProps} from '@/types/generic'
export interface FormDataProps {
  name?: string;
  roles?: string | null | undefined;
  email?: string;
  password?: string;
}

export interface EditUserModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  user: UserProps | null;
  refetch: () => void;
}

export interface TableProps {
  // paginatedUsers: UserPaginationProps;
  handleUseredit: (user: UserProps) => void;
}
