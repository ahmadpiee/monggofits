import React from "react"
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@material-ui/core"
import ReactMarkdown from "react-markdown"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "@components/ui"
import { ExpandMoreIcon } from "@components/Icons"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: "100%",
    minHeight: "60vh",
    marginBottom: "2rem",
  },
  accordionContainer: {
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 30rem",
    [theme.breakpoints.down("lg")]: {
      padding: "0 20rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 10rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 3.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
    },
  },

  content: {
    ...theme.typography.body1,
  },
}))

const TermsAndConditions = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query GetTermsAndConditions {
      allStrapiTermAndConditions {
        edges {
          node {
            name
            content
            strapiId
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Grid classes={{ root: classes.mainContainer }}>
        {data.allStrapiTermAndConditions.edges.map(({ node }) => (
          <Grid
            item
            container
            classes={{ root: classes.accordionContainer }}
            key={node.strapiId}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  {node.name}
                </Typography>
              </AccordionSummary>
              {/*  */}
              <AccordionDetails>
                <ReactMarkdown className={classes.content} skipHtml>
                  {node.content}
                </ReactMarkdown>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default TermsAndConditions
