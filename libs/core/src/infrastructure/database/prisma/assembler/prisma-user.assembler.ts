import { User } from '@core/domain/entity/user';
import { DateTime } from '@core/domain/vo/datetime.vo';
import { Email } from '@core/domain/vo/email.vo';
import { Id } from '@core/domain/vo/id.vo';
import { Name } from '@core/domain/vo/name.vo';
import { Password } from '@core/domain/vo/password.vo';
import { user as UserModel } from '@prisma/client';
import { IPrismaAssembler } from './prisma.assembler.contract';

export class PrismaUserAssembler implements IPrismaAssembler<UserModel, User> {
  public toDomain(userPrismaModel: UserModel): User {
    return new User({
      id: new Id({ stringValue: userPrismaModel.id }),
      name: new Name({ stringValue: userPrismaModel.name }),
      email: new Email({ stringValue: userPrismaModel.email }),
      password: new Password({ stringValue: userPrismaModel.password }),
      createdAt: new DateTime({ dateValue: userPrismaModel.createdAt }),
      updatedAt: new DateTime({ dateValue: userPrismaModel.updatedAt }),
    });
  }

  public toPrismaModel(user: User): UserModel {
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
