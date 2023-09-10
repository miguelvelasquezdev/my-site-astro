const GATrackingId = import.meta.env.PUBLIC_ANYBODY;

export const GA_TRACKING_ID = GATrackingId;

export const pageview = (url, title) => {
  gtag("config", GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
  });
};
