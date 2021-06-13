import Joi from "joi";
import _ from "lodash";
import request from "supertest";
import { schema } from "../../src/schema/git-hub-pull-schema";
import { checkStatusCode } from "../../src/helpers/super-test-utils"
import GitHubTestConfig from "../../src/config/typescript-github-test-config"


describe("Typescript github api", () => {
  it("Sample test for jest validation", async done => {
    expect(1).toBe(1);
    done();
  })

  it("Validate github GET request of PR 44554", async done => {
    const res = await request(GitHubTestConfig.typescriptRepoBaseUrl()).get("pulls/44554")
      .set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:87.0) Gecko/20100101 Firefox/87.0");
    expect(res.status).toBe(200);
    done();
  });

  it("Validate github GET request throws error on invalid url", async done => {
    const result = await request(GitHubTestConfig.typescriptRepoBaseUrl()).get("pullss")
      .set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:87.0) Gecko/20100101 Firefox/87.0")
    expect(result.status).toBe(404)
    done();
  });

  it("Validate github GET request with JOI schema succes", async done => {
    const res = await request(GitHubTestConfig.typescriptRepoBaseUrl()).get("pulls")
      .set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:87.0) Gecko/20100101 Firefox/87.0");
    Joi.assert(res.body[0].user, schema, { "allowUnknown": true });
    done();
  });

  it("Validate github GET request with JOI schema failure", async done => {
    // JOI assertion will fail if there are addition attributes inside the response JSON
    // this test will fail 
    const res = await request(GitHubTestConfig.typescriptRepoBaseUrl()).get("pulls")
      .set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:87.0) Gecko/20100101 Firefox/87.0");
    expect(Joi.assert(res.body[0].user, schema));
    done();
  });

  it("Validate github GET request with JOI schema succes", async done => {
    const res = await request(GitHubTestConfig.typescriptRepoBaseUrl()).get("pulls/44554")
      .set("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:87.0) Gecko/20100101 Firefox/87.0")
      .set("temp-header", "val2");
    // checkStatusCode(res, 201); to make the test fail uncomment
    checkStatusCode(res);
    done();
  });
});
