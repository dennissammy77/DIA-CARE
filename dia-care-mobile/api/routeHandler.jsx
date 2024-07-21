async function RouteHandler() {
	const env = process.env.NODE_ENV;

	const BASE_URL = process.env.BASEURL || 'http://localhost/5001';
    return BASE_URL;
}

export default RouteHandler;