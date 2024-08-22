import clsx from "clsx"
import Link from "@docusaurus/Link"
import React from "react"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "",
    Svg: require("@site/static/img/undraw_techjam.svg").default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: "",
    Svg: require("@site/static/img/undraw_guides.svg").default,
    description: (
      <>
       
      </>
    ),
  },
  // TODO: SWAT Public Automations coming soon
  // Adjust `col--6` below to `col--4` to accommodate the additional Feature Tile
  // {
  //   title: "SWAT Automations",
  //   Svg: require("@site/static/img/undraw_automation.svg").default,
  //   description: (
  //     <>
  //       Temporary placeholder text that can be updated later. Temporary
  //       placeholder text that can be updated later.
  //     </>
  //   ),
  // },
]

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
