module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '916ea159de98f87c8848fb7fb4d546ba'),
  },
});
