const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const CompanyRegisterService = require("./src/services/CompanyRegisterService");

const server = new ApolloServer({
	...graphql,
	dataSources: () => ({
		companyRegisterService: CompanyRegisterService,
	}),
});

server.listen().then(({ url }) => console.log(url));

// willSendRequest(request: RequestOptions) {
// 	request.headers.set(
// 		"Authorization",
// 		"Bearer Z_RVYMf6jsUP4CsmVzR-qi-N5TGWmrI0jBDazT1b8ds=",
// 	);
// }
