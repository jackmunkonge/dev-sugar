import type { User } from "@prisma/client";
import type { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { mockDeep, mockReset } from "jest-mock-extended";
import type { DeepMockProxy } from "jest-mock-extended";

import { default as prisma } from "../../test/client";
import { createUser, deleteUserByEmail, getUserByEmail, getUserById, verifyLogin } from "./user.server";

jest.mock("../../test/client.ts", () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

describe("User Server", () => {
  const defaultUser: User = {
    id: "abc",
    email: "jack@thesugar.dev",
    isMarketingConsented: false,
    requiredCookiesEnabled: true,
    optionalCookiesEnabled: false,
    banned: false,
    superuser: false,
    createdAt: new Date(1654631940),
    updatedAt: new Date(1654631940),
  };

  describe("#getUserById", () => {
    beforeEach(() => {
      mockReset(prismaMock);
    });

    it("should get user if userId exists", async () => {
      const userId = defaultUser.id;
      prismaMock.user.findUnique.mockResolvedValue(defaultUser);

      const result = await getUserById(userId);

      expect(result).toEqual(defaultUser);
    });
  });

  describe("#getUserByEmail", () => {
    beforeEach(() => {
      mockReset(prismaMock);
    });

    it("should get user if email exists", async () => {
      const userEmail = defaultUser.email;
      prismaMock.user.findUnique.mockResolvedValue(defaultUser);

      const result = await getUserByEmail(userEmail);

      expect(result).toEqual(defaultUser);
    });
  });

  describe("#createUser", () => {
    beforeEach(() => {
      mockReset(prismaMock);
    });

    it("should create user with email", async () => {
      const userEmail = defaultUser.email;
      const userPass = "password123!";
      const bcryptHash = jest.fn().mockResolvedValue("password123!");
      (bcrypt.hash as jest.Mock) = bcryptHash;

      prismaMock.user.create.mockResolvedValue(defaultUser);

      const result = await createUser(userEmail, userPass);

      expect(result).toEqual(defaultUser);
    });
  });

  describe("#deleteUserByEmail", () => {
    beforeEach(() => {
      mockReset(prismaMock);
    });

    it("should delete user", async () => {
      const userEmail = defaultUser.email;

      prismaMock.user.delete.mockResolvedValue(defaultUser);

      const result = await deleteUserByEmail(userEmail);

      expect(result).toEqual(defaultUser);
    });
  });

  describe("#verifyLogin", () => {
    beforeEach(() => {
      mockReset(prismaMock);
      const bcryptCompare = jest.fn().mockResolvedValue(true);
      (bcrypt.compare as jest.Mock) = bcryptCompare;
    });

    it("should return null if no user found", async () => {
      const userEmail = defaultUser.email;
      const userPass = "password123!";

      prismaMock.user.findUnique.mockResolvedValue(null);

      const result = await verifyLogin(userEmail, userPass);

      expect(result).toBeNull();
    });

    it("should return null if no password found for user", async () => {
      const userEmail = defaultUser.email;
      const userPass = "password123!";

      prismaMock.user.findUnique.mockResolvedValue(defaultUser);

      const result = await verifyLogin(userEmail, userPass);

      expect(result).toBeNull();
    });

    it("should return null if password invalid", async () => {
      const userEmail = defaultUser.email;
      const userPass = "password123!";
      const user = {
        ...defaultUser,
        hash: "password123",
        createdAt: new Date(1654631940),
        userId: "abc",
      };
      const bcryptCompare = jest.fn().mockResolvedValue(false);
      (bcrypt.compare as jest.Mock) = bcryptCompare;

      prismaMock.user.findUnique.mockResolvedValue(user);

      const result = await verifyLogin(userEmail, userPass);

      expect(result).toBeNull();
    });

    it("should return user without password", async () => {
      const userEmail = defaultUser.email;
      const userPass = "password123!";
      const user = {
        ...defaultUser,
        password: {
          hash: "password123!",
          createdAt: new Date(1654631940),
          userId: "abc",
        },
      };

      prismaMock.user.findUnique.mockResolvedValue(user);

      const result = await verifyLogin(userEmail, userPass);

      expect(result).toEqual(defaultUser);
    });
  });
});
