import { useForm } from 'react-hook-form';
import { useAppStore } from '../store/store';
import { Button } from './ui/button';
import { Input } from "./ui/input"

const UsernameInput = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<{ username: string }>();
  const setUser = useAppStore((state) => state.setUser);
  const user = useAppStore((state) => state.user);

  const onSubmit = (data: { username: string }) => {
    if (data.username.trim()) setUser(data.username.trim());
  };

  if (user) return null;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-2'>
          <Input
            type="text"
            placeholder="Enter your nickname"
            {...register('username', { required: 'Nickname is required' })}
          />
          <Button type="submit">Save</Button>
          {errors.username && (
            <div style={{ color: 'red', marginTop: 4 }}>{errors.username.message}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default UsernameInput; 