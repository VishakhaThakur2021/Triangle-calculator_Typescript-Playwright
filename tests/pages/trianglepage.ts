import { APIRequestContext } from "@playwright/test";

export class TrianglePage {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext, baseUrl: string) {
    this.request = request;
    this.baseUrl = baseUrl;
  }

  async checkTriangleSides(data: { [key: string]: any }) {
    const response = await this.request.post(this.baseUrl, { data });
    const body = await response.json();
    return { status: response.status(), body };
  }

  async getVersion() {
    const response = await this.request.get(`${this.baseUrl}/version`);
    return { status: response.status(), body: await response.json() };
  }
}
