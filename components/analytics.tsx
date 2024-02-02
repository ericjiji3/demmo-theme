'use client';

import {
  AnalyticsEventName,
  ShopifyPageViewPayload,
  ShopifySalesChannel,
  getClientBrowserParameters,
  sendShopifyAnalytics
} from '@shopify/hydrogen-react';

import { useEffect } from 'react';
const ShopifyAnalytics = () => {
  function sendPageView(analyticsPageData: ShopifyPageViewPayload) {
    const payload = {
      ...getClientBrowserParameters(),
      ...analyticsPageData
    } satisfies Partial<ShopifyPageViewPayload>;
    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload
    });
    console.log(payload);
  }
  // Hook into your router's page change events to fire this analytics event:
  // for example, in NextJS:
  const analyticsShopData = {
    shopId: 'gid://shopify/Shop/<shopid>',
    currency: 'EUR',
    shopifySalesChannel: ShopifySalesChannel.headless,
    hasUserConsent: true
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const analytics: any = {
    ...analyticsShopData
  };

  useEffect(() => {
    sendPageView(analytics);
  }, [analytics]);

  return <></>;
};
export default ShopifyAnalytics;
