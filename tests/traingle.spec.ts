import { test, expect } from "@playwright/test";
import { TrianglePage } from "../tests/pages/trianglepage";
import { CONFIG } from "../tests/config/config";

test.describe("/ Triangle Endpoint Tests", () => {
  test("should return equilateral for a triangle with all sides equal", async ({
    request,
  }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);

    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.TRIANGLE_DATA.equilateral
    );

    expect(status).toBe(200);
    expect(body).toHaveProperty("result", "This is equilateral triangle");
  });

  test("should return isosceles for a triangle with two equal sides", async ({
    request,
  }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);

    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.TRIANGLE_DATA.isosceles
    );

    expect(status).toBe(201);
    expect(body).toHaveProperty("result", "This is isosceles triangle");
  });

  test("should return versatile for a triangle with no equal sides", async ({
    request,
  }) => {
    const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);

    const { status, body } = await trianglePage.checkTriangleSides(
      CONFIG.TRIANGLE_DATA.versatile
    );

    expect(status).toBe(200);
    expect(body).toHaveProperty("result", "This is versatile triangle");
  });
});

test("should fetch the version", async ({ request }) => {
  const trianglePage = new TrianglePage(request, CONFIG.BASE_URL);
  const { status, body } = await trianglePage.getVersion();

  console.log("Status Code:", status);
  console.log("Response Body:", body);

  expect(status).toBe(200);
});
