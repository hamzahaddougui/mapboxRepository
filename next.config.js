const withImages = require("next-images");

module.exports = withImages({
  //   target: "//your target",
  webpack: function (config, { webpack }) {
    config.module.rules.push({
      test: /\.(eot|svg|gif|md)$/,
      loaders: ["style-loader", "css-loader", "less-loader"],
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
});

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/matcher",
        permanent: true,
      },
    ];
  },
};
