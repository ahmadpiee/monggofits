import * as React from "react"

import Layout from "../components/ui/Layout"
import HeroBlock from "../components/home/HeroBlock"
import PromotionalProducts from "../components/home/PromotionalProducts"
import FeaturedProducts from "../components/home/FeaturedProducts"
import CallToAction from "../components/home/CallToAction"
import AdditionalServices from "../components/home/AdditionialServices"

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
