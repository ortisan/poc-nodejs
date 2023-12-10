import { CreateUserDto } from '@/adapter/dto/create-user.dto';
import { User } from '@/domain/entity/user';
import { DateTime } from '@/domain/vo/datetime.vo';
import { Email } from '@/domain/vo/email.vo';
import { Id } from '@/domain/vo/id.vo';
import { Name } from '@/domain/vo/name.vo';
import { Password } from '@/domain/vo/password.vo';
import { IInputAssembler } from './assembler.contract';

export class ApiCreateUserAssembler implements IInputAssembler<CreateUserDto, User> {

  public toDomain(createUserDto: CreateUserDto): User {
    return new User({
      id: new Id({ stringValue: createUserDto.id ?? Id.newId().getValue() }),
      name: new Name({ stringValue: createUserDto.name }),
      email: new Email({ stringValue: createUserDto.email }),
      password: new Password({ stringValue: createUserDto.password }),
      createdAt: new DateTime({
        dateValue: createUserDto.createdAt ?? new Date(),
      }),
      updatedAt: new DateTime({
        dateValue: createUserDto.updatedAt ?? new Date(),
      }),
    });
  }

  public toDto(user: User): CreateUserDto {
    return {
      id: user.id.getValue(),
      name: user.name.getValue(),
      email: user.email.getValue(),
      password: user.password.getValue(),
      createdAt: user.createdAt.getValueAsDate(),
      updatedAt: user.updatedAt.getValueAsDate(),
    };
  }
}
