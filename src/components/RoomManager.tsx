import { useAppStore } from '../store/store';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from "./ui/input"

const RoomManager = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<{ room: string }>();
  const setRoom = useAppStore((state) => state.setRoom);
  const room = useAppStore((state) => state.room);
  const user = useAppStore((state) => state.user);

  if (!user) return null;
  if (room) return <div>Room: {room}</div>;

  const onSubmit = (data: { room: string }) => {
    if (data.room.trim()) setRoom(data.room.trim());
  };

  return (
    <div>
      <form>
        <Input
          type="text"
          placeholder="Room name or ID"
          {...register('room', { required: 'Room name or ID is required' })}
        />
        <Button onClick={handleSubmit(onSubmit)}>Create Room</Button>
        <Button onClick={handleSubmit(onSubmit)}>Join Room</Button>
        {errors.room && (
          <div style={{ color: 'red', marginTop: 4 }}>{errors.room.message}</div>
        )}
      </form>
    </div>
  );
};

export default RoomManager; 