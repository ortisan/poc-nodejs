import { CreateUserDto } from '@web/adapter/dto/create-user.dto';
import { User } from '@core/domain/entity/user';
import { DateTime } from '@core/domain/vo/datetime.vo';
import { Email } from '@core/domain/vo/email.vo';
import { Id } from '@core/domain/vo/id.vo';
import { Name } from '@core/domain/vo/name.vo';
import { Password } from '@core/domain/vo/password.vo';
import { IInputAssembler } from './assembler.contract';

export class ApiCreateUserAssembler
  implements IInputAssembler<CreateUserDto, User>
{
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
