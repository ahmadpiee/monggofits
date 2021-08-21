import * as React from "react"

import { Layout } from "@components/ui"
import {
  HeroBlock,
  PromotionalProducts,
  FeaturedProducts,
  CallToAction,
  AdditionalServices,
} from "@components/home"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
    <FeaturedProducts />
    <CallToAction />
    <AdditionalServices />
  </Layout>
)

export default IndexPage
