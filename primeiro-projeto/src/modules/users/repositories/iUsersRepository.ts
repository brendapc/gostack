import iCreateUserDTO from "../dtos/iCreateUserDTO";
import User from "../infra/typeorm/entities/User";

export default interface iUsersRepository {
    findById(id: string): Promise<User | undefined>
    findByEmail(email: string): Promise<User | undefined>
    create(data: iCreateUserDTO): Promise<User>
    save(user: User): Promise<User>
}