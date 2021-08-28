
export const corsOptionsDelegate = ((listCorsOrigin: Array<string>) => {
	return ((req: any, callback: any) => {
		let corsOptions;
		
		if(listCorsOrigin.indexOf(req.header('Origin')) !== -1) {
			corsOptions = {origin: true};
		} else {
			corsOptions = {origin: false};
		}
		callback(null, corsOptions);
	});
});

