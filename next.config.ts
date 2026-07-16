import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * lento-frontend 의 SVG 에셋을 원본 그대로 React 컴포넌트로 불러온다.
   * Next 기본 next-image-loader 가 .svg 를 먼저 가로채므로, 해당 룰에서 svg 를
   * 제외한 뒤 svgr 을 붙이는 공식 레시피를 따른다.
   * `?url` 을 붙여 import 하면 기존처럼 URL 로도 쓸 수 있다.
   */
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: any) => rule?.test?.test?.('.svg'),
    );

    if (!fileLoaderRule) {
      throw new Error('svgr 설정 실패: next-image-loader 룰을 찾지 못했습니다.');
    }

    config.module.rules.push(
      { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not ?? []), /url/] },
        use: [{ loader: '@svgr/webpack', options: { svgo: false, titleProp: true } }],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
