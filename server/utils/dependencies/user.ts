import {UserRepository} from "~~/features/user/domain/user_repository";
import {UserMemory} from "~~/features/user/infrastructure/user_memory";
import {CreateUser} from "~~/features/user/application/create_user";
import {UserService} from "~~/server/utils/service/user_service";
import {LoginUser} from "~~/features/user/application/login_user";
import { UserPrismaData } from "~~/features/user/infrastructure/user_prisma_data";
import prisma from "~~/lib/prisma";

const dao: UserRepository = new UserPrismaData(prisma)
const uc = new CreateUser(dao)
const lg = new LoginUser(dao)
export const service = new UserService(uc, lg)

