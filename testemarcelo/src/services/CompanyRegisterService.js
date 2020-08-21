const { RESTDataSource } = require("apollo-datasource-rest");
const { Company } = require("../graphql/modules/company/resolvers");

class CompanyRegisterService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://sandbox.xerpa.com.br/api/g";
	}
	willSendRequest(request) {
		request.headers.set(
			"Authorization",
			"Bearer Z_RVYMf6jsUP4CsmVzR-qi-N5TGWmrI0jBDazT1b8ds=",
		);
	}

	async getCompany(id) {
		console.log("teste");
		return this.get(`/company/${id}`);
	}
}

module.exports = new CompanyRegisterService();
