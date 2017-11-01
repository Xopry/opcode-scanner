module.exports = pak => {
	let prev = pak.prev('C_REQUEST_IMAGE_DATA')

	return prev && pak.parse() && pak.parsed.name === prev.parsed.image && pak.parsed.data.slice(0, 4).toString() === 'TERA'
}