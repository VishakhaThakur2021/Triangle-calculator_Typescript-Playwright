import { test, expect } from "@playwright/test";
import { TrianglePage } from "../tests/pages/trianglepage";
import { CONFIG } from "../tests/config/config";

test.describe(" Validating Endpoint Tests", () => {
  test("should handle decimal side lengths", async ({ request }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);
    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.VALIDATION_DATA.decimalSides
    );

    expect(status).toBe(200);
    expect(body).toHaveProperty("result", "This is equilateral triangle");
  });

  test("should return an error for invalid sides", async ({ request }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);
    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.VALIDATION_DATA.invalideSides
    );

    expect(status).toBe(418);
    expect(body).toHaveProperty(
      "error",
      "Sum of any 2 sides should be greater than the 3rd"
    );
  });

  test("should handle missing fields", async ({ request }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);
    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.VALIDATION_DATA.missingfield
    );

    expect(status).toBe(422);
    expect(body).toHaveProperty("error", "Triangle should have 3 side");
  });

  test("should return an error for triangle sides less than or equal to 0", async ({
    request,
  }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);
    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.VALIDATION_DATA.zeroSides
    );

    expect(status).toBe(422);
    expect(body).toHaveProperty(
      "error",
      "All triangle sides should be greater than 0"
    );
  });

  test("should return an error for non-numeric side lengths", async ({
    request,
  }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);
    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.VALIDATION_DATA.nonNumericSides
    );

    expect(status).toBe(422);
    expect(body).toHaveProperty(
      "error",
      "All triangle sides should be numeric"
    );
  });

  test("should return an error for input with extra sides", async ({
    request,
  }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);
    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.VALIDATION_DATA.extraSides
    );

    expect(status).toBe(422);
    expect(body).toHaveProperty(
      "error",
      "Invalid input: only three sides are allowed"
    );
  });
});
