export const getPlans = (t) => [
  {
    id: "plan-01",
    order: 0,
    show: true,
    path: "landing-page",
    title: t("plans.landing.title"),
    price: 350,
    caption: t("plans.landing.caption"),
    features: t("plans.landing.features", { returnObjects: true }),
    maintenance: {
      price: 15,
      period: t("common.label.per_month"),
      title: t("plans.landing.maintenance.title"),
      caption: t("plans.landing.maintenance.caption"),
      disclaimer: t("plans.landing.maintenance.disclaimer")
    }
  },
  {
    id: "plan-02",
    order: 1,
    show: true,
    path: "website",
    title: t("plans.professional.title"),
    price: 850,
    caption: t("plans.professional.caption"),
    features: t("plans.professional.features", { returnObjects: true }),
    maintenance: {
      price: 25,
      period: t("common.label.per_month"),
      title: t("plans.professional.maintenance.title"),
      caption: t("plans.professional.maintenance.caption"),
      disclaimer: t("plans.professional.maintenance.disclaimer")
    }
  },
  {
    id: "plan-03",
    order: 2,
    show: true,
    path: "web-app",
    title: t("plans.app.title"),
    price: 2550,
    pricePrefix: t("common.label.from"),
    caption: t("plans.app.caption"),
    features: t("plans.app.features", { returnObjects: true }),
    maintenance: {
      price: 45,
      period: t("common.label.per_month"),
      title: t("plans.app.maintenance.title"),
      caption: t("plans.app.maintenance.caption"),
      disclaimer: t("plans.app.maintenance.disclaimer")
    }
  },
  {
    id: "plan-04",
    order: 3,
    show: true,
    path: "custom",
    title: t("plans.custom.title"),
    text: t("plans.custom.text"),
    caption: t("plans.custom.caption"),
    features: t("plans.custom.features", { returnObjects: true }),
  },
];
