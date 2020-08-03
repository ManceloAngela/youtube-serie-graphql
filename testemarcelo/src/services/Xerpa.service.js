const { RESTDataSource} = require("apollo-datasource-rest");

class XerpaService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://sandbox.xerpa.com.br";
  }
  willSendRequest(request) {
    request.headers.set(
      "Authorization",
      "Bearer Z_RVYMf6jsUP4CsmVzR-qi-N5TGWmrI0jBDazT1b8ds="
    );
  }

  async company() {
    const data = await this.post("/api/g");
    console.log(data)
    return  data;
  }
}

module.exports = new XerpaService();