module.exports = pak => {
	let next = pak.next()

	return next && next.name() === 'S_GET_USER_LIST' && pak.parse(true)
}