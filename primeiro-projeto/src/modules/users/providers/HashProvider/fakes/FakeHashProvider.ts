import iHashProvider from '../models/iHashProvider';
import { hash, compare } from 'bcryptjs';
class FakeHashProvider implements iHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return payload
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed
  }
}

export default FakeHashProvider;
