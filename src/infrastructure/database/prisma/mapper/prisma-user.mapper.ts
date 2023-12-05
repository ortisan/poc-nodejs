import { User } from '@/domain/entity/user';
import { DateTime } from '@/domain/vo/datetime.vo';
import { Email } from '@/domain/vo/email.vo';
import { Id } from '@/domain/vo/id.vo';
import { Name } from '@/domain/vo/name.vo';
import { Password } from '@/domain/vo/password.vo';
import { user as UserModel } from '@prisma/client';

export class PrismaUserMapper {
  public static toDomain(userPrismaModel: UserModel): User {
    return new User({
      id: new Id({ stringValue: userPrismaModel.id }),
      name: new Name({ stringValue: userPrismaModel.name }),
      email: new Email({ stringValue: userPrismaModel.email }),
      password: new Password({ stringValue: userPrismaModel.password }),
      createdAt: new DateTime({ dateValue: userPrismaModel.createdAt }),
      updatedAt: new DateTime({ dateValue: userPrismaModel.updatedAt }),
    });
  }

  public static toPrismaModel(user: User): UserModel {
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
