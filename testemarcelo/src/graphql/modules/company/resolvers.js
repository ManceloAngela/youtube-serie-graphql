module.exports = {
	Company: {
		id() {
			return "247";
		},
	},
	RootQueryType: {
		company: {
			async(_par, { id }, { dataSources }) {
				console.log("teste3");
				return this.dataSources.getCompany(id);
			},
		},
	},
};
