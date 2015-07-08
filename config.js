module.exports = {

	"database": (process.env.MONGOLAB_URI || 'localhost') + '/' + process.env.DB_NAME,
	"port": process.env.PORT || 3000,
	"secretKey": "YourSecretKey"

}