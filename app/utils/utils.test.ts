import { validateEmail } from "./utils";

describe("Utils", () => {
  describe("#validateEmail", () => {
    test("returns false for non-emails", () => {
      expect(validateEmail(undefined)).toBe(false);
      expect(validateEmail(null)).toBe(false);
      expect(validateEmail("")).toBe(false);
      expect(validateEmail("not-an-email")).toBe(false);
      expect(validateEmail("n@")).toBe(false);
      expect(validateEmail("kody@example")).toBe(false);
    });

    test("returns true for emails", () => {
      expect(validateEmail("kody@example.com")).toBe(true);
    });
  });
});
