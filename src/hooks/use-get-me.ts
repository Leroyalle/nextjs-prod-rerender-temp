import { getMe } from '@/services/user-api';
import { useQuery } from '@tanstack/react-query';

export const useGetMe = () => {
  return useQuery({
    queryFn: getMe,
    queryKey: ['me'],
  });
};
