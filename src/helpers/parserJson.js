export const parserJson = data => {
	return Object.entries(data).map(([id, item]) => {
		return {
			...item,
			id
		}
	})
}